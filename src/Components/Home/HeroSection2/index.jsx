import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function HeroWithCompactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        e.target,
        "your_user_id" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="relative bg-gray-50 text-zinc-700">
      <div className="container mx-auto flex flex-col sm:flex-row items-center px-6 sm:px-12 md:py-28 gap-3 py-11">
        {/* Left Content */}
        <motion.div
          className="text-center sm:text-left sm:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-zinc-800">
            Fast Delivery, <br /> Best Quality Products
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Experience seamless delivery with top-notch products. Trust us for quality and speed.
          </p>
          <div className="mt-6">
            <a
              href="#features"
              className="inline-flex items-center px-6 py-3 text-white bg-[#e23744] hover:bg-[#cc1f35] font-medium rounded-full shadow-md transition duration-300"
            >
              Get Delivery Now
            </a>
          </div>
        </motion.div>

        {/* Right Compact Form */}
        <motion.div
          className="sm:w-1/2 bg-white p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-lg font-semibold mb-3 text-zinc-800">Contact Us</h2>
          <form onSubmit={sendEmail} className="space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e23744] text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e23744] text-sm"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e23744] text-sm"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="3"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e23744] text-sm"
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-[#e23744] hover:bg-[#cc1f35] font-medium rounded-lg transition duration-300 text-sm"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
