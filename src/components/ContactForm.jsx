import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("Please fill all fields.");
      return;
    }

    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), 
      });

      if (res.ok) {
        setStatus("Successfully submitted!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const text = await res.text();
        console.error("ContactForm submit non-ok:", res.status, text);
        setStatus("Something went wrong, please try again.");
      }
    } catch (err) {
      console.error("ContactForm submit error:", err);
      setStatus("Network error, please try again later.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-xl">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={formData.name}
            onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input type="email" name="email" placeholder="Your Email" value={formData.email}
            onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone}
            onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <textarea name="message" placeholder="Your Message" rows="4" value={formData.message}
            onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
            Submit
          </button>
        </form>
        {status && <p className="text-center mt-4 text-gray-700">{status}</p>}
      </div>
    </section>
  );
}
