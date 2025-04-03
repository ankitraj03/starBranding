"use client";
import Image from 'next/image';
import Wedding from './works/Wedding';
import { useState } from 'react';
import Theme from './works/Theme';
import Govt from './works/Govt';
import College from './works/College';
import Corporate from './works/Corporate';

export default function Work() {
    const [visibility, setVisibility]= useState(false);
    const [visibility2, setVisibility2]= useState(false);
    const [visibility3, setVisibility3]= useState(false);
    const [visibility4, setVisibility4]= useState(false);
    const [visibility5, setVisibility5]= useState(false);
    return (
        <div className="m-5 p-5 bg-[#ffffff] text-black" id='Works'>
           <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-center">
            ❤️ What We Delivered
          </h2>
          <h3 className="text-xl md:text-3xl font-bold text-amber-500 mb-8 text-center">
            Our Works
          </h3>

            <div className="relative h-[30vh] md:h-[80vh] m-3 p-3 rounded overflow-hidden group cursor-pointer " onClick={()=>setVisibility(!visibility)}>
                <Image
                    src="/wedding.jpg"
                    alt="background"
                    fill
                    className="transition-all duration-500 ease-in-out 
               brightness-50 md:brightness-100 group-hover:blur-[2px] group-hover:brightness-75"
                    style={{ objectFit: "cover" }}
                />


                <div className="absolute inset-0 flex flex-col justify-center p-5 text-white 
                md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" >
                    <h2 className="text-2xl font-bold">Wedding</h2>
                    <button className="mt-3 text-sm font-semibold flex items-center gap-2 group-hover:underline">
                        VIEW <span>➤</span>
                    </button>
                </div>
            </div>

            <div className="md:flex md:justify-center">
     
                <div className="relative h-[30vh] md:w-[60%] md:h-[80vh] m-3 p-3 rounded group overflow-hidden cursor-pointer" onClick={()=>setVisibility2(!visibility2)}>
                    <Image
                        src="/tdecor.jpg"
                        alt="background"
                        fill
                        className="transition-all duration-500 ease-in-out 
                       brightness-50 md:brightness-100 group-hover:blur-[2px] group-hover:brightness-75"
                        style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-5 pl-5 text-white 
                        md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out text-left">
                        <h2 className="text-2xl font-bold">Theme Decoration</h2>
                        <button className="mt-3 text-sm font-semibold flex items-center gap-2 group-hover:underline">
                            VIEW<span>➤</span>
                        </button>
                    </div>
                </div>

                <div className="relative h-[30vh] md:w-[40%] md:h-[80vh] m-3 p-3 rounded group overflow-hidden cursor-pointer" onClick={()=>setVisibility3(!visibility3)}>
                    <Image
                        src="/clg1.jpg"
                        alt="background"
                        fill
                        className="transition-all duration-500 ease-in-out 
                       brightness-50 md:brightness-100 group-hover:blur-[2px] group-hover:brightness-75"
                        style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-5 pl-5 text-white 
                        md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out text-left">
                        <h2 className="text-2xl font-bold">College Fest</h2>
                        <button className="mt-3 text-sm font-semibold flex items-center gap-2 group-hover:underline">
                            VIEW<span>➤</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="md:flex md:justify-center">
     
                <div className="relative h-[30vh] md:w-[45%] md:h-[80vh] m-3 p-3 rounded group overflow-hidden cursor-pointer"  onClick={()=>setVisibility4(!visibility4)}>
                    <Image
                        src="/govt8.jpg"
                        alt="background"
                        fill
                        className="transition-all duration-500 ease-in-out 
                       brightness-50 md:brightness-100 group-hover:blur-[2px] group-hover:brightness-75"
                        style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-5 pl-5 text-white 
                        md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out text-left">
                        <h2 className="text-2xl font-bold">Government Events</h2>
                        <button className="mt-3 text-sm font-semibold flex items-center gap-2 group-hover:underline">
                            VIEW<span>➤</span>
                        </button>
                    </div>
                </div>

                <div className="relative h-[30vh] md:w-[55%] md:h-[80vh] m-3 p-3 rounded group overflow-hidden cursor-pointer" onClick={()=>setVisibility5(!visibility5)}>
                    <Image
                        src="/corp6.jpg"
                        alt="background"
                        fill
                        className="transition-all duration-500 ease-in-out 
                       brightness-50 md:brightness-100 group-hover:blur-[2px] group-hover:brightness-75"
                        style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-5 pl-5 text-white 
                        md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out text-left">
                        <h2 className="text-2xl font-bold">Corporate Gathering</h2>
                        <button className="mt-3 text-sm font-semibold flex items-center gap-2 group-hover:underline">
                            VIEW<span>➤</span>
                        </button>
                    </div>
                </div>
            </div>

            <Wedding visibility={visibility} setVisibility={setVisibility} />
            <Theme visibility={visibility2} setVisibility={setVisibility2} />
            <Govt visibility={visibility4} setVisibility={setVisibility4}/>
            <College visibility={visibility3} setVisibility={setVisibility3}/>
            <Corporate visibility={visibility5} setVisibility={setVisibility5}/>

            
        </div>
    );
}
