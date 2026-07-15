import { useEffect } from "react";
import { MdArrowForward, MdCheckCircle, MdLocalShipping, MdMap, MdTrendingUp } from "react-icons/md";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Seo from "../components/Seo";
import SocialIcons from "../components/SocialIcons";
import { useLoading } from "../context/LoadingProvider";
import "./Partner.css";

const benefits = [
  {
    icon: <MdLocalShipping />,
    title: "Reach customers where they are",
    text: "Put your water cans in front of nearby homes, offices and businesses through a dependable local delivery network.",
    accent: "route",
  },
  {
    icon: <MdTrendingUp />,
    title: "Grow your business, every day",
    text: "Increase repeat orders with subscriptions, scheduled deliveries and a digital storefront that is always open.",
    accent: "growth",
  },
  {
    icon: <MdMap />,
    title: "Expand your local reach",
    text: "Set the areas you serve, add your delivery team and make fresh water more accessible across your city.",
    accent: "map",
  },
  {
    icon: <MdCheckCircle />,
    title: "Simple to get started",
    text: "Share your business details and certificates, get verified, and begin receiving orders in a few easy steps.",
    accent: "easy",
  },
];

export default function Partner() {
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(100);
  }, [setLoading]);

  return (
    <>
      <Seo
        title="Partner with WtrDrop | Grow Your Water Business"
        description="Join WtrDrop as a water supplier or distributor. Reach more nearby customers and simplify water delivery operations."
        path="/partner"
      />
      <Navbar />
      <SocialIcons />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="partner-page">
            <section className="partner-hero">
              <div className="partner-container partner-hero-grid">
                <div className="partner-hero-copy">
                  <p className="partner-eyebrow">WtrDrop partner hub</p>
                  <h1>Your water.<br /><span>Delivered further.</span></h1>
                  <p className="partner-lede">
                    Bring fresh, reliable water delivery to more customers. Join WtrDrop to manage your business, grow recurring orders and keep every route moving.
                  </p>
                  <div className="partner-actions">
                    <a className="partner-primary-action" href="#onboarding">Become a partner <MdArrowForward /></a>
                    <a className="partner-text-action" href="#why-wtrdrop">Explore benefits</a>
                  </div>
                  <div className="partner-trust-row">
                    <span><MdCheckCircle /> Quick onboarding</span>
                    <span><MdCheckCircle /> Built for local suppliers</span>
                  </div>
                </div>
                <div className="partner-hero-art" aria-hidden="true">
                  <img src="/images/partner-delivery-hero.png" alt="" />
                </div>
              </div>
            </section>

            <section className="partner-benefits" id="why-wtrdrop">
              <div className="partner-container">
                <div className="partner-benefits-heading">
                  <p className="partner-eyebrow">Why partner with us</p>
                  <h2>Everything you need to grow<br />your water business.</h2>
                  <p>One platform for local discovery, smooth delivery operations and loyal customers.</p>
                </div>
                <div className="partner-benefits-grid">
                  {benefits.map((benefit) => (
                    <article className={`partner-benefit-card partner-benefit-${benefit.accent}`} key={benefit.title}>
                      <div className="partner-benefit-icon">{benefit.icon}</div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.text}</p>
                      <div className="partner-card-art" aria-hidden="true"><span /><span /><span /></div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="partner-people-section">
              <div className="partner-container partner-people-layout">
                <div className="partner-people-image partner-team-image">
                  <img src="/images/partner-team.png" alt="Water supplier and delivery coordinator managing their business" />
                </div>
                <div className="partner-people-copy">
                  <p className="partner-eyebrow">Built for your whole team</p>
                  <h2>One connected system for suppliers and drivers.</h2>
                  <p>Keep daily operations simple—from managing product availability to assigning deliveries and tracking every order.</p>
                  <ul className="partner-checklist">
                    <li><MdCheckCircle /> Manage inventory and service areas</li>
                    <li><MdCheckCircle /> Assign orders to delivery partners</li>
                    <li><MdCheckCircle /> Build recurring customer relationships</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="partner-delivery-section">
              <div className="partner-container partner-delivery-layout">
                <div className="partner-delivery-copy">
                  <p className="partner-eyebrow">Every delivery counts</p>
                  <h2>Deliver a better experience, right to the doorstep.</h2>
                  <p>Give customers a convenient way to order fresh water while you run reliable, well-organized deliveries behind the scenes.</p>
                  <a className="partner-text-action" href="#onboarding">See how to get started <MdArrowForward /></a>
                </div>
                <div className="partner-people-image partner-delivery-image">
                  <img src="/images/partner-delivery-story.png" alt="Water delivery partner handing a water can to a customer" />
                </div>
              </div>
            </section>

            <section className="partner-start" id="onboarding">
              <div className="partner-container partner-start-layout">
                <div>
                  <p className="partner-eyebrow">Start in three steps</p>
                  <h2>From water station to your customers’ doorsteps.</h2>
                </div>
                <ol className="partner-steps">
                  <li><span>01</span><div><h3>Register your business</h3><p>Tell us about your water station, service areas and delivery team.</p></div></li>
                  <li><span>02</span><div><h3>Complete verification</h3><p>Upload the required identity and water-quality documents.</p></div></li>
                  <li><span>03</span><div><h3>Start receiving orders</h3><p>Go live, fulfil deliveries and build a base of repeat customers.</p></div></li>
                </ol>
              </div>
            </section>

            <section className="partner-final-cta">
              <div className="partner-container">
                <div className="partner-final-card">
                  <div><p className="partner-eyebrow">Ready when you are</p><h2>Let’s deliver more, together.</h2><p>Join the WtrDrop network and take your water business further.</p></div>
                  <a className="partner-primary-action partner-primary-action-light" href="https://play.google.com/store/apps/details?id=com.wtrdrop" target="_blank" rel="noreferrer">Get the partner app <MdArrowForward /></a>
                </div>
              </div>
            </section>
            <Contact />
          </main>
        </div>
      </div>
    </>
  );
}
