const Contact = () => {
  return (
    <section id="contact">
      {/* Container */}
      <div className="w-full px-5 py-16 mx-auto max-w-7xl md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="max-w-3xl">
            {/* Title */}
            <h2 className="mb-2 text-3xl font-bold md:text-5xl">Lets build something exciting together!</h2>
            <p className="max-w-lg pb-4 my-4 text-sm text-gray-500 sm:text-base md:mb-6 lg:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
            {/* Testimonial */}
            <div className="flex items-center mb-4 text-orange-500">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                ></path>
              </svg>
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                ></path>
              </svg>
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                ></path>
              </svg>
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                ></path>
              </svg>
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                ></path>
              </svg>
            </div>
            <p className="max-w-lg mb-8 text-sm text-gray-500 sm:text-base">Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis</p>
            <div className="flex">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block object-cover w-16 h-16 mr-4 rounded-full"
              />
              <div className="flex flex-col">
                <h6 className="text-base font-bold">Laila Bahar</h6>
                <p className="text-sm text-gray-500">Designer</p>
              </div>
            </div>
          </div>
          <div className="max-w-xl p-8 mx-auto text-center bg-gray-100">
            <h3 className="text-2xl font-bold md:text-3xl">Get a free quote</h3>
            <p className="max-w-lg mx-auto mt-4 mb-6 text-sm text-gray-500 lg:mb-8">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</p>
            {/* Form */}
            <form className="max-w-sm mx-auto mb-4 text-left" name="wf-form-password" method="get">
              <div>
                <label htmlFor="name-2" className="mb-1 font-medium">
                  Your Name
                </label>
                <input type="text" className="block w-full px-3 py-6 pl-4 mb-4 text-sm text-black border border-black border-solid rounded-md h-9" />
              </div>
              <div className="mb-2">
                <label htmlFor="name-2" className="mb-1 font-medium">
                  Email Address
                </label>
                <input type="text" className="block w-full px-3 py-6 pl-4 mb-4 text-sm text-black border border-black border-solid rounded-md h-9" />
              </div>
              <div className="mb-5 md:mb-6 lg:mb-8">
                <label htmlFor="field-3" className="mb-1 font-medium">
                  Project Brief
                </label>
                <textarea placeholder="" maxLength="5000" name="field" className="mb-2.5 block h-auto min-h-32 w-full rounded-md border border-solid border-black p-3 text-sm text-black"></textarea>
              </div>
              <input type="submit" value="Get free quote" className="inline-block w-full px-6 py-3 font-semibold text-center text-white bg-black rounded-md cursor-pointer" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
