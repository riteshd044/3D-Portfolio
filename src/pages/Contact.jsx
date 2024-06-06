import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setLoading] = useState(false);
  const [currentAnimations, setCurrentAnimations] = useState('idle');
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimations('hit');

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          form_name: form.name,
          to_name: 'Ritesh',
          from_email: form.email,
          to_email: 'riteshd044@gmail.com',
          message: form.message
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        showAlert({ show: true, text: 'Message sent successfully!', type: 'success' });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimations('idle');
          setForm({ name: '', email: '', message: '' });
        }, 3000);
      })
      .catch((error) => {
        showAlert({ show: true, text: 'Failed to send message', type: 'danger' });
        setLoading(false);
        setCurrentAnimations('idle');
        console.error('EmailJS Error:', error);
      });
  };

  const handleFocus = () => {
    setCurrentAnimations('walk');
  };

  const handleBlur = () => {
    setCurrentAnimations('idle');
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form className="w-full flex flex-col gap-7 mt-14" onSubmit={submitHandler}>
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Ritesh"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="text"
              name="email"
              className="input"
              placeholder="ritesh@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              className="input"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button type="submit" className="btn" onFocus={handleFocus} onBlur={handleBlur}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimations}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
