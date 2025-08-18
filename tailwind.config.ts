
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom portfolio colors
				portfolioBlue: '#0EA5E9',
				portfolioPurple: '#8B5CF6',
				portfolioPink: '#E94560',
				portfolioOrange: '#F97316',
				portfolioLightBlue: '#D3E4FD',
				portfolioLightPurple: '#E5DEFF',
				portfolioLightPink: '#FFDEE2',
				portfolioLightOrange: '#FEC6A1',
				dark: {
					100: '#121212',
					200: '#1E1E1E',
					300: '#2D2D2D',
					400: '#3D3D3D',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['SF Pro Display', 'system-ui', 'sans-serif'],
				serif: ['SF Pro Text', 'Georgia', 'serif'],
				arial: ['Arial', 'sans-serif'],
				verdana: ['Verdana', 'sans-serif'],
				tahoma: ['Tahoma', 'sans-serif'],
				helvetica: ['Helvetica', 'Arial', 'sans-serif'],
				calibri: ['Calibri', 'sans-serif'],
				lucida: ['Lucida Sans', 'Lucida Grande', 'sans-serif'],
				playfair: ['Playfair Display', 'serif'],
				lato: ['Lato', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-in-bottom': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'floating': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'float-tools': {
					'0%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-15px) rotate(5deg)' },
					'100%': { transform: 'translateY(0) rotate(0deg)' }
				},
				'spin-star': {
					'0%': { transform: 'rotate(0deg) scale(1)' },
					'50%': { transform: 'rotate(180deg) scale(1.2)' },
					'100%': { transform: 'rotate(360deg) scale(1)' }
				},
				'bounce-skill': {
					'0%, 100%': { transform: 'translateY(0) scale(1)' },
					'50%': { transform: 'translateY(-20px) scale(1.1)' }
				},
				'glow': {
					'0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))' },
					'50%': { filter: 'brightness(1.3) drop-shadow(0 0 15px rgba(59, 130, 246, 0.8))' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-in-bottom': 'slide-in-bottom 0.5s ease-out',
				'floating': 'floating 3s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'float-tools': 'float-tools 5s ease-in-out infinite',
				'spin-star': 'spin-star 8s linear infinite',
				'bounce-skill': 'bounce-skill 3s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
