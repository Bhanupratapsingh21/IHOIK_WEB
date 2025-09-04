import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `What is ${siteDetails.siteName}?`,
        answer: `${siteDetails.siteName} is a storytelling media platform that captures real student life in Kota — from academic pressure and friendships to self-discovery. We create films, reels, and content that students can relate to.`,
    },
    {
        question: `Is ${siteDetails.siteName} free to watch?`,
        answer: `Yes! All our stories and episodes on YouTube and Instagram are free to access. Our goal is to inspire and support students without charging anything.`,
    },
    {
        question: `How can I engage with ${siteDetails.siteName}?`,
        answer: `You can watch our episodes on YouTube, follow us on Instagram, and share our content with friends. Students can also participate in discussions, events, and campaigns we run online.`,
    },
    {
        question: `Can I share my own story with ${siteDetails.siteName}?`,
        answer: `Absolutely! We welcome students to send in their experiences, challenges, or creative ideas. Some stories even get featured in our content to inspire others.`,
    },
    {
        question: `Does ${siteDetails.siteName} talk about mental health?`,
        answer: `Yes, mental health is one of our core themes. Through stories, awareness videos, and collaborations, we highlight the emotional struggles of Kota students and encourage self-care and support.`,
    },
];
