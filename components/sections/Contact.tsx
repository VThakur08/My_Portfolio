'use client';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container-max max-w-2xl">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black gradient-text">Let's Work Together</h2>
          <p className="text-lg text-gray-300">
            Have a project in mind? Let's talk about it.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-6 py-3 glass-sm rounded-xl text-white placeholder-gray-500"
            />
            <textarea
              placeholder="Your message"
              rows={5}
              className="w-full px-6 py-3 glass-sm rounded-xl text-white placeholder-gray-500 resize-none"
            />
            <button className="w-full btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
