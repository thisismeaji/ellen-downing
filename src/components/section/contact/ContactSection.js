'use client';

import React, { useState } from 'react';
import Styles from "../contact/contact.module.css";
import Button from '@/components/button/Button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });

  const [activeField, setActiveField] = useState(null); // Untuk melacak input yang sedang fokus

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = (fieldName) => {
    if (formData[fieldName] === '') {
      setActiveField(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    alert('Message sent successfully!');
    setFormData({ name: '', subject: '', email: '', message: '' }); 
    setActiveField(null);
  };

  return (
    <section className={Styles.contactSection}>
      <div>
        <h1>Contact Me</h1>
      </div>
      <div className={Styles.contact}>
        <div className={Styles.contactInfo}>
          <h3>Address</h3>
          <p>123 Anywhere St., Any City
          State, Country 12345</p>
          <h3>Phone Number / Whatsapp</h3>
          <p>(123) 456 7890</p>
          <h3>Email</h3>
          <p>hello@reallygreatsite.com</p>
        </div>

        <div className={Styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <div>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                placeholder={activeField === 'name' ? '' : 'enter your name'}
                required
              />
            </div>

            <div>
              <p>Subject</p>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => handleFocus('subject')}
                onBlur={() => handleBlur('subject')}
                placeholder={activeField === 'subject' ? '' : 'enter a subject'}
                required
              />
            </div>

            <div>
              <p>Email</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                placeholder={activeField === 'email' ? '' : 'enter your email'}
                required
              />
            </div>

            <div>
              <p>Message</p>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
                placeholder={activeField === 'message' ? '' : 'how i can help you today'}
                required
              ></textarea>
            </div>
            <div>
              <Button text="Send" link="/submit"/>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
