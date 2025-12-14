import "../styles/About.css";

function About() {
  return (
    <section className="about-page">
      <div className="page-header">
        <h1>About EduNepal</h1>
        <p>Your Trusted Partner in International Education</p>
      </div>
      
      <div className="content-grid">
        <div className="left-content">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              EduNepal has been helping Nepali students achieve their dreams of studying abroad 
              for over 15 years. With thousands of successful placements worldwide, we've built 
              a reputation for excellence, integrity, and student-centric services.
            </p>
          </div>
          
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To provide comprehensive guidance and support to students, helping them navigate 
              the complex process of studying abroad while ensuring they make informed decisions 
              about their education and future.
            </p>
          </div>
        </div>
        
        <div className="right-content">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>1200+</h3>
              <p>Students Placed</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Visa Success Rate</p>
            </div>
            <div className="stat-item">
              <h3>4</h3>
              <p>Countries Covered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;