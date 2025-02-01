const Services = () => {
  return (
    <section id="service">
      {/* Container */}
      <div className="w-full px-5 py-16 mx-auto max-w-7xl md:px-10 md:py-20">
        {/* Title */}
        <h2 className="items-center text-3xl font-bold text-center md:text-5xl">Service</h2>
        <p className="max-w-lg mx-auto mt-4 mb-8 text-sm text-center text-gray-500 sm:text-base md:mb-12">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</p>
        {/* List */}
        <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
          <li className="flex flex-col items-center gap-6 p-8 md:border-r md:px-10 md:py-4 md:border-gray-300">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block object-cover w-16 h-16 rounded-full"
            />
            <p className="text-xl font-semibold">Support</p>
            <p className="text-sm text-center text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.</p>
          </li>
          <li className="flex flex-col items-center gap-6 p-8 md:border-r md:px-10 md:py-4 md:border-gray-300">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block object-cover w-16 h-16 rounded-full"
            />
            <p className="text-xl font-semibold">Organise</p>
            <p className="text-sm text-center text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.</p>
          </li>
          <li className="flex flex-col items-center gap-6 p-8 md:border-r md:px-10 md:py-4 md:border-gray-300">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block object-cover w-16 h-16 rounded-full"
            />
            <p className="text-xl font-semibold">Flexibility</p>
            <p className="text-sm text-center text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.</p>
          </li>
          <li className="flex flex-col items-center gap-6 p-8 md:border-r md:px-10 md:py-4 md:border-gray-300">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block object-cover w-16 h-16 rounded-full"
            />
            <p className="text-xl font-semibold">Speed</p>
            <p className="text-sm text-center text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
