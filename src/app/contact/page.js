// pages/contact.js
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './contact.css';

export default function Contact() {
  const router = useRouter();
  let [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
   e.preventDefault();
    router.push(`/submitted/?name=${formData.name}&email=${formData.email}&message=${formData.message}`);
  };

  return (
    <div className='forms'>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='enter your name'
            required
          />
        </div>
        <div>
          <label for="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='enter your email'
            required
          />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='enter your message'
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
