// IMPORTANT: Replace with your actual domain when launching (e.g., "https://glazzone.com/")
const baseURL = "http://localhost:3000/";

// Import and set font for each variant
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// Customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark",          // dark | light | system
  neutral: "slate",       // Gives a colder, metallic hardware feel
  brand: "aqua",          // Electric / LED tech vibe
  accent: "orange",       // Copper / Indicator lights contrast
  solid: "color",         
  solidStyle: "flat",     // Clean, matte finish like PCB boards
  border: "sharp",        // Precision edges (No playful rounded corners!)
  surface: "translucent", // Glassy, high-tech screen feel
  transition: "micro",    // Fast, snappy, machine-like animations
  scaling: "95",          // Slightly denser UI to fit more technical specs
};

const dataStyle = {
  variant: "outline",     // Outline looks more like engineering software/blueprints
  mode: "categorical",    
  height: 24,             
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

// Metadata for SEO & Social Sharing (Updated for Electronics Engineering)
const meta = {
  home: {
    path: "/",
    title: "GLAZZONE | Electronics Engineering & Technological Solutions",
    description:
      "Specializing in advanced electronics engineering, custom hardware design, and innovative technological solutions for complex systems.",
    image: "/images/og/home.jpg", // Make sure to replace this image in your public folder!
    canonical: baseURL,
    robots: "index,follow",
    alternates: [{ href: baseURL, hrefLang: "en" }],
  },
  // add more routes and reference them in page.tsx
};

// Default schema data for Google Search
const schema = {
  logo: "", // Add the path to your logo here, e.g., "/images/logo.png"
  type: "Organization",
  name: "GLAZZONE",
  description: meta.home.description,
  email: "baruchglazz@gmail.com",
};

// Social links
const social = {
  twitter: "",
  linkedin: "", // Add your professional or company LinkedIn here
  discord: "",
};

export { baseURL, fonts, style, meta, schema, social, dataStyle };