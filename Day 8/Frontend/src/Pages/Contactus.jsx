import React from 'react'
import '../Assets/css/Contactus.css'  

function Contactus() {
  return (
    
    <section className="contact-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h2>Contact Us</h2>
          <p>If you have any questions or inquiries, please feel free to contact us.</p>
        </div>
        <div className="col-lg-6">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Contactus;