function Contact() {
    return (
      <section className="contact-page" id="contact">
        <h1>Contact Us</h1>
        <p>Book a free consultation with EduNepal experts.</p>
  
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <select>
            <option>Preferred Destination</option>
            <option>Canada</option>
            <option>UK</option>
            <option>Australia</option>
            <option>USA</option>
          </select>
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="cta-btn">
            Submit
          </button>
        </form>
      </section>
    );
  }
  
  export default Contact;
  