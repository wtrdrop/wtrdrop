
import { getConfig } from "../data/siteConfig";

export default function Testimonials() {
  const config = getConfig();

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <span className="section-tag">What People Say</span>
          <h2 className="section-title">Loved by Thousands</h2>
          <p className="section-subtitle">Real stories from our customers and partners</p>
        </div>
        <div className="testimonials-grid">
          {config.testimonials.map((t, idx) => (
            <div className="testimonial-card" data-animate="fade-up" data-delay={50 + idx * 100} key={idx}>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: t.avatarGradient }}>{t.avatarLetter}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
