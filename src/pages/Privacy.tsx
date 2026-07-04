import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import { useLoading } from "../context/LoadingProvider";
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

                <h1 class="policy-title">Privacy Policy – WtrDrop</h1>

                <div class="policy-body">
                    <h2 id="general">1. GENERAL</h2>
                    <p>1.1. WtrDrop, having its office at J-3 J-Extn, Kishan Kunj, Laxmi Nagar, New Delhi, Delhi – 110092, India ("WtrDrop", "we", "us" or "our") is managing and operating the mobile application, website and tablet applications available at WtrDrop.in (collectively referred to as "WtrDrop", "Website", "App"), which inter alia facilitate the ordering, purchase and delivery of water cans and related services through a technology platform connecting customers, suppliers and delivery partners ("Products"). The term "User" or "Users" or "you" or "your" means any individual or entity which uses, accesses, browses or transacts on the Website and/or places orders for the Products.</p>
                    <p>1.2. WtrDrop is committed to protecting and respecting your privacy. This privacy policy ("Privacy Policy") is to be read together with the terms of use ("Terms") and all other policies notified by us from time to time. This Privacy Policy outlines WtrDrop's practices regarding the collection, use, disclosure, processing, transfer, storage, retention and safeguarding of the Information (defined hereinafter) collected through the App, including through authentication systems, cloud databases, order management systems, analytics tools and notification services.</p>
                    <p>1.3. WtrDrop acts as a technology platform that enables interaction between Users, suppliers and delivery partners. WtrDrop does not manufacture products but facilitates transactions and service delivery through its ecosystem.</p>
                    
                    <h2 id="applicability">2. APPLICABILITY OF POLICY</h2>
                    <p>2.1. By accessing, using, browsing, registering, or placing orders on WtrDrop and/or by submission of Information (and in case of a minor, submission of Information by a parent or guardian), you agree to be bound by the terms of this Privacy Policy and consent to the collection, storage, possession, handling, sharing, disclosure or transfer of your Information in accordance with this Privacy Policy and applicable laws of India.</p>
                    <p>2.2. The services provided through the App are intended for use within India. Your Information will be stored and processed in India using secure cloud infrastructure and may be subject to laws that differ from those in your jurisdiction.</p>
                    <p>2.3. This document is an electronic record and is governed by the provisions of the Information Technology Act, 2000 and applicable rules thereunder, including amendments. This electronic record does not require physical or digital signatures.</p>
                    <p>2.4. If you do not agree with any part of this Privacy Policy, you must not use or access WtrDrop.</p>
                    
                    <h2 id="type-of-information">3. TYPE OF INFORMATION COLLECTED</h2>
                    <p>3.1. This Privacy Policy describes the types of information collected from Users, including Personal Information and Sensitive Personal Data or Information, the purposes for which such data is collected, and the manner in which it is used, processed and shared. You may withdraw consent at any time; however, this may affect your ability to use certain services.</p>
                    <p>3.2. We collect relevant information from you including but not limited to:</p>
                    <ul>
                        <li>Name</li>
                        <li>Phone number (via OTP-based authentication)</li>
                        <li>Email address (if provided)</li>
                        <li>Saved addresses and location details</li>
                        <li>User role (customer, supplier, delivery partner)</li>
                        <li>Order history and transaction details</li>
                        <li>Preferences and interaction data</li>
                    </ul>
                    <p>Such information may reasonably identify you ("Personal Information").</p>
                    <p>3.3. We may also collect certain Sensitive Personal Data or Information including:<br>
                    (a) Authentication credentials processed securely through third-party authentication providers;<br>
                    (b) Payment-related information processed through secure third-party payment gateways; WtrDrop does not store card or bank details on its servers;<br>
                    (c) Transactional, billing and payout-related data required for order processing and business operations;<br>
                    (d) Any information processed under lawful contractual or regulatory obligations.<br>
                    Personal Information and Sensitive Personal Data are collectively referred to as "Information".</p>
                    <p>3.4. Information may be collected directly from you or automatically through backend systems such as cloud databases, analytics tools, crash reporting systems, and notification services to improve functionality and performance.</p>
                    <p>3.5. WtrDrop does not knowingly collect Information from users below 18 years of age. If such Information is identified, it will be deleted within a reasonable timeframe upon notice.</p>
                    
                    <h2 id="use-of-information">4. USE OF INFORMATION COLLECTED</h2>
                    <p>4.1. The following is the manner in which we collect, use, share and retain Information:</p>
                    
                    <h3>4.1.1 Collection</h3>
                    <p>We collect Information necessary to:</p>
                    <ul>
                        <li>Register and authenticate users</li>
                        <li>Enable order placement and fulfillment</li>
                        <li>Assign suppliers and delivery partners</li>
                        <li>Provide real-time tracking and communication</li>
                    </ul>

                    <h3>4.1.2 Usage</h3>
                    <p>We use your Information to:<br>
                    (i) create and manage user accounts;<br>
                    (ii) process and manage orders;<br>
                    (iii) connect customers, suppliers and delivery partners;<br>
                    (iv) enable real-time order tracking and updates;<br>
                    (v) send OTPs, notifications, invoices and alerts;<br>
                    (vi) improve services using analytics and usage data;<br>
                    (vii) calculate pricing, commissions and payouts;<br>
                    (viii) provide customer support and resolve disputes;<br>
                    (ix) send promotional communications (with opt-out);<br>
                    (x) detect, prevent and investigate fraud, abuse or illegal activities.</p>

                    <h3>4.1.3 Sharing</h3>
                    <p>Information may be shared in a limited and controlled manner:</p>
                    <ul>
                        <li>Within the WtrDrop ecosystem between customers, suppliers and delivery partners strictly for order fulfillment</li>
                        <li>With service providers including cloud infrastructure providers (such as Firebase for authentication, database, analytics and notifications), hosting services and communication tools</li>
                        <li>With payment gateways for secure transaction processing</li>
                        <li>With legal authorities where required by law or to enforce rights, prevent fraud or ensure safety</li>
                    </ul>

                    <h2 id="data-retention">5. DATA RETENTION</h2>
                    <p>5.1. We retain your Information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including operational, legal, accounting and fraud prevention requirements.</p>
                    <p>5.2. Certain transactional records may be retained even after account deletion to comply with legal obligations.</p>

                    <h2 id="third-party-services">6. THIRD PARTY SERVICES</h2>
                    <p>6.1. The App integrates with third-party services including authentication providers, cloud storage services, analytics tools and payment gateways.</p>
                    <p>6.2. These may include services such as Firebase (for authentication, database, analytics and notifications). These providers operate under their own privacy policies.</p>
                    <p>6.3. WtrDrop is not responsible for the independent practices of such third parties.</p>

                    <h2 id="non-personal-information">7. NON-PERSONAL INFORMATION</h2>
                    <p>We may collect non-personal information such as device information, application usage statistics, performance data and diagnostic logs. This data is used to improve the App and enhance user experience. If combined with Personal Information, it will be treated as Personal Information.</p>

                    <h2 id="location-services">8. LOCATION SERVICES</h2>
                    <p>8.1. The App may collect real-time or approximate location data to enable delivery tracking, supplier assignment and service optimization.</p>
                    <p>8.2. Location data is collected only when required and with user permission, and may be used in anonymized form for analytics.</p>

                    <h2 id="cookies">9. COOKIES</h2>
                    <p>WtrDrop may use cookies and similar technologies to enhance user experience, analyze trends and improve services. Users can manage cookie preferences through their device or browser settings.</p>

                    <h2 id="other-information">10. OTHER INFORMATION THE APP COLLECTS</h2>
                    <p>10.1. The App may collect additional information with your consent or as described during usage. Refusal to provide certain information may limit functionality.</p>
                    <p>10.2. The App may request permissions such as location, camera, storage and notifications strictly for enabling core features and improving user experience.</p>

                    <h2 id="opt-out">11. OPT-OUT</h2>
                    <p>11.1. Users may opt out of receiving non-essential promotional communications at any time.</p>
                    <p>11.2. Instructions to unsubscribe are provided in communication channels. Certain service-related communications cannot be disabled.</p>

                    <h2 id="access">12. ACCESS, CORRECTION AND DELETION</h2>
                    <p>12.1. Users are responsible for ensuring that their Information is accurate and up to date.</p>
                    <p>12.2. Users may request access, correction or deletion of their data through the App or official support channels. Requests may be limited where required by law or technical constraints.</p>

                    <h2 id="security">13. SECURITY</h2>
                    <p>13.1. We implement reasonable security measures including encryption, secure cloud infrastructure and access controls to protect your Information.</p>
                    <p>13.2. However, no system is completely secure and WtrDrop cannot guarantee absolute security.</p>

                    <h2 id="changes">14. CHANGES TO PRIVACY POLICY</h2>
                    <p>This Privacy Policy may be updated from time to time. Continued use of the App constitutes acceptance of the updated policy.</p>

                    <h2 id="queries">15. QUERIES AND COMPLAINTS</h2>
                    <p>For any queries, concerns or complaints regarding this Privacy Policy or data protection practices, you may contact us through the App or via official support channels at <a href="mailto:support@wtrdrop.in">support@wtrdrop.in</a>.</p>
                </div>
            </main>

            
            <aside class="policy-sidebar policy-sidebar-right">
                <div class="policy-toc">
                    <a href="#general" class="policy-toc-link">1. General</a>
                    <a href="#applicability" class="policy-toc-link">2. Applicability of Policy</a>
                    <a href="#type-of-information" class="policy-toc-link">3. Type of Information Collected</a>
                    <a href="#use-of-information" class="policy-toc-link">4. Use of Information Collected</a>
                    <a href="#data-retention" class="policy-toc-link">5. Data Retention</a>
                    <a href="#third-party-services" class="policy-toc-link">6. Third Party Services</a>
                    <a href="#non-personal-information" class="policy-toc-link">7. Non-Personal Information</a>
                    <a href="#location-services" class="policy-toc-link">8. Location Services</a>
                    <a href="#cookies" class="policy-toc-link">9. Cookies</a>
                    <a href="#other-information" class="policy-toc-link">10. Other Information Collected</a>
                    <a href="#opt-out" class="policy-toc-link">11. Opt-Out</a>
                    <a href="#access" class="policy-toc-link">12. Access, Correction and Deletion</a>
                    <a href="#security" class="policy-toc-link">13. Security</a>
                    <a href="#changes" class="policy-toc-link">14. Changes to Privacy Policy</a>
                    <a href="#queries" class="policy-toc-link">15. Queries and Complaints</a>
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
    <Helmet>
      <title>Privacy Policy - WtrDrop</title>

      <meta
        name="description"
        content="Read WtrDrop's Privacy Policy to understand how we collect, use, process and protect your personal information."
      />

      <meta
        name="keywords"
        content="WtrDrop Privacy Policy, WtrDrop Privacy, Data Protection, Water Delivery Privacy"
      />

      <link
        rel="canonical"
        href="https://wtrdrop.in/privacy"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="WtrDrop" />
      <meta property="og:title" content="Privacy Policy - WtrDrop" />
      <meta
        property="og:description"
        content="Read WtrDrop's Privacy Policy."
      />
      <meta
        property="og:url"
        content="https://wtrdrop.in/privacy"
      />
      <meta
        property="og:image"
        content="https://wtrdrop.in/clogo.png"
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content="Privacy Policy - WtrDrop"
      />
      <meta
        name="twitter:description"
        content="Read WtrDrop's Privacy Policy."
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
