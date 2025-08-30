import { FiBookOpen, FiUsers, FiHeart, FiSmile, FiCalendar, FiMusic } from "react-icons/fi";
import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Academic Support",
    description: "Guidance and resources to help Kota students conquer their studies with confidence and clarity.",
    bullets: [
      {
        title: "Study Tips & Tricks",
        description: "Helpful techniques and strategies shared by top Kota students.",
        icon: <FiBookOpen size={26} />,
      },
      {
        title: "Peer Discussion Groups",
        description: "Connect and learn collaboratively through student-led discussions.",
        icon: <FiUsers size={26} />,
      },
      {
        title: "Exam Preparation Plans",
        description: "Structured plans tailored to ace NEET, JEE, and other competitive exams.",
        icon: <FiCalendar size={26} />,
      },
    ],
    imageSrc: "/images/kota-students-study.jpg", // Replace with relevant social/community image URL
  },
  {
    title: "Emotional Well-being",
    description: "Support for mental health and strong student networks to combat homesickness and stress.",
    bullets: [
      {
        title: "Counseling & Advice",
        description: "Access to mental health resources and expert advice.",
        icon: <FiHeart size={26} />,
      },
      {
        title: "Community Events",
        description: "Cultural festivals, sports, and fun activities to relax and connect.",
        icon: <FiMusic size={26} />,
      },
      {
        title: "Inspirational Stories",
        description: "Real-life student journeys to motivate and uplift.",
        icon: <FiSmile size={26} />,
      },
    ],
    imageSrc: "/images/kota-community-event.jpg", // Replace with relevant social/community image URL
  },
  {
    title: "Student Empowerment",
    description: "Encouraging active participation, leadership, and shared experiences across Kota.",
    bullets: [
      {
        title: "Volunteer Programs",
        description: "Opportunities to contribute to local community and causes.",
        icon: <FiUsers size={26} />,
      },
      {
        title: "Skill-Building Workshops",
        description: "Workshops to enhance soft skills and personal growth.",
        icon: <FiBookOpen size={26} />,
      },
      {
        title: "Student Spotlights",
        description: "Recognizing achievements and inspiring others through stories.",
        icon: <FiHeart size={26} />,
      },
    ],
    imageSrc: "/images/kota-student-spotlight.jpg", // Replace with relevant social/community image URL
  },
];
