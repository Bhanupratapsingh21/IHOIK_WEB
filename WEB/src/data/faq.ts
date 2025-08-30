import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `What is ${siteDetails.siteName}?`,
        answer:
            `${siteDetails.siteName} is a vibrant community platform created by and for Kota students to share study tips, mental health resources, and support throughout their academic journey.`,
    },
    {
        question: `Is ${siteDetails.siteName} free to use?`,
        answer: `Yes! Our platform is completely free, aiming to build a strong, supportive student community without any cost.`,
    },
    {
        question: `How can I join ${siteDetails.siteName}'s community?`,
        answer:
            `You can join by signing up on our website, following our social media channels, and participating in our discussion forums and events.`,
    },
    {
        question: `Can I contribute my own stories or study tips?`,
        answer: `Absolutely! We encourage students to share their experiences, tips, and motivational stories to help others in the Kota student community.`,
    },
    {
        question: `Does ${siteDetails.siteName} offer mental health support?`,
        answer:
            `Yes, we provide access to counseling resources, peer support groups, and organize activities focusing on emotional well-being to help students cope with stress and homesickness.`,
    },
];
