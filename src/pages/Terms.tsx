
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLoading } from "../context/LoadingProvider";
import Seo from "../components/Seo";
import "../wtrweb.css";

const htmlContent = `<div class="policy-page-wrapper">
        
        <div class="policy-header">
            <div class="container" style="display: flex; gap: 24px;">
                <a href="/terms" style="color: var(--brand); font-weight: 600;">General Terms</a>
                <a href="#" style="color: var(--text-secondary);">Supplier Agreements</a>
                <a href="#" style="color: var(--text-secondary);">Subscription Policies</a>
            </div>
        </div>

        
        <div class="policy-layout">

            
            <aside class="policy-sidebar policy-sidebar-left">
                <div class="policy-nav-group">
                    <div class="policy-nav-title">Legal & Policies</div>
                    <ul class="policy-nav-list">
                        <li><a href="/partner" class="policy-nav-link">Partner Hub</a></li>
                        <li><a href="/guidelines" class="policy-nav-link">Guidelines and Policies</a></li>
                        <li><a href="/privacy" class="policy-nav-link">Privacy Policy</a></li>
                        <li><a href="/terms" class="policy-nav-link active">Terms of Service</a></li>
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
                    <span>Terms of Service</span>
                </div>

                <h1 class="policy-title">Terms of Service</h1>
                <p class="policy-updated">Last Updated: October 2026</p>

                <div class="policy-body">
                    <p>Welcome to WtrDrop. By accessing or using our website, mobile application, and related services,
                        you agree to be bound by these Terms of Service. Please read them carefully.</p>

                    <h2 id="acceptance">1. Acceptance of Terms</h2>
                    <p>By creating an account, ordering water, or registering as a supplier/driver, you explicitly agree
                        to these terms. If you do not agree to all the terms and conditions, you may not access the
                        platform.</p>

                    <h2 id="description">2. Description of Service</h2>
                    <p>WtrDrop provides a technology platform that connects customers seeking drinking water delivery
                        with independent third-party water suppliers and delivery drivers. WtrDrop itself does not
                        purify, supply, or deliver water directly; we facilitate the marketplace transactions.</p>

                    <h2 id="accounts">3. User Accounts</h2>
                    <p>You must provide accurate, current, and complete information during the registration process. You
                        are responsible for safeguarding your account password and OTPs. WtrDrop is not liable for any
                        loss arising from your failure to protect your account credentials.</p>

                    <h2 id="ordering">4. Ordering and Delivery</h2>
                    <p>Delivery times are estimates and may vary based on traffic, supplier availability, and weather
                        conditions. Payment is due upon delivery via cash or UPI unless online payment was selected
                        during checkout.</p>

                    <h2 id="returns">5. Empty Can Returns</h2>
                    <p>Customers participating in the 20L can exchange program must return cans in a clean, undamaged
                        condition. Suppliers reserve the right to refuse return deposits for damaged or heavily soiled
                        cans.</p>

                    <h2 id="termination">6. Termination</h2>
                    <p>We may terminate or suspend your access to our Service immediately, without prior notice or
                        liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                </div>
            </main>

            
            <aside class="policy-sidebar policy-sidebar-right">
                <div class="policy-toc">
                    <a href="#acceptance" class="policy-toc-link">1. Acceptance of Terms</a>
                    <a href="#description" class="policy-toc-link">2. Description of Service</a>
                    <a href="#accounts" class="policy-toc-link">3. User Accounts</a>
                    <a href="#ordering" class="policy-toc-link">4. Ordering and Delivery</a>
                    <a href="#returns" class="policy-toc-link">5. Empty Can Returns</a>
                    <a href="#termination" class="policy-toc-link">6. Termination</a>
                </div>
            </aside>

        </div>
    </div>

    `;

export default function Terms() {
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(100);
  }, [setLoading]);

  return (
    <>
      <Seo title="Terms of Service | WtrDrop" description="Read the WtrDrop terms of service for customers, suppliers, and delivery partners." path="/terms" />
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
