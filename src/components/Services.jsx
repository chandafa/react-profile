const Services = () => {
  return (
    <section id="service" className="py-20 bg-gray-100 services">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-4xl font-bold">Services</h2>
        <p className="mb-8 text-xl">I offer the following services:</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="p-4 bg-white rounded-lg shadow-lg service">
            <h3 className="text-2xl font-bold">Web Development</h3>
            <p className="text-lg">Building modern, responsive websites using the latest technologies.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-lg service">
            <h3 className="text-2xl font-bold">UI/UX Design</h3>
            <p className="text-lg">Creating intuitive user interfaces with great user experiences.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-lg service">
            <h3 className="text-2xl font-bold">SEO Optimization</h3>
            <p className="text-lg">Improving your websites visibility on search engines.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
