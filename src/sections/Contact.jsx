import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
          'service_eexda4b',
          'template_j85rkvk',
          {
            from_name: form.name,
            to_name: 'Vishal Thakur',
            from_email: form.email,
            to_email: 'vishalkr.thakurr@gmail.com',
            message: form.message
          },
          'gbNlBMvLCncPbp336'
      );
      setLoading(false);
      alert('Your message has been sent');
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('Something went wrong');
    }
  };

  return (
      <section className="c-space my-32" id="contact">
        <div className="relative flex items-center justify-center flex-col py-20">
          <div className="contact-container max-w-2xl">
            <h2 className="head-text text-center">Let's Work Together</h2>
            <p className="text-lg text-white/70 mt-6 text-center font-light leading-relaxed">
              I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out if you&apos;d like to collaborate or just say hi!
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-8 md:mt-12 flex flex-col space-y-6">
              <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="Your Name"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Email address</span>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="johndoe@gmail.com"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Your message</span>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="field-input"
                    placeholder="Your Message"
                />
              </label>

              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}

                <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
              </button>
            </form>
          </div>
        </div>
      </section>
  );
};

export default Contact;
