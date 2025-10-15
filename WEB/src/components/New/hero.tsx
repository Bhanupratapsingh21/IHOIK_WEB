"use client";
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.6
      }
    }
  }

  const highlightVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: 90
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.5,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  }

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <motion.section
      ref={ref}
      className="w-full mx-auto md:pt-12 pt-44 pb-10 flex flex-col items-center gap-6 sm:gap-7 max-w-[min(92vw,720px)]"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Image with enhanced animations */}
      <motion.div
        className="relative"
        variants={imageVariants}
        whileHover={{
          scale: 1.02,
          transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1760104611482-ad5888098365?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600"
          alt="Person reading a book in a library"
          className="w-full max-w-[560px] aspect-[4/3]  object-cover rounded-2xl sm:rounded-[28px] md:rounded-[32px] grayscale shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:grayscale-0 transition-all duration-700 cursor-pointer"
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 480px, 90vw"
          whileHover={{
            boxShadow: "0 25px 60px rgba(0,0,0,0.5)"
          }}
        />

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl sm:rounded-[28px] md:rounded-[32px] border-2 pointer-events-none"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(255,255,255,0.1)",
              "0 0 30px rgba(255,255,255,0.2)",
              "0 0 20px rgba(255,255,255,0.1)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Heading with enhanced animations */}
      <motion.h1
        className="text-center text-white font-semibold text-4xl sm:text-3xl md:text-5xl lg:text-6xl  text-pretty px-4"
        variants={textVariants}
      >
        {"We work to boost"}{" "}
        <motion.span
          className="inline-block rounded-full px-2.5 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 shadow-[0_4px_0_rgba(0,0,0,0.2)] relative"
          style={{
            backgroundColor: "var(--brand-yellow)",
            color: "var(--on-brand)",
          }}
          variants={highlightVariants}
          whileHover="hover"
          animate={floatingAnimation}
        >
          {"future"}

        
        </motion.span>
      </motion.h1>
    </motion.section>
  )
}