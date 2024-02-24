import React from 'react';

function Contact() {
  return (
    <div>
      <section className="contact" id="contact">
        <h1 className="heading"> contact <span> me </span> </h1>

        <div className="icons-container">
          <div className="icons">
            <i className="fas fa-envelope"></i>
            <h3>my email</h3>
            <p>yadnikshruti07@gmail.com</p>
          </div>

          <div className="icons">
            <i className="fas fa-phone"></i>
            <h3>my number</h3>
            <a
              href="mailto:yadnikshruti07@gmail.com?subject=Request%20for%20Number&body=Dear%20Ms.%20Shruti%20Yadnik,%0A%0AI hope this message finds you well. My name is [Your Name], and I am reaching out to request your contact number.%0A%0AThank you for considering my request. I look forward to the opportunity to connect with you.%0A%0AKind regards,%0A[Your Name]"
              style={{ fontSize: '1.7rem' }}
            >
              Protected-number
            </a>
          </div>

          <div className="icons">
            <i className="fas fa-map-marker-alt"></i>
            <h3>my address</h3>
            <p>Chandrabhaga Nagar, Dhankawadi, Pune 411043</p>
          </div>
        </div>

        <div className="row">
          <form action="">
            <input type="text" placeholder="name" className="box" />
            <input type="email" placeholder="email" className="box" />
            <input type="number" placeholder="number" className="box" />

            <textarea
              name=""
              placeholder="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <input type="submit" className="btn" value="send message" />
          </form>

          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1625069635379!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
