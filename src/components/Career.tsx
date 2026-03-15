import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>PayPal · San Jose, CA</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Designed and built onboarding APIs in Java and Spring Boot,
              integrated KYC flows across 6+ services, and automated testing
              with 95-100% coverage to keep quality and compliance high.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer (Contract)</h4>
                <h5>Walmart Global Tech · Sunnyvale, CA</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Developed backend APIs for the Sellers Chargeback feature,
              improving transaction efficiency and compliance while integrating
              third-party services and strengthening CI/CD quality.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Ericsson · Noida, India</h5>
              </div>
              <h3>2016 - 2022</h3>
            </div>
            <p>
              Engineered distributed microservices for 11M+ subscribers,
              improved incident response by 40%, and delivered CI/CD and
              Kafka-based messaging at scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
