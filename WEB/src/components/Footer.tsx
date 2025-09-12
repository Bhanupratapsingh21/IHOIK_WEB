import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Instagram, Youtube, Globe } from 'lucide-react';
import { footerDetails } from '@/data/footer';

const Footer: React.FC = () => {
    // Fallback data in case imported data is not available
    const quickLinks = [
        { text: "Home", url: "/" },
        { text: "Services", url: "#services" },
        { text: "Portfolio", url: "#portfolio" },
        { text: "About", url: "#about" },
        { text: "Contact", url: "#contact" }
    ];

    const services = [
        "Content Creation",
        "Social Media Management",
        "Photography",
        "Videography"
    ];

    return (
        <footer className="bg-[#1B1B1B] text-white py-12">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Image
                            src="https://res.cloudinary.com/djwzwq4cu/image/upload/v1756566813/Ihoik_Media_logo_vdfkgo.png"
                            alt="IHOIK Media Logo"
                            width={120}
                            height={40}
                            className="h-8 w-auto mb-4"
                        />
                        <p className="text-gray-400">Capturing Kota's hustle, heart and stories through creative media solutions.</p>
                    </div>



                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <ul className="space-y-2">
                                {footerDetails.quickLinks.map(link => (
                                    <li key={link.text}>
                                        <Link
                                            href={link.url}
                                            className=" text-gray-400 hover:text-gray-100 transition-colors"
                                        >
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4 mb-4">
                            <Link
                                href="https://www.instagram.com/ihoikmedia/"
                                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link
                                href="https://www.youtube.com/@ihoikmedia"
                                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                aria-label="YouTube"
                            >
                                <Youtube className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                aria-label="Website"
                            >
                                <Globe className="h-5 w-5" />
                            </Link>
                        </div>
                       
                        <div className="mt-2 flex">
                           
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} IHOIK Media. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;