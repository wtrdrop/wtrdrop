
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLoading } from "../context/LoadingProvider";
import Seo from "../components/Seo";
import "../wtrweb.css";

const htmlContent = `<div class="policy-page-wrapper">
        
        <div class="policy-header">
            <div class="container" style="display: flex; gap: 24px;">
                <a href="/privacy" style="color: var(--brand); font-weight: 600;">General</a>
                <a href="#" style="color: var(--text-secondary);">Supplier Data</a>
                <a href="#" style="color: var(--text-secondary);">Cookie Policy</a>
            </div>
        </div>

        
        <div class="policy-layout">

            
            <aside class="policy-sidebar policy-sidebar-left">
                <div class="policy-nav-group">
                    <div class="policy-nav-title">Legal & Policies</div>
                    <ul class="policy-nav-list">
                        <li><a href="/partner" class="policy-nav-link">Partner Hub</a></li>
                        <li><a href="/guidelines" class="policy-nav-link">Guidelines and Policies</a></li>
                        <li><a href="/privacy" class="policy-nav-link active">Privacy Policy</a></li>
                        <li><a href="/terms" class="policy-nav-link">Terms of Service</a></li>
                        <li><a href="#" class="policy-nav-link">Cookie Policy</a></li>
                        <li><a href="#" class="policy-nav-link">Licenses & Registration</a></li>
                    </ul>
                </div>
                <div class="policy-nav-group">
                    <div class="policy-nav-title">Platform</div>
                    <ul class="policy-nav-list">
                        <li><a href="#" class="policy-nav-link">Delivery Areas</a></li>
                        <li><a href="#" class="policy-nav-link">Subscription Terms</a></li>
                        <li><a href="#" class="policy-nav-link">Supplier Verification</a></li>
                    </ul>
                </div>
            </aside>

            
            <main class="policy-content-area">
                <div class="policy-breadcrumbs">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                        <path d="M9 22V12h6v10"></path>
                    </svg>
                    <span>></span>
                    <span>Privacy Policy</span>
                </div>

                <h1 class="policy-title">Privacy Policy</h1>
                <p class="policy-updated">Last Updated: October 2026</p>

                <div class="policy-body">
                    <p>At WtrDrop, we take your privacy seriously. This Privacy Policy explains how we collect, use, and
                        protect your personal information when you use our website and mobile applications as a
                        Customer, Supplier, or Driver.</p>

                    <h2 id="information-collection">1. Information We Collect</h2>
                    <p>We collect information to provide better services to all our users. This includes:</p>
                    <ul>
                        <li><strong>Personal Information:</strong> Name, email address, phone number, and delivery
                            address.</li>
                        <li><strong>Location Data:</strong> For real-time delivery tracking and matching you with nearby
                            suppliers.</li>
                        <li><strong>Payment Information:</strong> Securely tokenized payment details for online
                            transactions.</li>
                        <li><strong>Usage Data:</strong> How you interact with our platform to help us improve the
                            experience.</li>
                    </ul>

                    <h2 id="how-we-use">2. How We Use Information</h2>
                    <p>We use the information we collect from all of our services for the following purposes:</p>
                    <ul>
                        <li>To process and fulfill your water delivery orders.</li>
                        <li>To communicate with you regarding order statuses and support inquiries.</li>
                        <li>To improve the safety and reliability of our platform.</li>
                        <li>For driver navigation to exact drop-off points.</li>
                    </ul>

                    <h2 id="information-sharing">3. Information Sharing</h2>
                    <p>We do not sell your personal information to third parties. We only share data necessary for
                        fulfilling our service:</p>
                    <ul>
                        <li><strong>With Suppliers & Drivers:</strong> To successfully deliver your order, we share your
                            address, phone number, and order details.</li>
                        <li><strong>With Service Providers:</strong> Such as payment processors and cloud hosting
                            platforms bound by confidentiality agreements.</li>
                    </ul>

                    <h2 id="data-security">4. Data Security</h2>
                    <p>We implement industry-standard physical, technical, and administrative security measures to
                        protect your personal information against unauthorized access, alteration, disclosure, or
                        destruction.</p>

                    <h2 id="your-rights">5. Your Rights</h2>
                    <p>Depending on your location, you may have the right to request access to, correction of, or
                        deletion of your personal data. You can manage your data directly from the WtrDrop app settings
                        or by contacting our support team.</p>

                    <h2 id="contact-us">6. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at <a
                            href="mailto:privacy@wtrdrop.com">privacy@wtrdrop.com</a>.</p>
                </div>
            </main>

            
            <aside class="policy-sidebar policy-sidebar-right">
                <div class="policy-toc">
                    <a href="#information-collection" class="policy-toc-link">1. Information We Collect</a>
                    <a href="#how-we-use" class="policy-toc-link">2. How We Use Information</a>
                    <a href="#information-sharing" class="policy-toc-link">3. Information Sharing</a>
                    <a href="#data-security" class="policy-toc-link">4. Data Security</a>
                    <a href="#your-rights" class="policy-toc-link">5. Your Rights</a>
                    <a href="#contact-us" class="policy-toc-link">6. Contact Us</a>
                </div>
            </aside>

        </div>
    </div>

    `;

export default function Privacy() {
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(100);
  }, [setLoading]);

  return (
    <>
      <Seo title="Privacy Policy | WtrDrop" description="Learn how WtrDrop collects, uses, and safeguards your personal information." path="/privacy" />
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
