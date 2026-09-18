// ─── Site Configuration with localStorage persistence ───
// All editable website content lives here. Components read from getConfig().

export interface SiteConfig {
  socialLinks: {
    facebook: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    googleMaps: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    focus: string;
  };
  leadership: {
    founderAndCeo: string;
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
    googleMaps: "https://share.google/RTFmzWusPosQeMAho",
  },
  contact: {
    email: "Query@wtrdrop.in",
    phone: "+91 8076107210",
    whatsapp: "https://wa.me/918076107210",
    focus: "Water Delivery · Ecosystem · Platform",
  },
  leadership: {
    founderAndCeo: "Salman Ali",
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
      image: "/images/customer_app_ui.png",
      description: "Customers browse suppliers, place water orders, and track real-time delivery on a live map. Features subscription plans, active order limits, OTP/QR delivery confirmation, and in-app support.",
    },
    {
      title: "WtrDrop — Supplier App",
      category: "Mobile App · Supplier Management",
      image: "/images/supplier_app_ui.png",
      description: "Suppliers manage inventory, receive and assign orders to drivers, track daily revenue, generate invoices, and handle floor charges. Includes a full driver team management system with QR linking.",
    },
    {
      title: "WtrDrop — Driver App",
      category: "Mobile App · Delivery Management",
      image: "/images/driver_app_ui.png",
      description: "Drivers get live delivery assignments, navigate routes on Google Maps, complete orders via QR scan, manage daily cash collection, track commission earnings, and deposit settlements to suppliers.",
    },
  ],
};

export function getConfig(): SiteConfig {
  return DEFAULT_CONFIG;
}
