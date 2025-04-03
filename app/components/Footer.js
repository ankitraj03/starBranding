import Link from "next/link";
import { FaPhone, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8" id="Footer">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-xl font-bold text-white">💫Star Branding Solution</h2>
                        <p className="mt-2 text-sm">
                            Making Event Planning as Easy as Pie.
                        </p>
                        <span className="flex items-center gap-2 text-gray-300 mt-4">
                            <FaMapMarkerAlt size={20} className="text-white" />
                            <span className="font-medium">Bypass Sipara Road, Near Aditya Vision, Patna, Bihar</span>
                        </span>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                        <div className="flex space-x-4 mt-2">
                            <Link href="https://www.instagram.com/starbrandingsolution/" className="hover:text-white"><FaInstagram size={20} /></Link>
                        </div>
                        <span className="flex items-center gap-2 text-gray-300 hover:text-white mt-4">
                            <FaPhone size={20} className="text-white" />
                            <span className="font-medium">8226877736, 8434739740</span>
                        </span>
                        <span className="flex items-center gap-2 text-gray-300 hover:text-white mt-4">
                            <FaEnvelope size={20} className="text-white" />
                            <span className="font-medium">starbrandingsolution.com</span>
                        </span>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                    &copy; {new Date().getFullYear()} Star Branding Solution. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
