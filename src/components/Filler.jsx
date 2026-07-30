import React from 'react'
import { LiaCrossSolid } from "react-icons/lia";

const Filler = () => {
    return (
        <div className="bg-[var(--olive)] rounded-[25px] max-w-lg mx-auto py-3 my-4 md:mr-4">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="flex items-center justify-center">
                    <LiaCrossSolid className='text-[var(--coconut)] text-5xl' />
                </div>
                <div className="flex items-center justify-center text-center flex-col">
                    <h1 className="!text-[var(--coconut)] text-xl">"Ask, and it will be given to you; seek, and you will find."</h1>
                    <p className="!text-[var(--coconut)] text-lg italic"> - Matthew 7:7 </p>
                </div>
            </div>
        </div>
    )
}

export default Filler
