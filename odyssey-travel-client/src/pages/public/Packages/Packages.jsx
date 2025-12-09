import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const dummyPackages = [
  {
    name: "Goa",
    price: "₹8,000",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    name: "Kerala",
    price: "₹11,999",
    img: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca",
  },
  {
    name: "Andaman",
    price: "₹14,999",
    img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  },
  {
    name: "Gujarat",
    price: "₹9,999",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
];

function Packages() {
  const slider = useRef();

  const scrollLeft = () => slider.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => slider.current.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <div className="px-6 md:px-16 py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[80px] font-extrabold ">Holiday Packages</h2>
        <p className="text-gray-600 text-3xl">Indulge in unforgettable adventure with special tour plans.</p>
      </div>


      {/* Slider container */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        {/* Cards */}
        <div
          ref={slider}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
        >
          {dummyPackages.map((pkg, i) => (
            <div
              key={i}
              className="min-w-[280px] bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={pkg.img}
                className="h-48 w-full object-cover"
                alt={pkg.name}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{pkg.name}</h3>
                <p className="text-gray-600 mt-1">From <span className="font-bold">{pkg.price}</span></p>
                <button className="text-blue-600 mt-3 font-semibold flex items-center gap-1">
                  Explore <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      {/* Show All Button */}
      <div className="text-center mt-10">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700">
          Show All Packages
        </button>
      </div>
    </div>
  );
}



export default Packages