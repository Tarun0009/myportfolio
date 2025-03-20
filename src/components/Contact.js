import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    setTimeout(() => {
      setLoading(false);
      setStatus("✅ Message Sent! Thank you.");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(""), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Contact Me</h2>
        <p className="mt-4 text-lg text-gray-600">
          Feel free to reach out to me directly or connect with me on my social channels.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Contact Info Box */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-gray-800 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-2">📞 Contact Me Directly</h3>
          <p>Email: <a href="mailto:tarunpratapsingh097@gmail.com" className="text-blue-600 hover:underline">tarunpratapsingh097@gmail.com</a></p>
          <p>Phone: <a href="tel:+919717862329" className="text-blue-600 hover:underline">+91 9717862329</a></p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 font-semibold rounded-md transition flex items-center justify-center ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
            disabled={loading}
          >
            {loading && <span className="mr-2 animate-spin">⏳</span>}
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && <p className="mt-4 text-green-600 animate-fade-in">{status}</p>}
        </form>
      </div>

      {/* Social Links */}
      <div className="mt-10 text-center">
        <p className="text-lg text-gray-600">Or connect with me on social media:</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/tarun-pratap-singh/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-medium transition-all duration-200">
            LinkedIn
          </a>
          <a href="https://github.com/tarunpratapsingh" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 font-medium transition-all duration-200">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
