export const APP_NAME = "NexaCore";
export const APP_FULL_NAME = "NexaCore IT Solutions";
export const APP_TAGLINE = "Engineering the Future of Enterprise Technology";

export const CONTACT_EMAIL = "hello@nexacore.io";
export const CONTACT_PHONE = "+1 (888) 639-2267";
export const CONTACT_ADDRESS = "350 Fifth Avenue, Suite 4200, New York, NY 10118";

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Technologies", href: "#technologies" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const navCTA = {
  label: "Get a Free Audit",
  href: "#contact",
};

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export const stats: Stat[] = [
  { value: "500", label: "Enterprise Clients", suffix: "+" },
  { value: "99.9", label: "Uptime SLA", suffix: "%" },
  { value: "15", label: "Years of Excellence", suffix: "+" },
  { value: "24", label: "Support Coverage", suffix: "/7" },
];