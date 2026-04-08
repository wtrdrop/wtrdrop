

export default function PhoneMockupHero() {
  return (
    <><div className="hero-visual" data-animate="fade-left">
      <div className="phone-mockup">
        <div className="phone-frame">
          <div className="phone-notch"></div>
          <div className="phone-screen">
            <div className="mock-app">
              <div className="mock-header">
                <div className="mock-greeting">Good morning! 👋</div>
                <div className="mock-location">📍 Hyderabad, IN</div>
              </div>
              <div className="mock-search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span>Search water suppliers...</span>
              </div>
              <div className="mock-card mock-delivery-card">
                <div className="mock-card-icon">🚚</div>
                <div className="mock-card-content">
                  <div className="mock-card-title">Next Delivery</div>
                  <div className="mock-card-subtitle">Today, 10:30 AM</div>
                </div>
                <div className="mock-card-badge">On the way</div>
              </div>
              <div className="mock-section-title">Quick Order</div>
              <div className="mock-products">
                <div className="mock-product">
                  <div className="mock-product-icon">💧</div>
                  <div className="mock-product-name">20L Can</div>
                  <div className="mock-product-price">₹40</div>
                </div>
                <div className="mock-product">
                  <div className="mock-product-icon">🧴</div>
                  <div className="mock-product-name">1L Bottle</div>
                  <div className="mock-product-price">₹20</div>
                </div>
                <div className="mock-product">
                  <div className="mock-product-icon">📦</div>
                  <div className="mock-product-name">Pack of 12</div>
                  <div className="mock-product-price">₹200</div>
                </div>
              </div>
              <div className="mock-map">
                <div className="mock-map-pin">📍</div>
                <div className="mock-map-driver">🚛</div>
                <div className="mock-map-route"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="phone-glow"></div>
      </div>
      <div className="floating-card fc-1" data-animate="float">
        <div className="fc-icon">✅</div>
        <div className="fc-text">
          <strong>Order Delivered!</strong>
          <span>20L Water Can — 2 mins ago</span>
        </div>
      </div>
      <div className="floating-card fc-2" data-animate="float">
        <div className="fc-icon">⭐</div>
        <div className="fc-text">
          <strong>4.9 Rating</strong>
          <span>From 8,000+ reviews</span>
        </div>
      </div>
    </div></>
  );
}
