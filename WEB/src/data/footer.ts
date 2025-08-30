import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Building a supportive community for Kota students with study tips, events, and mental health resources.",
    quickLinks: [
        {
            text: "Home",
            url: "/",
        },
        {
            text: "About Us",
            url: "/about",
        },
        {
            text: "Our Mission",
            url: "/mission",
        },
        {
            text: "Blogs",
            url: "/blogs",
        },
        {
            text: "Articles",
            url: "/articles",
        },
    ],
    email: 'contact@ihioik.com',
    telephone: '+91 98765 43210',
    socials: {
        twitter: 'https://twitter.com/ithappensinkota',
        facebook: 'https://facebook.com/ithappensinkota',
        youtube: 'https://youtube.com/ithappensinkota',
        linkedin: 'https://www.linkedin.com/company/ithappensinkota',
        instagram: 'https://www.instagram.com/ithappensinkota',
    }
}
