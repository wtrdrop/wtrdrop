

export default function FeaturesGrid() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <span className="section-tag">Why WtrDrop?</span>
          <h2 className="section-title">Packed with Powerful Features</h2>
          <p className="section-subtitle">Everything you need for seamless water delivery</p>
        </div>
        <div className="features-grid">
          <div className="feature-card" data-animate="fade-up" data-delay="50">
            <div className="feature-icon-wrap">
              <img src="/3d-icons/icon_water_tap_1775638023220.png" alt="Instant Delivery" style={{ width: "80%", height: "80%", objectFit: "contain", borderRadius: "10px" }} />
            </div>
            <h3 className="feature-title">Instant Delivery</h3>
            <p className="feature-desc">Order water cans and bottles delivered to your doorstep within minutes from nearby
              suppliers.</p>
          </div>
          <div className="feature-card" data-animate="fade-up" data-delay="100">
            <div className="feature-icon-wrap">
              <img src="/3d-icons/icon_calendar_1775638044044.png" alt="Smart Subscriptions" style={{ width: "80%", height: "80%", objectFit: "contain", borderRadius: "10px" }} />
            </div>
            <h3 className="feature-title">Smart Subscriptions</h3>
            <p className="feature-desc">Set up daily or weekly auto-deliveries. Never worry about running out of water again.
            </p>
          </div>
          <div className="feature-card" data-animate="fade-up" data-delay="150">
            <div className="feature-icon-wrap">
              <img src="/3d-icons/icon_map_pin_1775638061894.png" alt="Live GPS Tracking" style={{ width: "80%", height: "80%", objectFit: "contain", borderRadius: "10px" }} />
            </div>
            <h3 className="feature-title">Live GPS Tracking</h3>
            <p className="feature-desc">Track your delivery driver in real-time on an interactive map with ETA updates.</p>
          </div>
          <div className="feature-card" data-animate="fade-up" data-delay="200">
            <div className="feature-icon-wrap">
              <img src="/3d-icons/icon_credit_card_1775638090398.png" alt="Flexible Payments" style={{ width: "80%", height: "80%", objectFit: "contain", borderRadius: "10px" }} />
            </div>
            <h3 className="feature-title">Flexible Payments</h3>
            <p className="feature-desc">Pay on delivery with cash or pay online. Multiple payment options for your
              convenience.</p>
          </div>
          <div className="feature-card" data-animate="fade-up" data-delay="250">
            <div className="feature-icon-wrap">
              <img src="/3d-icons/icon_padlock_1775638108485.png" alt="Verified Partners" style={{ width: "80%", height: "80%", objectFit: "contain", borderRadius: "10px" }} />
            </div>
            <h3 className="feature-title">Verified Partners</h3>
            <p className="feature-desc">All suppliers are KYC-verified with document uploads ensuring quality and trust.</p>
          </div>
          <div className="feature-card" data-animate="fade-up" data-delay="300">
            <div className="feature-icon-wrap">
              <img src="/3d-icons/icon_bar_chart_1775638122053.png" alt="Smart Assignment" style={{ width: "80%", height: "80%", objectFit: "contain", borderRadius: "10px" }} />
            </div>
            <h3 className="feature-title">Smart Assignment</h3>
            <p className="feature-desc">Orders are auto-assigned to the nearest available driver with sufficient capacity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
