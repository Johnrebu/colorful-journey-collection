import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@3.23.8'

const BodySchema = z.object({
  name: z.string().trim().min(2).max(50),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().max(40).optional().default(''),
  message: z.string().trim().min(10).max(2000),
})

// Simple in-memory rate limit: 3 submissions per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 3
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  return false
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('cf-connecting-ip') ??
    'unknown'
  if (rateLimited(ip)) {
    return json({ error: 'Too many messages sent. Please try again later.' }, 429)
  }

  let raw: unknown
  try {
    raw = await req.json()
  } catch {
    return json({ error: 'Invalid JSON body' }, 400)
  }

  const parsed = BodySchema.safeParse(raw)
  if (!parsed.success) {
    return json({ error: parsed.error.flatten().fieldErrors }, 400)
  }
  const { name, email, phone, message } = parsed.data

  const serviceId = Deno.env.get('EMAILJS_SERVICE_ID')
  const templateId = Deno.env.get('EMAILJS_TEMPLATE_ID')
  const publicKey = Deno.env.get('EMAILJS_PUBLIC_KEY')
  const privateKey = Deno.env.get('EMAILJS_PRIVATE_KEY')

  if (!serviceId || !templateId || !publicKey) {
    console.error('EmailJS configuration missing')
    return json({ error: 'Email service is not configured.' }, 500)
  }

  const payload: Record<string, unknown> = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      from_name: name,
      from_email: email,
      phone: phone || 'Not provided',
      message,
      to_name: 'Johnson T',
      reply_to: email,
    },
  }
  if (privateKey) payload.accessToken = privateKey

  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', origin: 'http://localhost' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    console.error('EmailJS send failed', res.status, await res.text())
    return json({ error: 'Failed to send message. Please try again.' }, 502)
  }

  return json({ success: true })
})