import React from 'react'
import clsx from 'clsx'

const YouTubeFollowButton = ({ dark }: { dark?: boolean }) => {
    return (
        <a
            href="https://www.youtube.com/@ihoikmedia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Subscribe on YouTube"
            className={clsx(
                "flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit transition-colors",
                dark
                    ? "text-white bg-[#FF0000] hover:bg-[#e60000]"
                    : "text-[#FF0000] bg-white border border-[#FF0000] hover:bg-[#fff5f5]"
            )}
        >
            <div className="mr-3">
                {/* ✅ Official YouTube Logo SVG */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                >
                    <path
                        fill="currentColor"
                        d="M23.498 6.186a2.995 2.995 0 0 0-2.11-2.12C19.515 3.5 12 3.5 12 3.5s-7.515 0-9.388.566a2.995 2.995 0 0 0-2.11 2.12A31.528 31.528 0 0 0 .5 12a31.528 31.528 0 0 0 .002 5.814c.26 1.01 1.056 1.806 2.11 2.12C4.485 20.5 12 20.5 12 20.5s7.515 0 9.388-.566a2.995 2.995 0 0 0 2.11-2.12A31.528 31.528 0 0 0 23.5 12a31.528 31.528 0 0 0-.002-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"
                    />
                </svg>
            </div>
            <div>
                <div className="text-xs">Subscribe on</div>
                <div className="-mt-1 font-sans text-xl font-semibold">YouTube</div>
            </div>
        </a>
    )
}

export default YouTubeFollowButton
