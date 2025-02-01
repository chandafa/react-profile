const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 contact">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-4xl font-bold">Contact</h2>
        <p className="mb-8 text-xl">Feel free to reach out to me!</p>
        <form>
          <input type="text" placeholder="Your Name" className="w-full max-w-xs p-3 mb-4 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full max-w-xs p-3 mb-4 border rounded" />
          <textarea placeholder="Your Message" className="w-full h-32 max-w-xs p-3 mb-4 border rounded" />
          <button type="submit" className="p-3 text-white bg-blue-500 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
