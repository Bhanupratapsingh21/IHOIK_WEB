"use client";
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { LayoutTextFlip } from "../ui/layout-text-flip";

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
      className="w-full mx-auto py-8 md:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12 max-w-7xl"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Text Content - Left side on desktop, bottom on mobile */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col md:items-start md:text-left text-center"
        variants={textVariants}
      >
        <div className="w-full md:text-left  text-center">
          <LayoutTextFlip
            text="We work to boost"
            words={["Future", "Hope", "Education"]}
          />
        </div>

      </motion.div>

      {/* Image Content - Right side on desktop, top on mobile - Made smaller */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-end"
        variants={imageVariants}
        whileHover={{
          scale: 1.02,
          transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
      >
        <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">
          <motion.img
            src="https://images.unsplash.com/photo-1760104611482-ad5888098365?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600"
            alt="Person reading a book in a library"
            className="w-full aspect-square object-cover rounded-2xl lg:rounded-3xl grayscale shadow-2xl hover:grayscale-0 transition-all duration-700 cursor-pointer"
            sizes="(min-width: 1024px) 448px, (min-width: 768px) 336px, 300px"
            whileHover={{
              boxShadow: "0 25px 60px rgba(0,0,0,0.5)"
            }}
          />

          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl lg:rounded-3xl border-2 pointer-events-none"
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
        </div>
      </motion.div>
    </motion.section>
  )
}