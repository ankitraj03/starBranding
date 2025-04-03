import { Ubuntu } from "next/font/google";
import { Mona_Sans } from "next/font/google";

const ubu = Ubuntu({ subsets: ["greek"], weight: ["700"] });
const mono = Mona_Sans({ subsets: ["vietnamese"], weight: ["300"] })

export default function InfoSection() {
  return (
    <div className="bg-[rgb(45, 50, 70)]" id="Infosection">
      <h1 className={`sm:m-3 flex justify-center items-center text-center md:text-4xl ${ubu.className}`}>
        MAKING EVENT PLANNING AS EASY AS PIE
      </h1>
      <hr />

      <div className=" m-5 md:p-5 mt-10 md:flex md:justify-center">
        <div className="flex-1  ">
          <h1 className={`text-5xl ${mono.className}`}>EVENT PLANNER</h1>
          <hr />
          <h1 className={`text-5xl ${mono.className} text-[#C19A6B]`}>STAR BRANDING SOLUTION</h1>

          <h1 className="text-2xl font-extrabold text-[#545353] mt-3">"Where Every Occasion Becomes a Timeless Celebration."</h1>
          <p className="text-[#313030] m-2 w-[90%]">
            At Star Branding Solution, we believe every event tells a story—one of joy, elegance, and unforgettable memories. Whether it’s a grand wedding, a lively college fest, a sophisticated corporate event, or an intimate birthday celebration, we curate experiences that blend creativity with flawless execution. Our team transforms visions into reality, ensuring that every detail, from breathtaking décor to impeccable coordination, is nothing short of perfection.
          </p>
          <br />
          <p className="text-[#313030] m-2 w-[90%]">With expertise in catering, photography, entertainment, and event management, we craft immersive experiences tailored to your unique style. Be it a lavish gala or a cozy gathering, our passion for excellence ensures that your special moments shine brighter than ever. Let us create magic, one event at a time.</p>
        </div>
        <div className="md:flex flex-1">
          <div className="md:w-[50%] m-3 p-3">
            <div className="h-[40vh] md:h-[50vh] m-3 shadow-2xl">
              <h1 className={`text-2xl  ${ubu.className} hover:text-[#6F5507] m-4`}>Event Planning & Coordination</h1>
              <p className={`text-[15px] m-4 text-gray-900`}>Provides end-to-end planning for various events, including corporate meetings, weddings, college fests, and private parties. Users can customize event plans, timelines, and requirements.</p>
            </div>
            <div className="h-[30vh] md:h-[50vh] m-3 shadow-2xl">
              <h1 className={`text-2xl  ${ubu.className} hover:text-[#6F5507] m-4`}>Custom Event Design & Themes</h1>
              <p className={`text-[15px] m-4 text-gray-900`}>Offers personalized event themes, décor suggestions, and digital invitations to enhance the event experience.</p>
            </div>
          </div>
          <div className=" md:w-[50%] m-3 p-3 md:mt-30">
            <div className="h-[40vh] md:h-[50vh] m-3 shadow-2xl">
              <h1 className={`text-2xl  ${ubu.className} hover:text-[#6F5507] m-4`}>Venue & Vendor Booking</h1>
              <p className={`text-[15px] m-4 text-gray-900`}>Offers a directory of venues, caterers, photographers, decorators, and entertainers, allowing users to compare prices, check availability, and book services directly through the platform.</p>
            </div>
            <div className="h-[30vh] md:h-[50vh] m-3 shadow-2xl">
              <h1 className={`text-2xl  ${ubu.className} hover:text-[#6F5507] m-4`}>Logistics & On-Site Support </h1>
              <p className={`text-[15px] m-4 text-gray-900`}>Assists in handling transportation, stage setup, lighting, sound systems, and security arrangements for events of any scale, ensuring smooth execution.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
