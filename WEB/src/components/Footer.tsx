import Link from 'next/link';
import React from 'react';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';
import { Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#7A1C1C] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="flex flex-col">
                        <p className="text-2xl font-bold mb-2">It Happens In Kota</p>
                        <p className="text-[#F7C948] mb-4">A community by students, for students</p>
                        <div className="flex space-x-4">
                            <Link
                                href="https://www.instagram.com/ithappensinkota/"
                                className="text-white hover:text-[#F7C948] transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://www.youtube.com/@ihoikmedia"
                                className="text-white hover:text-[#F7C948] transition-colors"
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
                                        className="text-white/80 hover:text-[#F7C948] transition-colors"
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
                                    className="block text-white/80 hover:text-[#F7C948] transition-colors"
                                >
                                    Email: {footerDetails.email}
                                </a>
                            )}

                            {footerDetails.telephone && (
                                <a
                                    href={`tel:${footerDetails.telephone}`}
                                    className="block text-white/80 hover:text-[#F7C948] transition-colors"
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
                                                    className="text-white/80 hover:text-[#F7C948] transition-colors"
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
                    <p className="text-white/80">
                        Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
                    </p>
                    <p className="text-sm mt-2 text-white/60">
                        Made with <span className="text-[#F7C948]">♥</span> by{' '}
                        <a
                            href="https://ihioik.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#F7C948] transition-colors"
                        >
                            It Happens In Kota Team
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;