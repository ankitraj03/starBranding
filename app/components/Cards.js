"use client";
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Cards() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollSpeed = 2;
        let direction = 1;

        const scroll = () => {
            if (scrollContainer) {
                scrollContainer.scrollLeft += scrollSpeed * direction;


                if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                    scrollContainer.scrollLeft = 0;
                }
            }
        };

        const interval = setInterval(scroll, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div 
            ref={scrollRef} 
            className="overflow-x-scroll flex px-4 py-2 m-5 scrollbar-hide "
            style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
        >
            <div className="relative m-2 flex-shrink-0 w-[110%] sm:w-[100%] md:w-[95%] h-[30vh] md:h-[80vh] ">
                <Image 
                    src="/deco3.jpg" 
                    alt="background" 
                    priority 
                    fill 
                    style={{ objectFit: "cover" }} 
                    className='brightness-50 rounded-lg'
                    
                />
                <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
                    <h1 className="text-white text-md md:text-5xl font-bold">"Turning moments into memories"</h1>
                </div>
            </div>

            <div className="relative m-2 flex-shrink-0 w-[110%] sm:w-[100%] md:w-[95%] h-[30vh] md:h-[80vh]">
                <Image 
                    src="/deco.jpg" 
                    alt="background" 
                    priority 
                    fill 
                    style={{ objectFit: "cover" }} 
                    className='brightness-50 rounded-lg'

                />
                <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
                    <h1 className="text-white text-md md:text-5xl font-bold">"Crafting unforgettable experiences."</h1>
                </div>
            </div>

            <div className="relative m-2 flex-shrink-0 w-[110%] sm:w-[100%] md:w-[95%] h-[30vh] md:h-[80vh]">
                <Image 
                    src="/deco2.jpg" 
                    alt="background" 
                    priority 
                    fill 
                    style={{ objectFit: "cover" }} 
                    className='brightness-50 rounded-lg'

                />
                <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
                    <h1 className="text-white text-md md:text-5xl font-bold">"Making moments that matter."</h1>
                </div>
            </div>
        </div>
    );
}
