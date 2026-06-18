import { useState } from "react"
import { db } from "../firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import emailjs from "@emailjs/browser"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.warn("Please fill in Name, Email and Message fields")
      return
    }

    setIsSubmitting(true)

    try {
      // 1. Save data in Firestore first
      await addDoc(collection(db, "contacts"), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        createdAt: serverTimestamp()
      })

      // 2. Try to send EmailJS notification
      try {
        const templateParams = {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          dateTime: new Date().toLocaleString(),
          reply_to: formData.email.trim()
        }

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        if (serviceId && templateId && publicKey) {
          await emailjs.send(serviceId, templateId, templateParams, publicKey)
        } else {
          console.warn("EmailJS environment variables are missing. Skipping email notification.")
        }
      } catch (emailError) {
        console.error("Email notification failed to send:", emailError)
      }

      toast.success("Thank you for contacting us. Your message has been submitted successfully.")

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      })
    } catch (error) {
      console.error("Error sending message:", error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#061224] text-white min-h-screen">

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Hero */}
      <section className="pt-40 pb-24 text-center px-6">

        <p className="text-yellow-400 tracking-[5px] uppercase mb-4 font-semibold">
          Get In Touch
        </p>

        <h1 className="text-5xl md:text-6xl font-bold">
          Contact Us
        </h1>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Have questions? We are here to help and guide you through every step.
        </p>

      </section>

      {/* Contact Cards */}
      <section className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl hover:border-yellow-400 transition-all duration-300">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-400 text-black flex items-center justify-center text-2xl font-bold mb-6">
              ✉
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Email Us
            </h3>

            <p className="text-yellow-400">
              info@enlightenedbharat.com
            </p>

            <p className="text-gray-400 mt-3">
              We respond within 24 hours
            </p>

          </div>

          {/* Call */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl hover:border-yellow-400 transition-all duration-300">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-400 text-black flex items-center justify-center text-2xl font-bold mb-6">
              ☎
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Call Us
            </h3>

            <p className="text-yellow-400">
              +91 9876543210
            </p>

            <p className="text-gray-400 mt-3">
              Monday to Saturday
            </p>

          </div>

          {/* Visit */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl hover:border-yellow-400 transition-all duration-300">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-400 text-black flex items-center justify-center text-2xl font-bold mb-6">
              📍
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Visit Us
            </h3>

            <p className="text-yellow-400">
              Uttar Pradesh, India
            </p>

            <p className="text-gray-400 mt-3">
              Enlightened Bharat Gurukul
            </p>

          </div>

        </div>

      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 py-24">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl">

          <h2 className="text-4xl font-bold text-center">
            Send Us a Message
          </h2>

          <p className="text-gray-400 text-center mt-4 mb-10">
            Fill out the form below and we will get back to you shortly.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
              />

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
              />

            </div>

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your query..."
              className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-semibold duration-300 ${isSubmitting ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "bg-yellow-400 text-black hover:scale-[1.02]"}`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </section>

      {/* Map */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="rounded-3xl overflow-hidden border border-white/10">

          <iframe
            src="https://maps.google.com/maps?q=28.228929,79.455620&z=16&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            title="Campus Location"
          ></iframe>

        </div>

      </section>

    </div>
  );
}

export default Contact;