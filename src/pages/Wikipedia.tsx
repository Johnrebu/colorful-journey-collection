import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import useSeo from "@/hooks/useSeo";
import { certifications, educationItems, skills } from "@/components/resume/resumeData";
import ParallaxProfilePhoto from "@/components/ParallaxProfilePhoto";
import CurrentRoleImpact from "@/components/CurrentRoleImpact";
import johnImage from "@/images/johnson-professional.jpg";

export default function Wikipedia() {
  useSeo({
    title: "Wikipedia Profile - Johnson T | Full Stack Developer & AI Specialist",
    description: "Wikipedia-style profile page for Johnson T: Aionion Capital role, education, science background, and technical expertise.",
    keywords: "wikipedia profile, Aionion Capital, full stack developer, AI video creator, automation, education, tech transition",
  });

  return (
    <div className="space-y-8">
      <section className="google-surface relative overflow-hidden rounded-[2rem] p-6 md:p-10">
        <div className="google-grid-bg absolute inset-0 opacity-50" />
        <div className="relative">
          <h1 className="text-4xl text-slate-900 dark:text-zinc-100 md:text-5xl">Johnson T</h1>
          <p className="mt-2 text-slate-600 dark:text-zinc-300">Wikipedia-style Profile & Comprehensive Career Summary</p>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="space-y-6 lg:col-span-3">
          <Card className="border-slate-200 bg-white/80 dark:border-zinc-700 dark:bg-zinc-900/70">
            <CardContent className="p-5 text-slate-700 dark:text-zinc-300">
              <p className="text-lg leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Johnson T</strong> is a Full Stack Developer, AI Video Creator, Automation Specialist, and Multidisciplinary Engineering Lead currently working at <strong className="text-[#4285F4]">Aionion Capital</strong>. He previously spent 9+ years as a Chemistry Educator before transitioning into software engineering and digital operations.
              </p>
            </CardContent>
          </Card>

          {/* Current Role & Measured Impact Section */}
          <CurrentRoleImpact />

          <Card className="border-slate-200 bg-white/80 dark:border-zinc-700 dark:bg-zinc-900/70">
            <CardContent className="p-5 space-y-4">
              <h2 className="text-2xl text-slate-900 dark:text-white">Technical Skills and Certifications</h2>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="justify-center py-1 font-semibold">
                    {skill.name}
                  </Badge>
                ))}
              </div>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-zinc-300">
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/80 dark:border-zinc-700 dark:bg-zinc-900/70">
            <CardContent className="p-5 space-y-4">
              <h2 className="text-2xl text-slate-900 dark:text-white">Career Evolution & Measured Impact</h2>
              <p className="text-slate-700 dark:text-zinc-300">
                At Aionion Capital, Johnson oversees 4 operational pillars spanning full-stack backend development (sub-300ms API latency, ≥ 99.5% uptime, 100% CRM sync), AI-powered educational video production (4+ videos/mo, ≥ 40% watch time), graphic branding, and live event technology orchestration.
              </p>
              <p className="text-slate-700 dark:text-zinc-300">
                His scientific training in chemistry enables hypothesis-driven debugging, zero-assumption troubleshooting, and pedagogical clarity across all product workflows.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/80 dark:border-zinc-700 dark:bg-zinc-900/70">
            <CardContent className="p-5 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                Official YouTube Channels & AI Video Production
              </h2>
              <p className="text-slate-700 dark:text-zinc-300 leading-relaxed">
                Johnson creates end-to-end AI videos combining voice cloning, dynamic avatar synthesis, character animation, and automated editing. His video creations are published across his official YouTube channels:
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <a
                  href="https://www.youtube.com/@aionionofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-blue-500/20 bg-blue-500/5 p-3.5 transition hover:bg-blue-500/10"
                >
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">Aionion Capital Official</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-mono font-semibold">@aionionofficial</div>
                    <div className="text-[10px] text-slate-500 dark:text-zinc-500 mt-0.5">Company Channel</div>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">Visit →</span>
                </a>
                <a
                  href="https://www.youtube.com/@jenishajeni-l9i"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-red-500/20 bg-red-500/5 p-3.5 transition hover:bg-red-500/10"
                >
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">Jenisha Jeni</div>
                    <div className="text-xs text-red-600 dark:text-red-400 font-mono font-semibold">@jenishajeni-l9i</div>
                  </div>
                  <span className="text-xs font-semibold text-red-600 dark:text-red-400">Visit →</span>
                </a>
                <a
                  href="https://www.youtube.com/@johnElonSon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-red-500/20 bg-red-500/5 p-3.5 transition hover:bg-red-500/10"
                >
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">John Elon Son</div>
                    <div className="text-xs text-red-600 dark:text-red-400 font-mono font-semibold">@johnElonSon</div>
                  </div>
                  <span className="text-xs font-semibold text-red-600 dark:text-red-400">Visit →</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <aside className="lg:col-span-1">
          <Card className="sticky top-4 border-slate-200 bg-white/85 dark:border-zinc-700 dark:bg-zinc-900/75">
            <CardContent className="space-y-4 p-4">
              <div className="aspect-[3/4] w-full overflow-hidden rounded border relative">
                <ParallaxProfilePhoto
                  src={johnImage}
                  alt="Professional photo of Johnson T"
                  shape="rounded"
                  containerClassName="h-full w-full"
                />
              </div>

              <h3 className="text-center font-semibold text-slate-900 dark:text-white">Johnson T</h3>

              <table className="w-full text-sm text-slate-700 dark:text-zinc-300">
                <tbody>
                  <tr>
                    <td className="font-medium text-slate-500 dark:text-zinc-400">Current Co.</td>
                    <td className="font-bold text-[#4285F4]">
                      <div className="flex items-center gap-1.5">
                        <span className="h-5 px-1.5 py-0.5 rounded bg-white border border-slate-200 dark:border-white/10 flex items-center shrink-0">
                          <img src="/aionion-capital-logo.png" alt="Aionion Capital" className="h-full w-auto object-contain" />
                        </span>
                        <span>Aionion Capital</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-medium text-slate-500 dark:text-zinc-400">Occupation</td>
                    <td>Full Stack Dev, AI Video, Automation Specialist</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-slate-500 dark:text-zinc-400">Education</td>
                    <td>M.Sc. Chemistry, B.Ed, PGDCA</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-slate-500 dark:text-zinc-400">Years active</td>
                    <td>2015–present</td>
                  </tr>
                </tbody>
              </table>

              <div className="border-t border-slate-200 pt-3 dark:border-zinc-700">
                <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">Education History</h4>
                <div className="space-y-2 text-sm">
                  {educationItems.map((edu) => (
                    <div key={`${edu.degree}-${edu.institution}`} className="border-l-2 border-[#4285F4]/30 pl-3">
                      <div className="font-medium text-slate-800 dark:text-zinc-100">{edu.degree}</div>
                      <div className="text-xs text-slate-500 dark:text-zinc-400">{edu.institution}</div>
                      <div className="text-xs text-slate-500 dark:text-zinc-400">{edu.period}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
