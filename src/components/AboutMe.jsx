const AboutMe = () => {
  return (
    <section id="about" className="z-10">
      {/* Container */}
      <div className="w-full px-5 py-12 mx-auto max-w-7xl md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="flex flex-col items-center">
          {/* Item */}
          <div className="relative">
            <div className="absolute w-1 h-full transform -translate-x-1/2 bg-black md:w-2 left-1/2"></div>
            {/* Static Event Entry */}
            <div className="flex items-center w-full mt-20 mb-20">
              <div className="w-1/2 pr-5 text-right md:pr-12">
                <h5 className="text-lg font-semibold md:text-2xl">August 2014</h5>
              </div>
              <div className="w-4 h-4 bg-black rounded-full md:w-5 md:h-5"></div>
              <div className="w-1/2 pl-5 md:pl-12">
                <h6 className="mb-3 font-semibold text-md md:text-xl">Started the company</h6>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.</p>
              </div>
            </div>
            {/* Another Static Event Entry */}
            <div className="flex items-center w-full mt-20 mb-20">
              <div className="w-1/2 pr-5 text-right md:pr-12">
                <h5 className="text-lg font-semibold md:text-2xl">September 2016</h5>
              </div>
              <div className="w-4 h-4 bg-black rounded-full md:w-5 md:h-5"></div>
              <div className="w-1/2 pl-5 md:pl-12">
                <h6 className="mb-3 font-semibold text-md md:text-xl">First Client</h6>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.</p>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="relative">
            <div className="absolute w-1 h-full transform -translate-x-1/2 bg-gray-300 md:w-2 left-1/2"></div>
            {/* More Static Entries */}
            <div className="flex items-center w-full mt-20 mb-20">
              <div className="w-1/2 pr-5 text-right md:pr-12">
                <h5 className="text-lg font-semibold text-gray-600 md:text-2xl">January 2017</h5>
              </div>
              <div className="w-4 h-4 bg-gray-300 rounded-full md:w-5 md:h-5"></div>
              <div className="w-1/2 pl-5 md:pl-12">
                <h6 className="mb-3 font-semibold text-gray-600 text-md md:text-xl">Hired our first Dev</h6>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.</p>
              </div>
            </div>
            {/* And another one */}
            <div className="flex items-center w-full mt-20 mb-20">
              <div className="w-1/2 pr-5 text-right md:pr-12">
                <h5 className="text-lg font-semibold text-gray-600 md:text-2xl">May 2017</h5>
              </div>
              <div className="w-4 h-4 bg-gray-300 rounded-full md:w-5 md:h-5"></div>
              <div className="w-1/2 pl-5 md:pl-12">
                <h6 className="mb-3 font-semibold text-gray-600 text-md md:text-xl">Raised $5M</h6>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
