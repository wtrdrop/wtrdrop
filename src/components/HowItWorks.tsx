

export default function HowItWorks() {
  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <span className="section-tag">Simple Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Get fresh water delivered in just 3 easy steps</p>
        </div>
        <div className="steps-grid">
          <div className="step-card" data-animate="fade-up" data-delay="100">
            <div className="step-number">01</div>
            <div className="step-icon-wrap">
              <svg viewBox="0 0 64 64" className="step-icon">
                <circle cx="32" cy="32" r="30" fill="var(--brand-light)" stroke="var(--brand)" stroke-width="2" />
                <path d="M22 20h20a2 2 0 012 2v20a2 2 0 01-2 2H22a2 2 0 01-2-2V22a2 2 0 012-2z" fill="none"
                  stroke="var(--brand)" stroke-width="2" />
                <path d="M26 28h12M26 32h8M26 36h10" stroke="var(--brand)" stroke-width="2" stroke-linecap="round" />
                <circle cx="38" cy="38" r="6" fill="var(--brand)" opacity=".2" />
                <path d="M36 38l2 2 4-4" stroke="var(--brand)" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <h3 className="step-title">Place Your Order</h3>
            <p className="step-desc">Choose water cans or bottles, select your supplier, pick a delivery time or start a
              subscription.</p>
            <div className="step-connector">
              <svg viewBox="0 0 100 20">
                <path d="M0 10 Q50 0 100 10" fill="none" stroke="var(--brand)" stroke-width="2" stroke-dasharray="6 4" />
              </svg>
            </div>
          </div>
          <div className="step-card" data-animate="fade-up" data-delay="200">
            <div className="step-number">02</div>
            <div className="step-icon-wrap">
              <svg viewBox="0 0 64 64" className="step-icon">
                <circle cx="32" cy="32" r="30" fill="var(--brand-light)" stroke="var(--brand)" stroke-width="2" />
                <circle cx="32" cy="30" r="10" fill="none" stroke="var(--brand)" stroke-width="2" />
                <circle cx="32" cy="30" r="3" fill="var(--brand)" />
                <path d="M32 40v6" stroke="var(--brand)" stroke-width="2" stroke-linecap="round" />
                <path d="M28 46h8" stroke="var(--brand)" stroke-width="2" stroke-linecap="round" />
                <path d="M26 24l6 6 6-6" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
            <h3 className="step-title">Track in Real-Time</h3>
            <p className="step-desc">Watch your delivery driver approach on a live GPS map. Know exactly when your water will
              arrive.</p>
            <div className="step-connector">
              <svg viewBox="0 0 100 20">
                <path d="M0 10 Q50 20 100 10" fill="none" stroke="var(--brand)" stroke-width="2" stroke-dasharray="6 4" />
              </svg>
            </div>
          </div>
          <div className="step-card" data-animate="fade-up" data-delay="300">
            <div className="step-number">03</div>
            <div className="step-icon-wrap">
              <svg viewBox="0 0 64 64" className="step-icon">
                <circle cx="32" cy="32" r="30" fill="var(--brand-light)" stroke="var(--brand)" stroke-width="2" />
                <path d="M24 30l6 6 10-12" fill="none" stroke="var(--brand)" stroke-width="3" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M20 40h24" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" />
                <path d="M22 44h20" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" opacity=".5" />
              </svg>
            </div>
            <h3 className="step-title">Receive & Enjoy</h3>
            <p className="step-desc">Get fresh water at your doorstep. Pay on delivery or online — it's that easy!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
