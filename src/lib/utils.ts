
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fontVariants = {
  heading: {
    h1: "font-playfair text-4xl md:text-5xl lg:text-6xl font-bold",
    h2: "font-playfair text-3xl md:text-4xl font-bold",
    h3: "font-playfair text-2xl md:text-3xl font-semibold",
    h4: "font-playfair text-xl md:text-2xl font-semibold",
    h5: "font-playfair text-lg md:text-xl font-medium",
    title: "font-playfair text-xl font-semibold",
    subtitle: "font-montserrat text-lg font-medium",
  },
  body: {
    default: "font-lato text-base",
    large: "font-lato text-lg",
    small: "font-lato text-sm",
    montserrat: "font-montserrat text-base",
    montserratLarge: "font-montserrat text-lg",
  },
  special: {
    gradientText: "bg-gradient-to-r from-primary via-portfolioPurple to-portfolioPink text-transparent bg-clip-text",
    animatedGradient: "text-gradient-animate",
  }
}
