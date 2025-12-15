import '../styles/Services.css';

function Services() {
  return (
    <section className="services-page">
      <div className="services-hero">
        <h1>Our Premium Services</h1>
        <p className="hero-subtitle">Comprehensive support for your study abroad journey</p>
      </div>

      <div className="service-grid">
        <div className="service-card">
          <div className="service-icon">🎯</div>
          <h3>Career Counselling</h3>
          <p>Personalized guidance based on your interests, skills, and career goals with market analysis.</p>
          <span className="service-tag">Free Session</span>
        </div>

        <div className="service-card">
          <div className="service-icon">🏫</div>
          <h3>University Selection</h3>
          <p>Choose from 200+ top universities worldwide with detailed ranking and placement analysis.</p>
          <span className="service-tag">98% Success Rate</span>
        </div>

        <div className="service-card">
          <div className="service-icon">🛂</div>
          <h3>Visa Assistance</h3>
          <p>Complete documentation, mock interviews, and application processing for high success rates.</p>
          <span className="service-tag">Expert Guidance</span>
        </div>

        <div className="service-card">
          <div className="service-icon">📚</div>
          <h3>Test Preparation</h3>
          <p>IELTS, PTE, TOEFL, GRE, GMAT coaching with certified instructors and mock tests.</p>
          <span className="service-tag">Score Improvement</span>
        </div>

        <div className="service-card">
          <div className="service-icon">✈️</div>
          <h3>Pre-Departure Support</h3>
          <p>Accommodation, travel arrangements, insurance, and cultural orientation sessions.</p>
          <span className="service-tag">Stress-Free Move</span>
        </div>

        <div className="service-card">
          <div className="service-icon">💼</div>
          <h3>Financial Guidance</h3>
          <p>Scholarship applications, education loans, and budget planning for international studies.</p>
          <span className="service-tag">Cost Optimization</span>
        </div>
      </div>

      <div className="process-section">
        <h2>Our Simple Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h4>Consultation</h4>
            <p>Free assessment of your profile</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h4>Planning</h4>
            <p>Customized roadmap creation</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h4>Execution</h4>
            <p>Application & documentation</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h4>Support</h4>
            <p>Visa & post-arrival assistance</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="services-cta">
        <h3>Ready to Begin Your Journey?</h3>
        <p>Get expert guidance for your international education goals</p>
        <a href="/contact" className="cta-button">Book Free Consultation</a>
      </div>
    </section>
  );
}

export default Services;