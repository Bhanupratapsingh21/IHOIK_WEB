import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Ankit Sharma',
        role: 'JEE Aspirant, Kota',
        message: `Being part of ${siteDetails.siteName} has helped me stay motivated during the toughest days of coaching. The study tips and student stories are truly relatable and inspiring.`,
    },
    {
        name: 'Neha Gupta',
        role: 'NEET Candidate, Kota',
        message: `I found great support and friends through ${siteDetails.siteName}. It’s a comforting community where we share not just academic struggles but also our homesickness and dreams.`,
    },
    {
        name: 'Rohit Verma',
        role: 'Kota Student',
        message: `Thanks to ${siteDetails.siteName}, I learned how to balance study pressure with extracurriculars. Their events and counseling resources made a real difference for my mental health.`,
    },
];
