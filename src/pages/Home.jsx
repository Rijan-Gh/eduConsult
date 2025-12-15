
import '../styles/home.css';
function Home() {
    return (
      <>
          <section id="hero" class="hero">
          <div class="hero-text">
          <h1>Make Your Study Abroad Dream Come True</h1>
          <p>
              Trusted education consultancy helping Nepali students study in Canada,
              USA, UK, and Australia.
          </p>
          <a href="/eduConsult/#/Contact" class="cta-btn">Book Free Consultation</a>
          </div>
  
          <div class="hero-img">
          <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=900" alt=""/>
          </div>
          </section>
  
          <section id="services" class="services">
          <h2>Our Services</h2>
  
          <div class="service-grid">
          <div class="service-card">
              <h3>Career Counselling</h3>
              <p>Find the right course and country based on your goals.</p>
          </div>
          <div class="service-card">
              <h3>University Selection</h3>
              <p>Choose from top-ranked universities worldwide.</p>
          </div>
          <div class="service-card">
              <h3>Visa Processing</h3>
              <p>Complete visa documentation and interview preparation.</p>
          </div>
          <div class="service-card">
              <h3>Test Preparation</h3>
              <p>IELTS, PTE, TOEFL classes available with expert instructors.</p>
          </div>
          </div>
          </section>
  
          <section id="destinations" class="destinations">
          <h2>Popular Study Destinations</h2>
  
          <div class="dest-grid">
          <div class="dest-card">
              <img
              src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800"
              alt=""
              />
              <h3>Canada</h3>
          </div>
  
          <div class="dest-card">
              <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800"
              alt=""
              />
              <h3>United Kingdom</h3>
          </div>
  
          <div class="dest-card">
              <img
              src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800"
              alt=""
              />
              <h3>Australia</h3>
          </div>
  
          <div class="dest-card">
              <img
              src="https://www.commenda.io/wp-content/uploads/2025/03/67d2722704d8774f11ce8828_statue-liberty-usa.jpg"
              alt="United States"
              />
              <h3>United States</h3>
          </div>
          </div>
          </section>
  
          <section class="why-us" id="why">
          <div class="container">
          <h2>Why Choose <span>EduNepal</span>?</h2>
          <div class="grid">
              <div class="card">
              <h3>Expert Counsellors</h3>
              <p>15+ years of experience placing Nepali students globally</p>
              </div>
              <div class="card">
              <h3><span class="counter" data-target="1200">0</span> Success Stories</h3>
              <p>Students studying in top universities worldwide</p>
              </div>
              <div class="card">
              <h3>98% Visa Success Rate</h3>
              <p>Highest approval rate in Nepal</p>
              </div>
          </div>
          </div>
          </section>
  
          <section class="testimonials">
          <h2>Success Stories</h2>
  
          <div class="testi-grid">
          <div class="testi-card">
              <p>
              "I got my Canadian visa approved in one attempt! Amazing guidance."
              </p>
              <span>- Student, Canada</span>
          </div>
  
          <div class="testi-card">
              <p>"EduNepal helped me choose the perfect UK university."</p>
              <span>- Student, UK</span>
          </div>
  
          <div class="testi-card">
              <p>"Very supportive team! Highly recommended for Australia."</p>
              <span>- Student, Australia</span>
          </div>
          </div>
          </section>
  
          <section id="contact" class="contact-cta">
          <h2>Ready to Start Your Journey?</h2>
          <p>Book a free consultation with our expert counsellors.</p>
          <a href="/#/Contact" class="cta-btn">Contact Us</a>
          </section>
      </>
  
      );
  }
  
  export default Home;