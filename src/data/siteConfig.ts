// ─── Site Configuration with localStorage persistence ───
// All editable website content lives here. Components read from getConfig().
// The admin dashboard writes via saveConfig().

export interface SiteConfig {
  socialLinks: {
    facebook: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  contact: {
    email: string;
    focus: string;
  };
  downloadLink: string;
  testimonials: {
    name: string;
    role: string;
    text: string;
    avatarLetter: string;
    avatarGradient: string;
  }[];
  projects: {
    title: string;
    category: string;
    tools: string;
    image: string;
    description: string;
  }[];
}

const DEFAULT_CONFIG: SiteConfig = {
  socialLinks: {
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/in/",
    twitter: "https://x.com/WtrDrop_in",
    instagram: "https://www.instagram.com/wtrdrop?igsh=MWVicTlzZ3E4MnJqbQ==",
  },
  contact: {
    email: "Query@wtrdrop.in",
    focus: "Water Delivery · Ecosystem · Platform",
  },
  downloadLink: "https://play.google.com/store/apps/details?id=com.wtrdrop",
  testimonials: [
    {
      name: "Sanjay",
      role: "Customer, Delhi",
      text: "\"WtrDrop has completely changed how we get water at home. The subscription feature is a lifesaver — we never run out anymore!\"",
      avatarLetter: "S",
      avatarGradient: "linear-gradient(135deg, #008BD2, #03DAC6)",
    },
    {
      name: "Akthar",
      role: "Water Supplier, Delhi",
      text: "\"As a supplier, WtrDrop helped me grow my business 3x. The driver management and GPS tracking make operations smooth and efficient.\"",
      avatarLetter: "A",
      avatarGradient: "linear-gradient(135deg, #03DAC6, #018786)",
    },
    {
      name: "Ayaan",
      role: "Customer, Delhi",
      text: "\"The real-time tracking feature is amazing! I can see exactly when my water will arrive. Plus, the pay-on-delivery option is super convenient.\"",
      avatarLetter: "A",
      avatarGradient: "linear-gradient(135deg, #008BD2, #5B3CC4)",
    },
  ],
  projects: [
    {
      title: "WtrDrop — Customer App",
      category: "Mobile App · Water Delivery Platform",
      
      image: "/images/wtrdrop.png",
      description: "Customers browse suppliers, place water orders, and track real-time delivery on a live map. Features subscription plans, active order limits, OTP/QR delivery confirmation, and in-app support.",
    },
    {
      title: "WtrDrop — Supplier App",
      category: "Mobile App · Supplier Management",
      
      image: "/images/wtrdrop.png",
      description: "Suppliers manage inventory, receive and assign orders to drivers, track daily revenue, generate invoices, and handle floor charges. Includes a full driver team management system with QR linking.",
    },
    {
      title: "WtrDrop — Driver App",
      category: "Mobile App · Delivery Management",
      
      image: "/images/wtrdrop.png",
      description: "Drivers get live delivery assignments, navigate routes on Google Maps, complete orders via QR scan, manage daily cash collection, track commission earnings, and deposit settlements to suppliers.",
    },
  ],
};

const STORAGE_KEY = "wtrdrop_site_config";

export function getConfig(): SiteConfig {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Merge with defaults to handle any new fields added later
      return { ...DEFAULT_CONFIG, ...parsed };
    }
  } catch (e) {
    console.warn("Failed to read site config from localStorage:", e);
  }
  return DEFAULT_CONFIG;
}

export function saveConfig(config: SiteConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error("Failed to save site config:", e);
  }
}

export function resetConfig(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function getDefaultConfig(): SiteConfig {
  return JSON.parse(JSON.stringify(DEFAULT_CONFIG));
}
