"use client"
import Image from "next/image";
import Tape from '@/components/tape.svg';
import { motion } from "framer-motion";

import { useState } from 'react';

import HeroSection from "@/components/events/Hero";
import Tapepage from "@/components/events/tape";
import Whowillbethere from "@/components/events/whowillthere";
import Themovie from "@/components/events/themovie";
import { CountdownTimer } from "@/components/events/Clock";
import { ItineraryAccordion } from "@/components/events/itinerary-accordion";
import { SponsorsSection } from "@/components/events/sponsors-section";
import AdvertiseWithUs from "@/components/banifitCard";
import { ContactStats } from "@/components/events/contact-stats";
import { PastEvents } from "@/components/events/past-events";


export default function EventsPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <HeroSection />
      <Tapepage />
      <Whowillbethere />
      <Themovie />
      <CountdownTimer />
      <ItineraryAccordion />
      <SponsorsSection />
      <AdvertiseWithUs/>
      <ContactStats/>
      <PastEvents/>
    </>
  );
}