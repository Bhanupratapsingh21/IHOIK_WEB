export default function OurStory() {
    return (
        <section
            id="our-story"
            aria-labelledby="our-story-title"
            className="relative mx-auto w-full max-w-5xl px-4 py-16 md:py-24"
        >
            <div className="grid items-center gap-10 md:grid-cols-2">
                {/* Left: stacked heading + CTA */}
                <div className="order-2 md:order-1">
                    <h2
                        id="our-story-title"
                        className="font-sans text-6xl font-extrabold leading-[0.85] text-white sm:text-7xl md:text-8xl"
                    >
                        {"OUR"}
                        {"\n"}
                        <span className="block">STORY</span>
                    </h2>

                    <div className="mt-8">
                        <a
                            href="/about"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 bg-yellow-400 font-semibold text-primary-white transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                            Read More
                            <span
                                aria-hidden="true"
                                className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-background text-primary"
                            >
                                →
                            </span>
                        </a>
                    </div>
                </div>

                {/* Right: image */}
                <div className="order-1 md:order-2">
                    <div className="relative mx-auto w-full max-w-md">
                        <img
                            src="/images/our-story.png"
                            alt="Friends sitting together and smiling"
                            className="block w-full rounded-xl border border-border object-cover grayscale"
                        />
                        {/* subtle outline behind image */}
                        <div className="pointer-events-none absolute -inset-3 -z-10 rounded-2xl ring-1 ring-border/40" />
                    </div>
                </div>
            </div>
        </section>
    )
}
