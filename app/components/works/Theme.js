"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from 'next/image';
import { useState } from "react";

export default function Theme({ visibility, setVisibility }) {
    const [image, setImage] = useState(1);
    const count = 6;

    return (
        <div className={`${visibility ? "fixed" : "hidden"} h-full inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-md p-4`}>
            <div className="relative w-full max-w-3xl h-[60vh] sm:h-[80vh] flex justify-center items-center">
                <Image
                    src={`/theme${image}.jpg`}
                    alt={`Wedding Image ${image}`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                />
            </div>

            <div className="flex justify-between items-center w-full max-w-sm mt-4">
                <button
                    className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700"
                    onClick={() => setImage(image > 1 ? image - 1 : count)}
                >
                    <ChevronLeft size={40} className="text-white" />
                </button>

                <button
                    className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700"
                    onClick={() => setVisibility(false)}
                >
                    <X size={40} className="text-white" />
                </button>

                <button
                    className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700"
                    onClick={() => setImage(image < count ? image + 1 : 1)}
                >
                    <ChevronRight size={40} className="text-white" />
                </button>
            </div>
        </div>
    );
}
