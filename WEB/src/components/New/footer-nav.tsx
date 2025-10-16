"use client";
import { ArrowDown } from "lucide-react"
import type React from "react"
import { motion } from "framer-motion"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

const buttonVariants = {
  initial: { 
    scale: 1,
    border: "1px solid color-mix(in oklch, var(--color-foreground), transparent 60%)"
  },
  hover: { 
    scale: 1.05,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid color-mix(in oklch, var(--color-foreground), transparent 20%)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  }
}

const arrowVariants = {
  initial: { y: 0 },
  hover: { 
    y: [0, -4, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  tap: { y: 0 }
}

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.li 
      className="text-xs sm:text-sm text-muted-foreground/70 hover:text-foreground transition-colors cursor-pointer relative group"
      variants={itemVariants}
      whileHover={{ 
        scale: 1.05,
        color: "var(--color-foreground)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {/* Animated underline */}
      <motion.div 
        className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full"
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.li>
  )
}

export default function FooterNav() {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    })
  }

  return (
    <motion.footer 
      className="mt-auto w-full md:hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="mx-auto w-full max-w-[min(92vw,720px)] pb-8">
        {/* Links row */}
        <motion.nav 
          aria-label="Footer navigation" 
          className="mb-6"
          variants={containerVariants}
        >
          <motion.ul 
            className="flex text-white flex-wrap items-center justify-center sm:justify-between gap-3 sm:gap-4"
            variants={containerVariants}
          >
            <NavItem>We care</NavItem>
            <NavItem>Advertise</NavItem>
            <NavItem>About us</NavItem>
            <NavItem>Production</NavItem>
            <NavItem>Contact us</NavItem>
          </motion.ul>
        </motion.nav>

        {/* Scroll more button */}
        <motion.div 
          className="flex  items-center justify-center"
          variants={itemVariants}
        >
          <motion.button
            type="button"
            aria-label="Scroll for more content"
            className="inline-flex border-2 items-center gap-3 text-white border-white   rounded-full px-4 py-2 text-xs sm:text-sm backdrop-blur-sm"
            style={{
              color: "var(--color-foreground)",
              border: "1px solid color-#fff",
              background: "transparent",
            }}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onClick={handleScrollToBottom}
          >
            <span className="text-white">scroll more</span>
            <motion.span
              variants={arrowVariants}
              animate="initial"
              whileHover="hover"
            >
              <ArrowDown color="white" size={14}/>
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  )
}