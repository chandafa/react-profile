"use client";

export default function Example() {
  return (
    <div id="hero" className="bg-white">
      {/* <div className="relative px-6 pt-1 isolate lg:px-8">
        <div aria-hidden="true" className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div> */}
      <header>
        {/* Container */}
        <div className="w-full px-5 py-16 mx-auto max-w-7xl md:px-10 md:py-20">
          {/* Component */}
          <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
            {/* Image */}
            <div className="[grid-area:2/1/3/2] lg:[grid-area:1/1/2/2]">
              <img src="https://random-image-pepebigotes.vercel.app/api/random-image" alt="" className="object-cover w-full h-full max-w-2xl" />
            </div>
            <div className="max-w-3xl">
              {/* Title */}
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">The Website You Want Without The Dev Time.</h1>
              <p className="max-w-2xl mb-6 text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
              {/* Button */}
              <div className="flex items-center mb-6 md:mb-10 lg:mb-12">
                <a href="#" className="px-6 py-3 mr-6 font-semibold text-center text-white bg-black rounded-md lg:mr-8">
                  Lets Talk
                </a>
                <a href="#" className="flex flex-row items-center font-bold">
                  <img src="https://dog.ceo/api/breeds/image/random" alt="" className="inline-block w-5 mr-2 max-h-4" />
                  <p className="text-sm sm:text-base">View Showreel</p>
                </a>
              </div>
              {/* Socials */}
              <div className="flex items-center">
                <p className="text-sm sm:text-base">Follow Us</p>
                {/* Divider */}
                <div className="w-10 ml-4 mr-4 border-t border-black"></div>
                <a href="#">
                  <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94172fe6cf9e_Frame%2047894%20(2).svg" alt="" className="inline-block mr-4" />
                </a>
                <a href="#">
                  <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a941e0ee6cf9d_Frame%2047894.svg" alt="" className="inline-block mr-4" />
                </a>
                <a href="#" className="inline-block max-w-full text-black">
                  <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9452ece6cf9f_Frame%2047894%20(1).svg" alt="" className="inline-block mr-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
