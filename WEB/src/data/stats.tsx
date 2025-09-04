import { BsPeopleFill, BsStarFill } from "react-icons/bs";
import { PiGraduationCapFill } from "react-icons/pi";
import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "1M+",
        icon: <BsPeopleFill size={34} className="text-blue-500" />,
        description:
            "Students and aspirants reached through Ihoik Media’s films, reels, and storytelling around Kota life.",
    },
    {
        title: "4.8/5",
        icon: <BsStarFill size={34} className="text-yellow-500" />,
        description:
            "Average audience rating across YouTube & Instagram, showing the love and relatability of the stories.",
    },
    {
        title: "50+",
        icon: <PiGraduationCapFill size={34} className="text-green-600" />,
        description:
            "Real student stories and episodes produced, highlighting struggles, friendships, and lessons beyond exams.",
    },
];
