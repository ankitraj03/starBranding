"use client";
import { useState } from "react";
import "../globals.css";
import { Menu, X } from "lucide-react";
import { Ubuntu } from "next/font/google";

const ubu = Ubuntu({ subsets: ["greek"], weight: ["700"] });

export default function Header() {
    const [isOpen, setisOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setisOpen(false); // Close mobile menu after clicking
    };

    return (
        <div className="bg-white flex justify-between m-2 p-4 border-b border-gray-300 rounded-lg">
            <div className="flex items-center gap-3">
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-16 h-auto brightness-110 hover:brightness-125 transition-all"
                />
                <h1 className={`text-xl font-semibold tracking-wide text-[#533506] ${ubu.className}`}>
                    Star Branding Solution
                </h1>
            </div>

            <button
                onClick={() => setisOpen(!isOpen)}
                className="md:hidden relative w-10 h-10 flex items-center justify-center"
            >
                <X className={`absolute w-6 h-6 transition-transform duration-600 ${isOpen ? "opacity-100 rotate-90" : "opacity-0 rotate-0"}`} />
                <Menu className={`absolute w-6 h-6 transition-transform duration-600 ${isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
            </button>


            <div className={`md:hidden w-[60%] flex flex-col text-black m-2 font-mono cursor-pointer transition-all ${isOpen ? "block" : "hidden"}`}>
                <div onClick={() => scrollToSection("home")}>Home</div>
                <div onClick={() => scrollToSection("Infosection")}>About Us</div>
                <div onClick={() => scrollToSection("Services")}>Our Services</div>
                <div onClick={() => scrollToSection("Works")}>Our Work</div>
                <div onClick={() => scrollToSection("Footer")}>Contact Us</div>
            </div>


            <div className="hidden md:flex w-[60%] justify-evenly m-2 font-mono cursor-pointer hover:underline-offset-1 text-black">
                <div onClick={() => scrollToSection("home")} className="transition-all duration-300 hover:text-[#DDA853]">Home</div>
                <div onClick={() => scrollToSection("Infosection")} className="transition-all duration-300 hover:text-[#DDA853]">About Us</div>
                <div onClick={() => scrollToSection("Services")} className="transition-all duration-300 hover:text-[#DDA853]">Our Services</div>
                <div onClick={() => scrollToSection("Works")} className="transition-all duration-300 hover:text-[#DDA853]">Our Work</div>
                <div onClick={() => scrollToSection("Footer")} className="transition-all duration-300 hover:text-[#DDA853]">Contact Us</div>
            </div>
        </div>
    );
}
