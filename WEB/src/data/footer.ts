import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "IHOIK Media – a creative platform supporting Kota students with authentic stories, study tips, events, and mental health resources.",
    quickLinks: [
        { text: "Home", url: "/" },
        { text: "About Us", url: "/about" },
        { text: "Our Mission", url: "/mission" },
        { text: "Blogs", url: "/blogs" },
        { text: "Community", url: "/community" },
    ],
    email: "contact@ihoikmedia.com",
    telephone: "+91 98765 43210",
    socials: {
        twitter: "https://twitter.com/ihoikmedia",
        facebook: "https://facebook.com/ihoikmedia",
        youtube: "https://youtube.com/@ihoikmedia",
        linkedin: "https://www.linkedin.com/company/ihoikmedia",
        instagram: "https://www.instagram.com/ihoikmedia/",
    },
};
