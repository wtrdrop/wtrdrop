import { useEffect } from "react";
import { MdArrowForward, MdHelpOutline, MdLocalShipping, MdStorefront } from "react-icons/md";
import Navbar from "../components/Navbar";
import { useLoading } from "../context/LoadingProvider";
import Seo from "../components/Seo";
import "./Help.css";

const supportAreas = [
  { icon: <MdHelpOutline />, title: "Customer support", text: "Help with orders, deliveries, subscriptions and payments.", image: "/images/help-customer-support.png" },
  { icon: <MdStorefront />, title: "Supplier support", text: "Guidance for inventory, payouts, onboarding and business setup.", image: "/images/help-supplier-support.png" },
  { icon: <MdLocalShipping />, title: "Driver support", text: "Get assistance with routes, deliveries and daily collections.", image: "/images/help-driver-support.png" },
];

const faqs = [
  ["How does Pay on Delivery work?", "Choose Cash or UPI on Delivery at checkout. When your driver arrives, scan their QR code to pay or pay by cash; the driver confirms payment in the app to complete the order."],
  ["What if I have an empty 20L can to return?", "During checkout, tell us how many empty cans you are returning. Your supplier deducts the eligible can deposit from your new order."],
  ["How do subscriptions work?", "Set a delivery schedule such as daily, every three days or weekly. You can pause, skip or cancel your subscription directly from the customer app."],
  ["Can I become a supplier on WtrDrop?", "Yes. If you operate a reliable water filling station with delivery capability, download the Partner app and submit a registration request for verification."],
];

export default function Help() {
  const { setLoading } = useLoading();
  useEffect(() => { setLoading(100); }, [setLoading]);

  return (
    <>
      <Seo title="Help Center | WtrDrop" description="Find answers about WtrDrop orders, deliveries, subscriptions, suppliers and driver support." path="/help" />
      <Navbar />
      <div id="smooth-wrapper"><div id="smooth-content">
        <main className="help-page">
          <section className="help-hero">
            <div className="help-container help-hero-layout">
              <div className="help-hero-copy">
                <p className="help-eyebrow">WtrDrop help center</p>
                <h1>Answers that keep<br /><span>you moving.</span></h1>
                <p>Need a hand with an order, delivery or account? Find quick answers or connect with the right support team.</p>
                <a href="#support-options" className="help-primary-action">Explore support <MdArrowForward /></a>
                <div className="help-availability"><span /> Support for customers, suppliers and drivers</div>
              </div>
              <div className="help-hero-art" aria-hidden="true"><img src="/images/help-center-hero.png" alt="" /></div>
            </div>
          </section>

          <section className="help-options" id="support-options">
            <div className="help-container">
              <div className="help-heading"><p className="help-eyebrow">Choose your support</p><h2>How can we help today?</h2><p>Select the area that best matches what you need.</p></div>
              <div className="help-options-grid">
                {supportAreas.map((area) => <article className="help-option-card" key={area.title}>
                  <div className="help-card-image"><img src={area.image} alt="" /></div><div className="help-option-icon">{area.icon}</div><h3>{area.title}</h3><p>{area.text}</p><a href="mailto:Query@wtrdrop.in">Get help <MdArrowForward /></a>
                </article>)}
              </div>
            </div>
          </section>

          <section className="help-guidance">
            <div className="help-container help-guidance-layout">
              <div><p className="help-eyebrow">A simpler way to resolve things</p><h2>Get back to what matters.</h2><p>Most questions can be resolved in just a few moments. We make it easy to find an answer, manage an order or reach our team.</p></div>
              <ol className="help-steps"><li><span>01</span><div><h3>Find your topic</h3><p>Choose the support area that fits your question.</p></div></li><li><span>02</span><div><h3>Get a quick answer</h3><p>Read our frequently asked questions and guidance.</p></div></li><li><span>03</span><div><h3>Contact us anytime</h3><p>Still need help? Send our support team a message.</p></div></li></ol>
            </div>
          </section>

          <section className="help-faq"><div className="help-container"><div className="help-heading"><p className="help-eyebrow">Popular questions</p><h2>Frequently asked questions</h2></div><div className="help-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

          <section className="help-contact">
            <div className="help-container">
              <div className="help-contact-card-premium">
                <div className="help-contact-left">
                  <span className="help-contact-badge">Still Need Help?</span>
                  <h2>Our support team <br />is here for <span>you.</span></h2>
                  <p className="help-contact-desc">
                    Send us a message and we'll help you find the right next step.
                  </p>
                  
                  <div className="help-contact-features">
                    <div className="help-feature-item">
                      <span className="help-feature-icon-wrapper">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                      </span>
                      <div className="help-feature-text">
                        <strong>Quick</strong>
                        <span>Response</span>
                      </div>
                    </div>
                    
                    <div className="help-feature-item">
                      <span className="help-feature-icon-wrapper">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 11 2 2 4-4"/></svg>
                      </span>
                      <div className="help-feature-text">
                        <strong>Reliable</strong>
                        <span>Support</span>
                      </div>
                    </div>

                    <div className="help-feature-item">
                      <span className="help-feature-icon-wrapper">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      </span>
                      <div className="help-feature-text">
                        <strong>Real People,</strong>
                        <span>Real Help</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="help-contact-right">
                  <div className="help-headset-image-wrapper">
                    <img src="/images/help-3d-support.png" alt="WtrDrop Support Headset" className="help-headset-image" />
                  </div>
                  
                  <div className="help-action-wrapper">
                    <a href="mailto:Query@wtrdrop.in" className="help-contact-btn-premium">
                      <span className="help-btn-icon-circle">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                      </span>
                      <span className="help-btn-text">Contact support</span>
                      <span className="help-btn-arrow">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      </span>
                    </a>
                    
                    <div className="help-secure-note">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 11 2 2 4-4"/></svg>
                      <span>Your message is safe with us</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div></div>
    </>
  );
}
