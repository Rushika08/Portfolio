import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message) {
      setStatus('⚠️ Please fill out all fields.');
      return;
    }

    emailjs.send(
      'service_2e0gx5k',     // Replace with your actual service ID
      'template_93nfg64',    // Replace with your actual template ID
      formData,
      'AA5Q-MxHJ6UgrCW7_'      // Replace with your actual public key
    )
    .then(() => {
      setStatus('✅ Message sent successfully!');
      setFormData({ from_name: '', from_email: '', message: '' });
    })
    .catch(() => {
      setStatus('❌ Something went wrong. Please try again.');
    });
  };

  return (
    <section className="p-8 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <p className="text-slate-300 mb-4">Let’s connect — for collaboration, hiring, or just a chat!</p>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-2 rounded bg-slate-800 text-white border border-slate-700"
        />
        <input
          name="from_email"
          type="email"
          value={formData.from_email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-2 rounded bg-slate-800 text-white border border-slate-700"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          className="p-2 rounded bg-slate-800 text-white border border-slate-700"
        />
        <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded">
          Send Message
        </button>
        {status && <p className="text-sm text-slate-300 mt-2">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
