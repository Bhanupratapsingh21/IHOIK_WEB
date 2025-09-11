'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import Image from 'next/image';
import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
  { text: "Home", url: "/" },
  { text: "About Us", url: "/about" },
  { text: "Our Mission", url: "/mission" },
  { text: "Blogs", url: "/blogs" },
  { text: "News", url: "/news" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled
          ? 'md:bg-white/90 backdrop-blur-md shadow-md rounded-full border border-gray-100'
          : 'md:bg-white/80 backdrop-blur-sm shadow-sm rounded-full border border-gray-100'
      }`}
      style={{ width: '95%', maxWidth: '1200px' }}
    >
      <Container className="!px-0">
        <nav className="mx-auto flex justify-between items-center py-2 px-5 md:py-3">
          {/* Left Logo */}
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/djwzwq4cu/image/upload/v1756566813/Ihoik_Media_logo_vdfkgo.png"
              alt="IHOIK Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            {menuItems.map(item => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-gray-700 hover:text-[#F7C948] transition-colors font-semibold"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-auto space-x-2">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-[#F7C948] text-gray-800 focus:outline-none rounded-full w-10 h-10 flex items-center justify-center shadow-sm"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <HiOutlineXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-4"
      >
        <div
          id="mobile-menu"
          className="md:hidden bg-white/90 backdrop-blur-md shadow-md rounded-2xl mx-4 mt-2 border border-gray-100"
        >
          <div className="flex justify-center py-4 border-b border-gray-100">
            <div className="relative w-10 h-10">
              <Image
                src="https://res.cloudinary.com/djwzwq4cu/image/upload/v1756566813/Ihoik_Media_logo_vdfkgo.png"
                alt="IHOIK Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <ul className="flex flex-col space-y-1 pt-2 pb-4 px-4 text-base font-medium">
            {menuItems.map(item => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-gray-700 hover:text-[#F7C948] hover:bg-gray-50/50 block py-3 px-4 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
