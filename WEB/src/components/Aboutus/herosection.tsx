import Image from "next/image"

export default function Herosection() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
                {/* Top Star Icon */}
                <div className="absolute top-8 right-8">
                    <Star className="w-8 h-8 text-white" />
                </div>

                {/* Main Content */}
                <div className="max-w-4xl w-full">
                    {/* Heading */}
                    <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-12 text-left">
                        It Happens Only In Kota
                        <br />
                        (IHOIK) is more than just
                        <br />a content platform.
                    </h1>

                    {/* Image Gallery Section */}
                    <div className="relative mb-16 h-72 md:h-96">
                        <div className="flex items-center justify-center gap-4 relative h-full">
                            {/* Left Image */}
                            <div className="relative w-1/2 h-full">
                                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
                                    <Star className="w-12 h-12 md:w-16 md:h-16 text-white" />
                                </div>
                                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-gray-700">
                                    <Image
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6mCH5jfl0Z6OyKi8QYDV53m22RmHBt.png"
                                        alt="Library study space"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="relative w-1/2 h-full">
                                <div className="absolute right-0 bottom-0 z-10 transform translate-x-6 translate-y-6">
                                    <Star className="w-12 h-12 md:w-16 md:h-16 text-white" />
                                </div>
                                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-gray-700">
                                    <Image
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6mCH5jfl0Z6OyKi8QYDV53m22RmHBt.png"
                                        alt="People on bicycles in front of yellow building"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <p className="font-mono text-lg md:text-xl text-white text-left leading-relaxed">
                        It's a movement powered by the voices of
                        <br />
                        students who live, learn, and hustle in
                        <br />
                        India's coaching capital.
                    </p>
                </div>
            </div>
        </main>
    )
}

function Star({ className }: { className: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
    )
}
