"use client";
import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";

// YouTube video data
const VIDEOS = [
  { youtubeId: "nTFZ4qIwEUQ", title: "Kota's Success Story" },
  { youtubeId: "ysf0iEP36n8", title: "Coaching Methodology" },
  { youtubeId: "_ArG-YSfjU8", title: "Client Transformation" },
  { youtubeId: "aWd0tGh4Q3k", title: "Mindset Mastery" },
  { youtubeId: "i1km7gB_zcg", title: "Goal Setting Strategies" },
  { youtubeId: "Eb-knD5JNLM", title: "Overcoming Challenges" },
  { youtubeId: "c2oybPgLH9Y", title: "Kota's Success Story" },
  { youtubeId: "XbkW5lHIhHA", title: "Coaching Methodology" },
  { youtubeId: "8ev1cFD66Mw", title: "Client Transformation" },
  { youtubeId: "2XvvWYN63kM", title: "Mindset Mastery" },
  { youtubeId: "Eb-knD5JNLM", title: "Overcoming Challenges" },
  { youtubeId: "c2oybPgLH9Y", title: "Kota's Success Story" },
  { youtubeId: "XbkW5lHIhHA", title: "Coaching Methodology" },
  { youtubeId: "8ev1cFD66Mw", title: "Client Transformation" },
  { youtubeId: "2XvvWYN63kM", title: "Mindset Mastery" },
];

export const HeroParallax = () => {
  const firstRow = VIDEOS.slice(0, 5);
  const secondRow = VIDEOS.slice(5, 10);
  const thirdRow = VIDEOS.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="z-20 relative"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((video) => (
            <VideoCard
              video={video}
              translate={translateX}
              key={video.youtubeId}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((video) => (
            <VideoCard
              video={video}
              translate={translateXReverse}
              key={video.youtubeId}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((video) => (
            <VideoCard
              video={video}
              translate={translateX}
              key={video.youtubeId}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-28 px-4 w-full left-0 top-0 z-30">
      <div className="flex flex-col items-start space-y-8 md:space-y-10 transition-all duration-1000 ease-out delay-500 opacity-100 translate-y-0">
        <div className="flex flex-col items-start w-full">
          <h1 className="text-start text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-2xl tracking-tight">
          Don't miss out <br /> our exclusive content.
          </h1>
          <p className="text-left text-lg md:text-xl text-white/90 max-w-xl drop-shadow-md mb-6">
            Because Kota is more than coaching — it's a journey.
          </p>
          <Link href={"/blogs"} className="mt-4 px-10 py-3 bg-yellow-300 hover:bg-yellow-200 text-black rounded-full font-semibold text-lg shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7A1C1C] focus:ring-offset-2">
            Explore Stories
          </Link>
        </div>
      </div >
    </div >
  );
};

export const VideoCard = ({
  video,
  translate,
}: {
  video: {
    youtubeId: string;
    title: string;
  };
  translate: MotionValue<number>;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const handleVideoClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={video.youtubeId}
      className="group/video h-96 w-[40rem] relative shrink-0"
    >
      <div
        className="block group-hover/video:shadow-2xl rounded-xl overflow-hidden cursor-pointer"
        onClick={handleVideoClick}
      >
        {isPlaying ? (
          <iframe
            ref={videoRef}
            className="object-cover object-left-top absolute h-full w-full inset-0"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&modestbranding=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
              className="object-cover object-left-top absolute h-full w-full inset-0"
              alt={video.title}
              onError={(e) => {
                e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <svg
                  className="w-8 h-8 text-white ml-1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        )}
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/video:opacity-80 bg-black pointer-events-none transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
};

export default HeroParallax;