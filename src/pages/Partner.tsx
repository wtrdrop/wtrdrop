import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Seo from "../components/Seo";
import { useLoading } from "../context/LoadingProvider";
import { 
  MdLocalShipping, 
  MdTrendingUp, 
  MdNavigation, 
  MdAppRegistration,
  MdArrowForward
} from "react-icons/md";
import "./Partner.css";

export default function Partner() {
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(100);
  }, [setLoading]);

  return (
    <>
      <Seo 
        title="Partner Hub | WtrDrop" 
        description="Partner with WtrDrop to scale your water delivery business. Onboard your water station, manage deliveries, and reach more local customers."
        path="/partner"
      />
      <Navbar />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="partner-page">
            {/* ---- Background Decorative Blobs ---- */}
            <div className="partner-bg-blob partner-blob-1"></div>
            <div className="partner-bg-blob partner-blob-2"></div>
            <div className="partner-bg-blob partner-blob-3"></div>

            {/* ---- Hero Section ---- */}
            <section className="partner-hero">
              <div className="partner-container partner-hero-container">
                <div className="partner-hero-content">
                  <span className="partner-hero-tag">Supplier & Distributor Hub</span>
                  <h1>Your Water. <br /><span>Delivered.</span></h1>
                  <p>
                    Connect your water filling station or distribution point with WtrDrop. 
                    Onboard in minutes, manage your delivery team, and deliver fresh drinking water 
                    to thousands of homes and offices nearby.
                  </p>
                  <div className="partner-cta-group">
                    <a href="#onboarding" className="partner-btn partner-btn-primary">
                      Become a Partner <MdArrowForward />
                    </a>
                    <a href="#why-wtrdrop" className="partner-btn partner-btn-outline">
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="partner-hero-image-wrapper">
                  <img 
                    src="/images/partner_hero.png" 
                    alt="WtrDrop Partner Rider delivering water" 
                    className="partner-hero-image"
                  />
                </div>
              </div>
            </section>

            {/* ---- Stats & Metrics Section ---- */}
            <section className="partner-stats-section">
              <div className="partner-container">
                <div className="partner-stats-grid">
                  <div className="partner-stat-card">
                    <div className="stat-glow"></div>
                    <h2>50+</h2>
                    <h4>Cities Reached</h4>
                    <p>Expanding across India's fastest-growing municipal hubs.</p>
                  </div>
                  <div className="partner-stat-card">
                    <div className="stat-glow"></div>
                    <h2>500+</h2>
                    <h4>Active Partners</h4>
                    <p>Water stations and local distributors scaling with WtrDrop.</p>
                  </div>
                  <div className="partner-stat-card">
                    <div className="stat-glow"></div>
                    <h2>1M+</h2>
                    <h4>Liters Delivered</h4>
                    <p>Hygienic drinking water supplied directly to doorsteps.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ---- Why Choose WtrDrop Section ---- */}
            <section className="partner-why-section" id="why-wtrdrop">
              <div className="partner-container">
                <div className="partner-section-header">
                  <span className="partner-section-tag">Why WtrDrop</span>
                  <h2 className="partner-section-title">Why WtrDrop is every partner's top choice?</h2>
                </div>
                
                <div className="partner-why-grid">
                  <div className="partner-why-card">
                    <div className="partner-card-icon">
                      <MdLocalShipping />
                    </div>
                    <h3>Reach your customers where they are</h3>
                    <p>
                      List your water cans and water quality certificates to deliver fresh drinking water 
                      directly through our dense, growing network of local delivery routes.
                    </p>
                  </div>

                  <div className="partner-why-card">
                    <div className="partner-card-icon">
                      <MdTrendingUp />
                    </div>
                    <h3>Exponential growth opportunity</h3>
                    <p>
                      Scale your monthly sales with subscription plans, recurring deliveries, 
                      and automated order dispatching.
                    </p>
                  </div>

                  <div className="partner-why-card">
                    <div className="partner-card-icon">
                      <MdNavigation />
                    </div>
                    <h3>Smart Route & Driver Logistics</h3>
                    <p>
                      Optimize routes for your drivers automatically. Track daily collections, 
                      GPS locations, and OTP delivery verifications in real-time.
                    </p>
                  </div>

                  <div className="partner-why-card">
                    <div className="partner-card-icon">
                      <MdAppRegistration />
                    </div>
                    <h3>Simple & Easy Onboarding</h3>
                    <p>
                      Register your business details, upload water source certificates, 
                      and go live in less than 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ---- Onboarding Steps Section ---- */}
            <section className="partner-steps-section" id="onboarding">
              <div className="partner-container">
                <div className="partner-section-header">
                  <span className="partner-section-tag">How it works</span>
                  <h2 className="partner-section-title">Start selling in 3 simple steps</h2>
                </div>

                <div className="partner-steps-grid">
                  <div className="partner-step-card">
                    <div className="partner-step-num">01</div>
                    <h3>Download Partner App</h3>
                    <p>Download the WtrDrop Partner app from the Google Play Store on any Android device.</p>
                  </div>

                  <div className="partner-step-card">
                    <div className="partner-step-num">02</div>
                    <h3>Register Business</h3>
                    <p>Upload your basic details, location, government ID, and water quality certificates for verification.</p>
                  </div>

                  <div className="partner-step-card">
                    <div className="partner-step-num">03</div>
                    <h3>Go Live & Earn</h3>
                    <p>Assign drivers to your fleet, set your delivery radius, and start receiving water delivery requests.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ---- Testimonials Section ---- */}
            <section className="partner-testimonials-section">
              <div className="partner-container">
                <div className="partner-section-header">
                  <span className="partner-section-tag">Success Stories</span>
                  <h2 className="partner-section-title">What our Partners say</h2>
                </div>
                <div className="partner-testimonials-grid">
                  <div className="partner-testimonial-card">
                    <div className="partner-avatar-group">
                      <div className="partner-avatar" style={{ background: "linear-gradient(135deg, #008BD2, #03DAC6)" }}>S</div>
                      <div className="partner-avatar-info">
                        <h4>Sanjay Sharma</h4>
                        <p>Owner, Aqua Pure Water · Delhi</p>
                      </div>
                    </div>
                    <p className="partner-quote">
                      "Onboarding our 5 delivery vehicles took under a day. 
                      Our daily order count increased by 65% in the first month itself 
                      due to WtrDrop's auto-routing."
                    </p>
                  </div>
                  
                  <div className="partner-testimonial-card">
                    <div className="partner-avatar-group">
                      <div className="partner-avatar" style={{ background: "linear-gradient(135deg, #03DAC6, #018786)" }}>R</div>
                      <div className="partner-avatar-info">
                        <h4>Rajesh Kumar</h4>
                        <p>Distributor, Delhi Water Co.</p>
                      </div>
                    </div>
                    <p className="partner-quote">
                      "The automated cash settlement and driver QR assignment has saved us 
                      10+ hours of manual bookkeeping work every single week. Highly recommend!"
                    </p>
                  </div>

                  <div className="partner-testimonial-card">
                    <div className="partner-avatar-group">
                      <div className="partner-avatar" style={{ background: "linear-gradient(135deg, #008BD2, #5B3CC4)" }}>A</div>
                      <div className="partner-avatar-info">
                        <h4>Amit Singh</h4>
                        <p>Partner, HimSip Stations</p>
                      </div>
                    </div>
                    <p className="partner-quote">
                      "Subscriptions are an absolute game changer. We now have a predictable 
                      monthly revenue and highly loyal repeat customers without extra marketing."
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ---- CTA Banner ---- */}
            <section className="partner-cta-banner">
              <div className="partner-cta-banner-container">
                <h2>Ready to grow with WtrDrop?</h2>
                <p>
                  Join hundreds of water suppliers who have expanded their reach and simplified 
                  their delivery operations. Download the WtrDrop Partner App today.
                </p>
                <div className="partner-download-badges">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.wtrdrop" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="partner-playstore-badge"
                  >
                    <img src="/3d-icons/playstore.png" alt="Google Play Icon" />
                    <div className="badge-text">
                      <span className="badge-subtitle">Get it on</span>
                      <span className="badge-title">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* ---- Footer Component ---- */}
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
