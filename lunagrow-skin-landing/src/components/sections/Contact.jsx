function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-6 text-lg">
        Have a question or want to collaborate? We’d love to hear from you.
      </p>
      <a
        href="mailto:hello@lunagrow.com"
        className="inline-block bg-white text-indigo-700 px-6 py-3 font-semibold rounded-full hover:bg-gray-100 transition-all"
      >
        Email Us
      </a>
    </section>
  );
}

export default Contact;