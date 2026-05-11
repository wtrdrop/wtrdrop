// ─── Site Configuration with localStorage persistence ───
// All editable website content lives here. Components read from getConfig().
// The admin dashboard writes via saveConfig().

export interface SiteConfig {
  // ... (other stuff)
  projects: {
    title: string;
    category: string;
    tools: string;       // <--- ADD THIS BACK
    image: string;
    description: string;
  }[];
}

const DEFAULT_CONFIG: SiteConfig = {
  // ... (other stuff)
  projects: [
    {
      title: "WtrDrop — Customer App",
      category: "Mobile App · Water Delivery Platform",
      tools: "",         // <--- ADD THIS BACK (leave empty)
      image: "/images/wtrdrop.png",
      description: "Customers browse suppliers..."
    },
    {
      title: "WtrDrop — Supplier App",
      category: "Mobile App · Supplier Management",
      tools: "",         // <--- ADD THIS BACK (leave empty)
      image: "/images/wtrdrop.png",
      description: "Suppliers manage inventory..."
    },
    {
      title: "WtrDrop — Driver App",
      category: "Mobile App · Delivery Management",
      tools: "",         // <--- ADD THIS BACK (leave empty)
      image: "/images/wtrdrop.png",
      description: "Drivers get live delivery..."
    },
  ],
};
