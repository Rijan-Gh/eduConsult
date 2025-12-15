
import '../styles/Destinations.css';
function Destinations() {
    return (
      <>
        <section class="hero">
          <div class="hero-inner">
            <div class="hero-text">
              <h1>Explore Your Study Destination</h1>
              <p>
                Learn about top countries Nepali students choose for world-class
                education, career growth, and global exposure.
              </p>
              <a href="#destinations-section" class="cta-btn">View Countries</a>
            </div>
          </div>
        </section>

      <section className="destinations-page" id="destinations-section">
        <div className="dest-grid">
          <div className="dest-card">
            <img src="https://infoconsultant.edu.np/wp-content/uploads/2023/12/canada.jpg" alt="Canada"/>
            <h3>Canada</h3>
            <p>Known for affordable tuition fees, high visa success rates, 
              and excellent post‑study work opportunities. Ideal for students 
              seeking quality education with diverse culture and safety.
            </p>
          </div>
  
          <div className="dest-card">
            <img src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1000" alt="United Kingdom" />
            <h3>United Kingdom</h3>
            <p>
              Home to prestigious universities, the UK offers fast-track
              degrees, scholarship opportunities, and globally recognized
              qualifications.
            </p>
          </div>
  
          <div className="dest-card">
            <img src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1000" alt="Australia"/>
            <h3>Australia</h3>
            <p>
              Popular for its vibrant lifestyle, flexible work rights, and
              world‑ranking universities. A top choice for Nepali students.
            </p>
          </div>
  
          <div className="dest-card">
            <img src="https://www.commenda.io/wp-content/uploads/2025/03/67d2722704d8774f11ce8828_statue-liberty-usa.jpg"
              alt="USA" />
            <h3>United States</h3>
            <p>
              Offers unmatched academic excellence, research facilities, and
              limitless career opportunities across hundreds of world-leading
              universities.
            </p>
          </div>

          <div className="dest-card">
            <img src="https://infoconsultant.edu.np/wp-content/uploads/2023/12/japan.jpg" alt="Japan" />
            <h3>Japan</h3>
            <p>
              Known for safety, technology‑driven education, and affordable
              tuition. A rising study hub for technical and language programs.
            </p>
          </div>

          <div class="dest-card">
            <img
              src="https://images.unsplash.com/photo-1502786129293-79981df4e689?w=1000"
              alt="New Zealand" />
            <h3>New Zealand</h3>
            <p>
              A peaceful and innovative study destination offering high quality
              education with great work‑life balance and post‑study pathways.
            </p>
          </div>

        </div>
      </section>
      </>
    );
  }
  
  export default Destinations;
  