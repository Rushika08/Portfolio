const Contact = () => {
    return (
      <section className="p-8 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-slate-300 mb-4">Let’s connect — for collaboration, hiring, or just a chat!</p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-2 rounded bg-slate-800 text-white border border-slate-700" />
          <input type="email" placeholder="Your Email" className="p-2 rounded bg-slate-800 text-white border border-slate-700" />
          <textarea placeholder="Your Message" rows="4" className="p-2 rounded bg-slate-800 text-white border border-slate-700"></textarea>
          <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded">Send Message</button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  