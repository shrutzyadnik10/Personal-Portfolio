import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        return value.trim().length >= 3;
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case 'number':
        return /^\d{10}$/.test(value);
      case 'message':
        return value.trim().length >= 10;
      default:
        return true;
    }
  };

  const handleBlur = (fieldName, value) => {
    const newErrors = { ...errors };

    if (!validateField(fieldName, value)) {
      switch (fieldName) {
        case 'name':
          newErrors[fieldName] = 'Name should be at least 3 characters';
          break;
        case 'email':
          newErrors[fieldName] = 'Invalid email format';
          break;
        case 'number':
          newErrors[fieldName] = 'Must be a phone number. 503-555-1212';
          break;
        case 'message':
          newErrors[fieldName] = 'Message should be at least 10 characters';
          break;
        default:
          newErrors[fieldName] = 'Field is not valid';
      }
    } else {
      newErrors[fieldName] = '';
    }

    setErrors(newErrors);
  };

  const handleNumberChange = (e) => {
    // Allow only numeric input in the "number" field and limit to 10 digits
    const numericValue = e.target.value.replace(/\D/g, '').slice(0, 10);
    setNumber(numericValue);
  };

  const validateForm = () => {
    const newErrors = {};

    Object.entries({ name, email, number, message }).forEach(([fieldName, value]) => {
      if (!validateField(fieldName, value)) {
        switch (fieldName) {
          case 'name':
            newErrors[fieldName] = 'Name is required';
            break;
          case 'email':
            newErrors[fieldName] = 'Email is required';
            break;
          case 'number':
            newErrors[fieldName] = 'Number is required';
            break;
          case 'message':
            newErrors[fieldName] = 'Message is required';
            break;
          default:
            newErrors[fieldName] = 'Field is required';
        }
      } else {
        newErrors[fieldName] = '';
      }
    });

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Your form submission logic goes here
      console.log('Form submitted:', { name, email, number, message });
    }
  };



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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="name"
              className="box"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleBlur('name', name)}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="email"
              placeholder="email"
              className="box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur('email', email)}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <input
              type="text" 
              placeholder="number"
              className="box"
              value={number}
              onChange={handleNumberChange}
              onBlur={() => handleBlur('number', number)}
            />
            {errors.number && <p className="error">{errors.number}</p>}
            <textarea
              name=""
              placeholder="message"
              id=""
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() => handleBlur('message', message)}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}

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
