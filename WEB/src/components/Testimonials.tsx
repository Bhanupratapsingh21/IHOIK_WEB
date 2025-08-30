import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

const stringToColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = `hsl(${hash % 360}, 60%, 70%)`;
    return color;
};

const Testimonials: React.FC = () => {
    return (
        <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
            {testimonials.map((testimonial, index) => {
                const initials = testimonial.name
                    .split(" ")
                    .map(n => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase();
                const bgColor = stringToColor(testimonial.name);

                return (
                    <div key={index} className="">
                        <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
                            {testimonial.avatar ? (
                                <Image
                                    src={testimonial.avatar}
                                    alt={`${testimonial.name} avatar`}
                                    width={50}
                                    height={50}
                                    className="rounded-full shadow-md object-cover"
                                />
                            ) : (
                                <div
                                    className="flex items-center justify-center rounded-full shadow-md w-12 h-12 text-white font-semibold text-lg"
                                    style={{ backgroundColor: bgColor }}
                                    aria-label={testimonial.name}
                                >
                                    {initials}
                                </div>
                            )}
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-secondary">{testimonial.name}</h3>
                                <p className="text-sm text-foreground-accent">{testimonial.role}</p>
                            </div>
                        </div>
                        <p className="text-foreground-accent text-center lg:text-left">&quot;{testimonial.message}&quot;</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Testimonials;
