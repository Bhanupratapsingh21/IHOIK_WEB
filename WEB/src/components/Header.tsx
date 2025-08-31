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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Listen to scroll and update scrolled state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${scrolled
        ? 'bg-[#F7C948]/70 backdrop-blur-md shadow-md'  // Glassy background when scrolled
        : 'bg-transparent'
        }`}
    >
      <Container className="!px-0">
        <nav className="mx-auto flex justify-between items-center py-2 px-5 md:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">

            <span className="manrope font-sans  text-xl font-semibold text-foreground cursor-pointer">
              IHOIK
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg font-medium">
            {menuItems.map(item => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}

          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-primary text-white focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="md:hidden bg-[#F7C948] shadow-lg">
          <ul className="flex flex-col space-y-4 pt-2 pb-6 px-6 text-base font-medium">
            {menuItems.map(item => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-foreground hover:text-primary block"
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
