import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useRef } from "react"

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = ({ target: { name, value } }) => { 
    setForm({ ...form, [name]: value });
  }
  // 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_aqww9mt",
        "template_fmttutt",
        {
          from_name: form.name,
          to_name: "Dia",
          from_email: form.email,
          to_email: "diaalrahman312@gmail.com",
          message: form.message,
        },
        "R3PiR8bqtgX0g7jo6",
      );
      setLoading(false);
      alert("Message sent successfully");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    };
  };
  return (
    <section className="c-space my-20" id="contact">
      <h3 className="head-text">Contact Me</h3>
      <div className="relative min-h-screen flex items-center items-center justify-center flex-col">
        <img src="/portfolio/assets/terminal.png" alt="terminal bg" className="absolute inset-0 min-h-screen" />
        <div className="contact-container">
          <h3 className="head-text">Get in touch</h3>
          <p className="text-lg text-white-600">Share your ideas</p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Full Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="Mohammad"/>  
            </label>
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder="md@gmail.com"/>  
            </label>
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea name="message" value={form.message} onChange={handleChange} rows={5} required className="field-input" placeholder="What do you want us to build?"/>
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img src="/portfolio/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact