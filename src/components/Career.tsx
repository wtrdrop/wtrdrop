import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mobile App Developer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Started building Flutter mobile apps for clients. Developed
              real-world applications integrating Firebase, Google Maps, and
              REST APIs. Gained deep expertise in state management and clean
              architecture patterns.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter Developer</h4>
                <h5>Independent Projects</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Designed and built WtrDrop — a full-scale multi-role water
              delivery platform. Architected dedicated Flutter apps for customers,
              suppliers, and drivers with a shared Firebase backend, real-time
              Firestore sync, QR workflows, and Google Maps integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Flutter Developer</h4>
                <h5>WtrDrop Platform</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Continuously evolving WtrDrop with advanced features: QR-based
              order completion, driver-supplier linking via QR scan, settlement
              systems, commission management, subscription handling, Cloud
              Functions automation, and role-based support management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
