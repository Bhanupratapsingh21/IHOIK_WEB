import { BsPeopleFill, BsStarFill } from "react-icons/bs";
import { PiGraduationCapFill } from "react-icons/pi";
import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "150,000+",
        icon: <BsPeopleFill size={34} className="text-blue-500" />,
        description: "Students supported through community events, forums, and study groups across Kota.",
    },
    {
        title: "4.9",
        icon: <BsStarFill size={34} className="text-yellow-500" />,
        description: "Average rating from student feedback highlighting the platform’s positive impact.",
    },
    {
        title: "150+",
        icon: <PiGraduationCapFill size={34} className="text-green-600" />,
        description: "Academic and well-being workshops conducted to empower students and build skills.",
    },
];
