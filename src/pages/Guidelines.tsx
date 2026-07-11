import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLoading } from "../context/LoadingProvider";
import Seo from "../components/Seo";
import "../wtrweb.css";

const htmlContent = `<div class="policy-page-wrapper">
        
        <div class="policy-header">
            <div class="container" style="display: flex; gap: 24px;">
                <a href="/guidelines" style="color: var(--brand); font-weight: 600;">General</a>
                <a href="#" style="color: var(--text-secondary);">Water Quality</a>
                <a href="#" style="color: var(--text-secondary);">Delivery Partners</a>
            </div>
        </div>

        
        <div class="policy-layout">

            
            <aside class="policy-sidebar policy-sidebar-left">
                <div class="policy-nav-group">
                    <div class="policy-nav-title">Legal & Policies</div>
                    <ul class="policy-nav-list">
                        <li><a href="/guidelines" class="policy-nav-link active">Guidelines and Policies</a></li>
                        <li><a href="/privacy" class="policy-nav-link">Privacy Policy</a></li>
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
                    <span>Guidelines and Policies</span>
                </div>

                <h1 class="policy-title">Guidelines and Policies</h1>

                <div class="policy-body">
                    <p>If there's one thing we truly prioritize at WtrDrop, it's ensuring that every household receives
                        clean, safe water seamlessly. We encourage customers to rate their delivery experiences and
                        suppliers to maintain the highest standards of hygiene and promptness.</p>
                    <p>While we welcome feedback on drivers and water quality, there are a few things we expect from
                        every user on WtrDrop. Your reviews, ratings, and interactions are subject to the Content
                        Guidelines of our Community Trust Charter.</p>
                    <p>If your activity on WtrDrop doesn't match up to these guidelines, we reserve the right to take
                        action against such activities as we deem necessary. This could include revoking app access,
                        deleting reviews, or restricting accounts without notice.</p>

                    <h2 id="community-charter">Community Trust Charter</h2>

                    <h3 id="keep-it-clean">Keep out the clutter</h3>
                    <p>To make sure we collectively work towards building the most reliable water delivery ecosystem,
                        it's important that reviews make sense. If a review is filled with irrelevant statements or
                        spam, we might have to remove the review altogether.</p>

                    <h3 id="keep-it-relevant">Keep it relevant</h3>
                    <p>Focus your reviews on the delivery experience, timeliness, water can quality, and driver
                        behavior. Political, religious, or completely unrelated commentary has no place on WtrDrop
                        platform ratings.</p>

                    <h3 id="dont-solicit">Don't solicit</h3>
                    <p>Suppliers are not allowed to bribe customers for good reviews or offer discounts in exchange for
                        5-star ratings. Customers should provide genuine, unbiased feedback.</p>

                    <h3 id="be-respectful">Don't be a bully</h3>
                    <p>We have a zero-tolerance policy against hate speech, harassment, or abusive language targeting
                        our drivers, suppliers, or customer support staff. Any such behavior will result in an immediate
                        and permanent account ban.</p>

                    <h2 id="supplier-guidelines">Guidelines for Suppliers</h2>
                    <p>Water suppliers and filling stations bound by WtrDrop must adhere strictly to local municipal
                        health and sanitation guidelines. Cans must be properly sanitized, sealed, and handled safely
                        during transit.</p>

                    <h2 id="driver-ethics">Driver Code of Ethics</h2>
                    <p>Drivers act as the face of WtrDrop and our supplier partners. Punctuality, polite communication
                        during drop-offs, and respecting the customer's property are foundational expectations.</p>
                </div>
            </main>

            
            <aside class="policy-sidebar policy-sidebar-right">
                <div class="policy-toc">
                    <a href="#community-charter" class="policy-toc-link">Community Trust Charter</a>
                    <a href="#keep-it-clean" class="policy-toc-link" style="padding-left: 10px;">Keep out the
                        clutter</a>
                    <a href="#keep-it-relevant" class="policy-toc-link" style="padding-left: 10px;">Keep it relevant</a>
                    <a href="#dont-solicit" class="policy-toc-link" style="padding-left: 10px;">Don't solicit</a>
                    <a href="#be-respectful" class="policy-toc-link" style="padding-left: 10px;">Don't be a bully</a>
                    <a href="#supplier-guidelines" class="policy-toc-link">Guidelines for Suppliers</a>
                    <a href="#driver-ethics" class="policy-toc-link">Driver Code of Ethics</a>
                </div>
            </aside>

        </div>
    </div>

    `;

export default function Guidelines() {
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(100);
  }, [setLoading]);

  return (
    <>
      <Seo title="Guidelines & Policies | WtrDrop" description="Review WtrDrop platform guidelines, water quality expectations, and delivery policies." path="/guidelines" />
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
