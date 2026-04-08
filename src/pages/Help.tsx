
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLoading } from "../context/LoadingProvider";
import "../wtrweb.css";

const htmlContent = `
    <section class="hero page-header"
        style="min-height: 40vh; padding-top: 120px; padding-bottom: 40px; text-align: center; background: var(--bg-secondary);">
        <div class="container relative" style="z-index: 2;">
            <span class="section-tag">24/7 Support</span>
            <h1 class="section-title">Help Center</h1>
            <p class="section-subtitle">How can we help you today? Find answers to common questions or contact our
                support team.</p>
        </div>
    </section>

    
    <section class="section" style="padding-top: 60px;">
        <div class="container">

            
            <div
                style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 80px;">
                <div class="support-card">
                    <div class="support-icon">👤</div>
                    <h3 class="support-title">Customer Support</h3>
                    <p class="support-desc">Issues with your order, delivery timeline, or subscription changes.</p>
                    <a href="contact.html?type=customer" class="btn btn-outline"
                        style="width: 100%; justify-content: center;">Get Help</a>
                </div>

                <div class="support-card">
                    <div class="support-icon">🏪</div>
                    <h3 class="support-title">Supplier Support</h3>
                    <p class="support-desc">Help with inventory, payouts, driver management, or onboarding.</p>
                    <a href="contact.html?type=supplier" class="btn btn-outline"
                        style="width: 100%; justify-content: center;">Get Help</a>
                </div>

                <div class="support-card">
                    <div class="support-icon">🚚</div>
                    <h3 class="support-title">Driver Support</h3>
                    <p class="support-desc">Assistance with the driver app, navigation, or daily cash collections.</p>
                    <a href="contact.html?type=driver" class="btn btn-outline"
                        style="width: 100%; justify-content: center;">Get Help</a>
                </div>
            </div>

            
            <div style="max-width: 800px; margin: 0 auto;">
                <h2 style="font-size: 2rem; font-weight: 800; text-align: center; margin-bottom: 16px;">Frequently Asked
                    Questions</h2>

                <div class="faq-container">
                    <div class="faq-item">
                        <h4 class="faq-question">How does Pay on Delivery work?</h4>
                        <p class="faq-answer">You can choose "Cash/UPI on Delivery" when placing an order. When the
                            driver arrives, they will show you a QR code on their app which you can scan to pay, or you
                            can hand them cash. They will verify the payment on their app to complete the order.</p>
                    </div>

                    <div class="faq-item">
                        <h4 class="faq-question">What if I have an empty 20L can to return?</h4>
                        <p class="faq-answer">Great! During checkout, specify how many empty cans you are returning. The
                            supplier will automatically deduct the deposit cost of the new cans matching the number of
                            empty cans you return.</p>
                    </div>

                    <div class="faq-item">
                        <h4 class="faq-question">How do subscriptions work?</h4>
                        <p class="faq-answer">You can set up a frequency (e.g., Daily, Every 3 Days, Weekly) for your
                            water delivery. We'll automatically create an order for you on schedule. You can pause,
                            skip, or cancel your subscription at any time directly from the customer app.</p>
                    </div>

                    <div class="faq-item">
                        <h4 class="faq-question">Can I become a supplier on WtrDrop?</h4>
                        <p class="faq-answer">Yes! We are always looking for reliable local partners. If you have a
                            clean water filling station and delivery capabilities, download the WtrDrop Partner app and
                            submit a registration request. Our team will verify your setup and approve your account.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>

    `;

export default function Help() {
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(100);
  }, [setLoading]);

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div 
            className="static-page-container" 
            dangerouslySetInnerHTML={{ __html: htmlContent }} 
          />
        </div>
      </div>
    </>
  );
}
