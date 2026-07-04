import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import { useLoading } from "../context/LoadingProvider";
import "../wtrweb.css";

const htmlContent = `
<section class="hero page-header"
    style="min-height:40vh;padding-top:120px;padding-bottom:40px;text-align:center;background:var(--bg-secondary);">
    <div class="container relative" style="z-index:2;">
        <span class="section-tag">24/7 Support</span>
        <h1 class="section-title">Help Center</h1>
        <p class="section-subtitle">
            How can we help you today? Find answers to common questions or contact our support team.
        </p>
    </div>
</section>

<section class="section" style="padding-top:60px;">
    <div class="container">

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:30px;margin-bottom:80px;">

            <div class="support-card">
                <div class="support-icon">👤</div>
                <h3 class="support-title">Customer Support</h3>
                <p class="support-desc">
                    Issues with your order, delivery timeline or subscription changes.
                </p>
            </div>

            <div class="support-card">
                <div class="support-icon">🏪</div>
                <h3 class="support-title">Supplier Support</h3>
                <p class="support-desc">
                    Help with inventory, payouts, onboarding or driver management.
                </p>
            </div>

            <div class="support-card">
                <div class="support-icon">🚚</div>
                <h3 class="support-title">Driver Support</h3>
                <p class="support-desc">
                    Assistance with deliveries, navigation or cash collections.
                </p>
            </div>

        </div>

        <div style="max-width:800px;margin:0 auto;">

            <h2 style="font-size:2rem;font-weight:800;text-align:center;margin-bottom:16px;">
                Frequently Asked Questions
            </h2>

            <div class="faq-container">

                <div class="faq-item">
                    <h4 class="faq-question">How does Pay on Delivery work?</h4>
                    <p class="faq-answer">
                        Choose Cash or UPI on Delivery while placing your order. The delivery partner will verify the payment before completing the order.
                    </p>
                </div>

                <div class="faq-item">
                    <h4 class="faq-question">What if I have an empty 20L can to return?</h4>
                    <p class="faq-answer">
                        Mention the number of empty cans during checkout. The supplier will adjust your deposit automatically.
                    </p>
                </div>

                <div class="faq-item">
                    <h4 class="faq-question">How do subscriptions work?</h4>
                    <p class="faq-answer">
                        Schedule automatic water deliveries daily, weekly or on custom dates. You can pause or cancel anytime.
                    </p>
                </div>

                <div class="faq-item">
                    <h4 class="faq-question">Can I become a supplier on WtrDrop?</h4>
                    <p class="faq-answer">
                        Yes. Download the WtrDrop Partner app, submit your documents and our team will verify your account.
                    </p>
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
      <Helmet>
        <title>Help Center - WtrDrop</title>

        <meta
          name="description"
          content="Get help with WtrDrop. Find answers to common questions, customer support, supplier support and driver support."
        />

        <meta
          name="keywords"
          content="WtrDrop Help, WtrDrop Support, Water Delivery Help, Customer Support, Supplier Support"
        />

        <link
          rel="canonical"
          href="https://wtrdrop.in/help"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="WtrDrop" />
        <meta property="og:title" content="Help Center - WtrDrop" />
        <meta
          property="og:description"
          content="Find answers and contact WtrDrop support."
        />
        <meta property="og:url" content="https://wtrdrop.in/help" />
        <meta
          property="og:image"
          content="https://wtrdrop.in/clogo.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Help Center - WtrDrop" />
        <meta
          name="twitter:description"
          content="Find answers and contact WtrDrop support."
        />
        <meta
          name="twitter:image"
          content="https://wtrdrop.in/clogo.png"
        />
      </Helmet>

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
