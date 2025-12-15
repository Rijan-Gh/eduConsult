import "../styles/About.css";
import gear5Image from '../assets/gear5.jpg';

function About() {
  return (
    <section className="about-page">
      <div className="about-hero" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)'}}>
        <div className="hero-overlay">
          <h1>About EduNepal</h1>
          <p className="hero-subtitle">Your Trusted Partner in International Education Since 2008</p>
          <p className="hero-description">
            Empowering Nepali students to achieve global education excellence through personalized 
            guidance, transparent processes, and unwavering support.
          </p>
        </div>
      </div>

      <div className="mission-vision-section">
        <div className="mission-card">
          <div className="icon-wrapper">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Mission" />
          </div>
          <h2>Our Mission</h2>
          <p>
            To bridge the gap between Nepali students and world-class education by providing 
            comprehensive, ethical, and personalized consultation services. We strive to make 
            international education accessible, affordable, and achievable for every deserving 
            student.
          </p>
        </div>

        <div className="vision-card">
          <div className="icon-wrapper">
            <img src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Vision" />
          </div>
          <h2>Our Vision</h2>
          <p>
            To become Nepal's most trusted education consultancy, recognized for transforming 
            dreams into global opportunities. We envision a future where every Nepali student 
            can access quality education anywhere in the world, regardless of their background.
          </p>
        </div>
      </div>

      <div className="story-section">
        <div className="story-content">
          <h2>Our Journey</h2>
          <div className="story-image-mobile">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Our Office" />
          </div>
          <p>
            Founded in 2008 by a group of former international students, EduNepal began with 
            a simple mission: to simplify the complex process of studying abroad. What started 
            as a small consultancy in Kathmandu has grown into a nationwide network of 
            education experts.
          </p>
          <p>
            Over the years, we've helped thousands of students navigate university applications, 
            visa processes, and cultural transitions. Our team comprises former international 
            students, certified counselors, and immigration experts who understand both the 
            challenges and opportunities of studying abroad.
          </p>
          <div className="story-gallery">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Students Success" />
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Our Office" />
          </div>
        </div>
        <div className="story-image">
          <img 
            src="/assets/gear5.jpg" 
            alt="EduNepal team guiding students" 
          />
        </div>
      </div>

      <div className="stats-section" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)'}}>
        <div className="stats-overlay">
          <h2 className="stats-title">Our Impact in Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <span className="icon-text">🏆</span>
              </div>
              <h3>15+</h3>
              <p>Years of Excellence</p>
              <span className="stat-desc">Trusted since 2008</span>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <span className="icon-text">👨‍🎓</span>
              </div>
              <h3>5,000+</h3>
              <p>Students Successfully Placed</p>
              <span className="stat-desc">Across 20+ countries</span>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <span className="icon-text">🤝</span>
              </div>
              <h3>98.5%</h3>
              <p>Visa Success Rate</p>
              <span className="stat-desc">Highest in the industry</span>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <span className="icon-text">❤️</span>
              </div>
              <h3>200+</h3>
              <p>Partner Universities</p>
              <span className="stat-desc">Worldwide network</span>
            </div>
          </div>
        </div>
      </div>

      <div className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-image">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Integrity" />
            </div>
            <h3>Integrity</h3>
            <p>We believe in transparent processes, honest advice, and ethical practices in everything we do.</p>
          </div>
          <div className="value-card">
            <div className="value-image">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Student-Centric" />
            </div>
            <h3>Student-Centric Approach</h3>
            <p>Every student is unique. We provide personalized guidance tailored to individual aspirations and capabilities.</p>
          </div>
          <div className="value-card">
            <div className="value-image">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Excellence" />
            </div>
            <h3>Excellence</h3>
            <p>We strive for excellence in service delivery, from initial counseling to post-arrival support.</p>
          </div>
          <div className="value-card">
            <div className="value-image">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Global Perspective" />
            </div>
            <h3>Global Perspective</h3>
            <p>We maintain a worldwide network to provide up-to-date information on global education trends.</p>
          </div>
        </div>
      </div>

      <div className="services-overview">
        <h2>What Sets Us Apart</h2>
        <div className="services-grid">
          <div className="service-highlight">
            <div className="service-icon">🚀</div>
            <h3>End-to-End Support</h3>
            <p>From course selection to airport pickup, we're with you at every step of your journey.</p>
          </div>
          <div className="service-highlight">
            <div className="service-icon">💰</div>
            <h3>Financial Guidance</h3>
            <p>Expert advice on scholarships, education loans, and budget planning for your studies abroad.</p>
          </div>
          <div className="service-highlight">
            <div className="service-icon">🏠</div>
            <h3>Post-Arrival Assistance</h3>
            <p>Comprehensive support including accommodation, part-time jobs, and cultural adaptation.</p>
          </div>
          <div className="service-highlight">
            <div className="service-icon">🌐</div>
            <h3>Alumni Network</h3>
            <p>Connect with our global alumni community for mentorship and networking opportunities.</p>
          </div>
        </div>
      </div>

      <div className="team-section">
        <h2>Meet Our Leadership</h2>
        <p className="team-description">
          Our team of experienced counselors, former international students, and education 
          experts bring diverse perspectives and deep industry knowledge to guide you.
        </p>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Founder" />
            </div>
            <h3>Rajesh Thapa</h3>
            <p className="member-role">Founder & CEO</p>
            <p className="member-bio">Former international student with 20+ years in education consultancy</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Head Counselor" />
            </div>
            <h3>Priya Sharma</h3>
            <p className="member-role">Head of Counseling</p>
            <p className="member-bio">Masters in Education from UK, 15+ years of student guidance experience</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Visa Expert" />
            </div>
            <h3>Anil Gurung</h3>
            <p className="member-role">Visa & Immigration Director</p>
            <p className="member-bio">Certified immigration consultant with 98.5% visa success rate</p>
          </div>
        </div>
      </div>

      <div className="gallery-section">
        <h2>Our Success Stories</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/assets/gear5.jpg" alt="Student Consultation" />
            <p>Personalized Counseling Sessions</p>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w-400&q=80" alt="University Fair" />
            <p>Annual Education Fair</p>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Visa Success" />
            <p>Visa Success Celebrations</p>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Alumni Meet" />
            <p>Global Alumni Network</p>
          </div>
        </div>
      </div>

      <div className="about-cta" style={{backgroundImage: 'linear-gradient(rgba(0, 40, 85, 0.9), rgba(0, 40, 85, 0.9)), url(https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)'}}>
        <h2>Ready to Begin Your Journey?</h2>
        <p>
          Join thousands of successful Nepali students who have achieved their dreams 
          through EduNepal's expert guidance.
        </p>
        <div className="cta-buttons">
          <a href="/contact" className="cta-btn primary">Book Free Consultation</a>
          <a href="/destinations" className="cta-btn secondary">Explore Destinations</a>
        </div>
      </div>
    </section>
  );
}

export default About;