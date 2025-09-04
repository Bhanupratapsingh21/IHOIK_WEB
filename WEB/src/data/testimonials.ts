import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: "Ritika Singh",
        role: "NEET Aspirant, Kota",
        message: `${siteDetails.siteName} shows the side of Kota that no coaching brochure talks about. Watching their stories made me feel understood in my lowest days of preparation.`,
    },
    {
        name: "Arjun Mehta",
        role: "JEE Dropper, Kota",
        message: `The films from ${siteDetails.siteName} are so real that it feels like they are telling my own story. It gave me courage to face the pressure and reminded me that I’m not alone.`,
    },
    {
        name: "Pooja Sharma",
        role: "Medical Student",
        message: `Ihoik Media captures the emotions of students beautifully — friendship, failures, and small victories. It’s more than content, it’s therapy for students like us.`,
    },
    {
        name: "Kabir Khan",
        role: "Former Kota Student",
        message: `Watching ${siteDetails.siteName} was like reliving my own Kota journey. I wish such honest storytelling existed when I was preparing — it would have helped me handle pressure better.`,
    },
    {
        name: "Sneha Verma",
        role: "Parent of Aspirant",
        message: `Through ${siteDetails.siteName}, I understood what my child goes through in Kota. It opened my eyes to the emotional struggles behind academics.`,
    },
];
