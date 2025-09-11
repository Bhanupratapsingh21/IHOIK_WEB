import Link from 'next/link';
import React from 'react';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';
import { Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#F7C948] text-black py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="flex flex-col">
                        <p className="text-2xl font-bold mb-2">Ihoik Media</p>
                        <p className="text-[#7A1C1C] mb-4"></p>
                        <div className="flex space-x-4">
                            <Link
                                href="https://www.instagram.com/ithappensinkota/"
                                className="text-black hover:text-[#7A1C1C] transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://www.youtube.com/@ihoikmedia"
                                className="text-black hover:text-[#7A1C1C] transition-colors"
                                aria-label="YouTube"
                            >
                                <Youtube className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerDetails.quickLinks.map(link => (
                                <li key={link.text}>
                                    <Link
                                        href={link.url}
                                        className="text-black hover:text-[#7A1C1C] transition-colors"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <div className="space-y-2">
                            {footerDetails.email && (
                                <a
                                    href={`mailto:${footerDetails.email}`}
                                    className="block text-black hover:text-[#7A1C1C] transition-colors"
                                >
                                    Email: {footerDetails.email}
                                </a>
                            )}

                            {footerDetails.telephone && (
                                <a
                                    href={`tel:${footerDetails.telephone}`}
                                    className="block text-black hover:text-[#7A1C1C] transition-colors"
                                >
                                    Phone: {footerDetails.telephone}
                                </a>
                            )}

                            {footerDetails.socials && (
                                <div className="mt-4 flex items-center gap-4">
                                    {Object.keys(footerDetails.socials).map(platformName => {
                                        const url = footerDetails.socials[platformName];
                                        if (platformName && url) {
                                            return (
                                                <Link
                                                    href={url}
                                                    key={platformName}
                                                    aria-label={platformName}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-black hover:text-[#7A1C1C] transition-colors"
                                                >
                                                    {getPlatformIconByName(platformName)}
                                                </Link>
                                            );
                                        }
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-[#F7C948]/30 pt-8 text-center">
                    <p className="text-[#7A1C1C]">
                        Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
                    </p>
                    <p className="text-sm mt-2 text-[#7A1C1C]">
                        Made with <span className="text-[#7A1C1C]">♥</span> by{' '}
                        <a
                            href="https://ihioik.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#7A1C1C] transition-colors"
                        >
                            ihoik Media Team
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;