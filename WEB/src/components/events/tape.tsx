"use client"
import Image from "next/image";
import Tape from '@/components/tape.svg';
import { motion } from "framer-motion";

import { useState } from 'react';

export default function Tapepage() {
    const [isHovered, setIsHovered] = useState(false);

    return (

        <div className="">
            <motion.div
                className="order-1 lg:order-2 flex justify-center lg:justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
            >
                <div className="relative w-max ">
                    <Tape
                        className="w-max md:hidden ml-8 overflow-hidden" 
                    />


                </div>
            </motion.div>
        </div>
    );
}