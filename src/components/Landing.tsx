import { PropsWithChildren } from "react";
import PhoneMockupHero from "./PhoneMockupHero";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Welcome to</h2>
            <h1>
              WTRDROP
            </h1>
          </div>
          <div className="landing-info">
            <h3>Fresh Water</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Delivered</div>
              <div className="landing-h2-2">Fast</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Fast</div>
              <div className="landing-h2-info-1">Delivered</div>
            </h2>
          </div>
          <div className="landing-mockup" style={{ position: 'absolute', right: '5%', top: '25%', zIndex: 10, transform: 'scale(0.85)' }}>
            <PhoneMockupHero />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
