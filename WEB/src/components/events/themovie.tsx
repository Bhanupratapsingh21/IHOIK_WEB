import Image from 'next/image'

export const metadata = {
    title: 'The Movie of IHOIK',
    description: 'A cinematic movie poster experience',
}

export default function Themovie() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
            {/* Top decorative divider */}
            <div className="w-32 h-px bg-white/30 mb-8"></div>

            {/* Title */}
            <h1 className="text-2xl font-mono font-bold  bg-white text-black px-6 py-2 tracking-widest mb-6">
                THE MOVIE OF IHOIK
            </h1>

            {/* Top line decoration */}
            <div className="w-24 flex flex-col items-center gap-1 mb-12">
                <div className="w-full h-px bg-white/40"></div>
                <div className="w-3/4 h-px bg-white/40"></div>
            </div>

            {/* Movie poster container */}
            <div className="w-full max-w-2xl mb-12">
                <div className="rounded-2xl border-2 border-cyan-400/50 overflow-hidden shadow-2xl backdrop-blur-sm">
                    <div className="relative aspect-video bg-gradient-to-br from-cyan-900/20 to-red-900/20">
                        <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-y1UfGNokgTSHfpPI4fuysxTQdhSimT.png"
                            alt="The Movie of IHOIK - A cinematic masterpiece featuring diverse characters and sci-fi elements"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Bottom line decoration */}
            <div className="w-24 flex flex-col items-center gap-1">
                <div className="w-3/4 h-px bg-white/40"></div>
                <div className="w-full h-px bg-white/40"></div>
            </div>
        </div>
    )
}
