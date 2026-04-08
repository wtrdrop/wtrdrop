import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getConfig, saveConfig, resetConfig, getDefaultConfig, SiteConfig } from "../data/siteConfig";
import { isAdminAuthenticated } from "./AdminLogin";
import "./AdminDashboard.css";

type Tab = "social" | "contact" | "testimonials" | "projects" | "download";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("social");
  const [config, setConfig] = useState<SiteConfig>(getConfig());
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      navigate("/wtr-admin-secure-v88");
    }
  }, [navigate]);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSave = () => {
    saveConfig(config);
    showToast("Changes saved! Click 'View Website' to see them live.");
  };

  const handleViewSite = (e: React.MouseEvent) => {
    e.preventDefault();
    // Force a full page reload so the main site re-reads from localStorage
    window.location.href = "/";
  };

  const handleReset = () => {
    if (window.confirm("Reset all content to defaults? This cannot be undone.")) {
      resetConfig();
      setConfig(getDefaultConfig());
      showToast("Reset to defaults!");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("wtrdrop_admin_auth");
    navigate("/wtr-admin-secure-v88");
  };

  const tabs: { key: Tab; label: string; icon: string }[] = [
    { key: "social", label: "Social Links", icon: "🔗" },
    { key: "contact", label: "Contact", icon: "📧" },
    { key: "testimonials", label: "Testimonials", icon: "💬" },
    { key: "projects", label: "App Projects", icon: "📱" },
    { key: "download", label: "Download Link", icon: "⬇️" },
  ];

  return (
    <div className="admin-page">
      {/* Toast */}
      {toast && (
        <div className={`admin-toast admin-toast-${toast.type}`}>
          {toast.type === "success" ? "✅" : "❌"} {toast.message}
        </div>
      )}

      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <img src="/clogo.png" alt="WtrDrop" style={{ width: 40, height: 40, objectFit: "contain" }} />
          <span className="admin-sidebar-title">WtrDrop Admin</span>
        </div>

        <nav className="admin-nav">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`admin-nav-item ${activeTab === tab.key ? "admin-nav-active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <span className="admin-nav-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <button className="admin-reset-btn" onClick={handleReset}>Reset to Defaults</button>
          <button className="admin-logout-btn" onClick={handleLogout}>Logout</button>
          <a href="/" className="admin-view-site" onClick={handleViewSite}>← View Website</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <div className="admin-header">
          <h1 className="admin-page-title">{tabs.find(t => t.key === activeTab)?.label}</h1>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="admin-save-btn" onClick={handleSave}>💾 Save Changes</button>
            <button className="admin-save-btn" onClick={handleViewSite} style={{ background: '#065f46' }}>🌐 View Website</button>
          </div>
        </div>

        <div className="admin-content">
          {/* Social Links Tab */}
          {activeTab === "social" && (
            <div className="admin-section">
              <div className="admin-card">
                <h3 className="admin-card-title">Social Media URLs</h3>
                <p className="admin-card-desc">Update your social media profile links displayed on the website.</p>
                <div className="admin-fields">
                  {(Object.keys(config.socialLinks) as (keyof typeof config.socialLinks)[]).map((key) => (
                    <div className="admin-field" key={key}>
                      <label className="admin-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                      <input
                        className="admin-input"
                        value={config.socialLinks[key]}
                        onChange={(e) => setConfig({
                          ...config,
                          socialLinks: { ...config.socialLinks, [key]: e.target.value }
                        })}
                        placeholder={`https://${key}.com/...`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === "contact" && (
            <div className="admin-section">
              <div className="admin-card">
                <h3 className="admin-card-title">Contact Information</h3>
                <p className="admin-card-desc">Update the email address and focus text shown in the contact section.</p>
                <div className="admin-fields">
                  <div className="admin-field">
                    <label className="admin-label">Email Address</label>
                    <input
                      className="admin-input"
                      value={config.contact.email}
                      onChange={(e) => setConfig({
                        ...config,
                        contact: { ...config.contact, email: e.target.value }
                      })}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="admin-field">
                    <label className="admin-label">Focus / Tagline</label>
                    <input
                      className="admin-input"
                      value={config.contact.focus}
                      onChange={(e) => setConfig({
                        ...config,
                        contact: { ...config.contact, focus: e.target.value }
                      })}
                      placeholder="Water Delivery · Ecosystem · Platform"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Download Link Tab */}
          {activeTab === "download" && (
            <div className="admin-section">
              <div className="admin-card">
                <h3 className="admin-card-title">Download Button Link</h3>
                <p className="admin-card-desc">Set the URL that the "Download Now" button in the navbar links to.</p>
                <div className="admin-fields">
                  <div className="admin-field">
                    <label className="admin-label">Play Store URL</label>
                    <input
                      className="admin-input"
                      value={config.downloadLink}
                      onChange={(e) => setConfig({ ...config, downloadLink: e.target.value })}
                      placeholder="https://play.google.com/store/apps/..."
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Testimonials Tab */}
          {activeTab === "testimonials" && (
            <div className="admin-section">
              {config.testimonials.map((t, idx) => (
                <div className="admin-card" key={idx}>
                  <div className="admin-card-header">
                    <h3 className="admin-card-title">Testimonial #{idx + 1}</h3>
                    <button
                      className="admin-delete-btn"
                      onClick={() => {
                        const updated = [...config.testimonials];
                        updated.splice(idx, 1);
                        setConfig({ ...config, testimonials: updated });
                      }}
                    >🗑️ Remove</button>
                  </div>
                  <div className="admin-fields">
                    <div className="admin-field">
                      <label className="admin-label">Name</label>
                      <input
                        className="admin-input"
                        value={t.name}
                        onChange={(e) => {
                          const updated = [...config.testimonials];
                          updated[idx] = { ...updated[idx], name: e.target.value };
                          setConfig({ ...config, testimonials: updated });
                        }}
                      />
                    </div>
                    <div className="admin-field">
                      <label className="admin-label">Role / Location</label>
                      <input
                        className="admin-input"
                        value={t.role}
                        onChange={(e) => {
                          const updated = [...config.testimonials];
                          updated[idx] = { ...updated[idx], role: e.target.value };
                          setConfig({ ...config, testimonials: updated });
                        }}
                      />
                    </div>
                    <div className="admin-field">
                      <label className="admin-label">Quote</label>
                      <textarea
                        className="admin-input admin-textarea"
                        value={t.text}
                        onChange={(e) => {
                          const updated = [...config.testimonials];
                          updated[idx] = { ...updated[idx], text: e.target.value };
                          setConfig({ ...config, testimonials: updated });
                        }}
                        rows={3}
                      />
                    </div>
                    <div className="admin-field-row">
                      <div className="admin-field">
                        <label className="admin-label">Avatar Letter</label>
                        <input
                          className="admin-input"
                          value={t.avatarLetter}
                          maxLength={1}
                          onChange={(e) => {
                            const updated = [...config.testimonials];
                            updated[idx] = { ...updated[idx], avatarLetter: e.target.value.toUpperCase() };
                            setConfig({ ...config, testimonials: updated });
                          }}
                        />
                      </div>
                      <div className="admin-field">
                        <label className="admin-label">Avatar Gradient</label>
                        <input
                          className="admin-input"
                          value={t.avatarGradient}
                          onChange={(e) => {
                            const updated = [...config.testimonials];
                            updated[idx] = { ...updated[idx], avatarGradient: e.target.value };
                            setConfig({ ...config, testimonials: updated });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button
                className="admin-add-btn"
                onClick={() => {
                  setConfig({
                    ...config,
                    testimonials: [
                      ...config.testimonials,
                      {
                        name: "New Customer",
                        role: "Customer, City",
                        text: "\"Your testimonial here...\"",
                        avatarLetter: "N",
                        avatarGradient: "linear-gradient(135deg, #008BD2, #03DAC6)",
                      },
                    ],
                  });
                }}
              >
                + Add Testimonial
              </button>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div className="admin-section">
              {config.projects.map((p, idx) => (
                <div className="admin-card" key={idx}>
                  <div className="admin-card-header">
                    <h3 className="admin-card-title">Project #{idx + 1}</h3>
                    <button
                      className="admin-delete-btn"
                      onClick={() => {
                        const updated = [...config.projects];
                        updated.splice(idx, 1);
                        setConfig({ ...config, projects: updated });
                      }}
                    >🗑️ Remove</button>
                  </div>
                  <div className="admin-fields">
                    <div className="admin-field">
                      <label className="admin-label">Title</label>
                      <input
                        className="admin-input"
                        value={p.title}
                        onChange={(e) => {
                          const updated = [...config.projects];
                          updated[idx] = { ...updated[idx], title: e.target.value };
                          setConfig({ ...config, projects: updated });
                        }}
                      />
                    </div>
                    <div className="admin-field">
                      <label className="admin-label">Category</label>
                      <input
                        className="admin-input"
                        value={p.category}
                        onChange={(e) => {
                          const updated = [...config.projects];
                          updated[idx] = { ...updated[idx], category: e.target.value };
                          setConfig({ ...config, projects: updated });
                        }}
                      />
                    </div>
                    <div className="admin-field">
                      <label className="admin-label">Tools & Features</label>
                      <input
                        className="admin-input"
                        value={p.tools}
                        onChange={(e) => {
                          const updated = [...config.projects];
                          updated[idx] = { ...updated[idx], tools: e.target.value };
                          setConfig({ ...config, projects: updated });
                        }}
                      />
                    </div>
                    <div className="admin-field">
                      <label className="admin-label">Image URL</label>
                      <input
                        className="admin-input"
                        value={p.image}
                        onChange={(e) => {
                          const updated = [...config.projects];
                          updated[idx] = { ...updated[idx], image: e.target.value };
                          setConfig({ ...config, projects: updated });
                        }}
                        placeholder="/images/wtrdrop.png"
                      />
                    </div>
                    <div className="admin-field">
                      <label className="admin-label">Description</label>
                      <textarea
                        className="admin-input admin-textarea"
                        value={p.description}
                        onChange={(e) => {
                          const updated = [...config.projects];
                          updated[idx] = { ...updated[idx], description: e.target.value };
                          setConfig({ ...config, projects: updated });
                        }}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                className="admin-add-btn"
                onClick={() => {
                  setConfig({
                    ...config,
                    projects: [
                      ...config.projects,
                      {
                        title: "New App",
                        category: "Mobile App",
                        tools: "Flutter, Firebase",
                        image: "/images/wtrdrop.png",
                        description: "App description here...",
                      },
                    ],
                  });
                }}
              >
                + Add Project
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
