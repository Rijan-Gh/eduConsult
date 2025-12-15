import '../styles/Contact.css';
function Contact() {
    return (
      <>
        <section class="contact-hero">
        <div class="container">
          <h1>Get in Touch</h1>
          <p>
            We're here to guide your study abroad journey — reach out anytime.
          </p>
        </div>
        </section>

        <section class="contact-section container">
          <div class="contact-info">
            <h2>Contact Information</h2>
            <p>
              <strong>📍 Address:</strong><br />
                Putalisadak, Kathmandu, Nepal
            </p>

            <p>
              <strong>📞 Phone:</strong><br />
              +977-9800000000
            </p>

            <p>
              <strong>📧 Email:</strong><br />
              info@educonsultnepal.com
            </p>

            <p>
              <strong>🕒 Office Hours:</strong><br />
              Sun–Fri: 10 AM – 6 PM
            </p>
          </div>

          <div class="contact-form">
            <h2>Send Us a Message</h2>

            <form>
              <input type="text" placeholder="Your Full Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Phone Number" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>

        <section class="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.137722733312!2d85.32714687465596!3d27.71201437619179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197e0d4a02f1%3A0xb150e6b0c2eec2a2!2sPutalisadak%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1700000000000"
            allowfullscreen=""
            loading="lazy"
          >
          </iframe>
        </section>
      </>
    );
  }
  
  export default Contact;
  