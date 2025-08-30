import React from 'react'
import clsx from 'clsx'

const InstagramFollowButton = ({ dark }: { dark?: boolean }) => {
    return (
        <a href="https://www.instagram.com/ithappensinkota/" target="_blank" rel="noopener noreferrer">
            <button
                type="button"
                className={clsx(
                    "flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit",
                    { "text-white bg-[#E1306C]": dark, "text-[#E1306C] bg-white border border-[#E1306C]": !dark }
                )}
            >
                <div className="mr-3">
                    <svg
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="30"
                        height="30"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M7.75 2h8.5C19.8 2 22 4.2 22 7.75v8.5C22 19.8 19.8 22 16.25 22h-8.5C4.2 22 2 19.8 2 16.25v-8.5C2 4.2 4.2 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5c2.07 0 3.75-1.68 3.75-3.75v-8.5c0-2.07-1.68-3.75-3.75-3.75h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 2a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zm4.5-.63a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z" />
                    </svg>
                </div>
                <div>
                    <div className="text-xs">
                        Follow us on
                    </div>
                    <div className="-mt-1 font-sans text-xl font-semibold">
                        Instagram
                    </div>
                </div>
            </button>
        </a>
    )
}

export default InstagramFollowButton
