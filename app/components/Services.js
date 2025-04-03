"use client";
import Image from 'next/image';

export default function Services() {
  return (
    <>

      <div
        className="md:h-[200vh] bg-fixed bg-cover bg-center relative "
        style={{ backgroundImage: "url(/img1.jpg)", zIndex: -1 }}
        id='Services'
      >

        <div className="absolute inset-0  bg-opacity-50"></div>


        <div className="relative z-10 flex flex-col items-center text-white py-20 px-6">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            ❤️ What We Offer
          </h2>
          <h3 className="text-xl md:text-3xl font-bold text-amber-500 mb-8">
            Our Services
          </h3>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {[
              {
                title: "Birthday",
                desc: "Memorable birthday events with seamless planning!",
                img: "/bday.jpg",
              },
              {
                title: "Catering",
                desc: "Delicious catering for every special occasion!",
                img: "/catering.jpg",
              },
              {
                title: "College Fest and Events",
                desc: "Expert planning for dynamic college events!",
                img: "/clg.jpg",
              },
              {
                title: "Corporate Gathering",
                desc: "Elevate corporate events with flawless execution!",
                img: "/corporate.jpg",
              },
              {
                title: "Branding and Flex Printing",
                desc: "High-quality custom prints for branding, advertising, and large-scale signage",
                img: "/flex.webp",
              },
              {
                title: "Photography and Videography",
                desc: "Capturing moments, scenes, and emotions through a camera, preserving memories and visual storytelling",
                img: "/photo.jpg",
              },{
                title: "Theme Decor",
                desc: "Creative design elements tailored to a specific theme, enhancing ambiance for events, parties, or spaces",
                img: "/tdecor.jpg",
              },{
                title: "Wedding",
                desc: "Coordinating venue, decor, catering, and guest management for perfection.",
                img: "/wedding.jpg",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{service.title}</h4>
                  <p className="text-sm mt-2">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
