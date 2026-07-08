import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import Ranger from '../assets/images/ranger.jpeg'

const AboutMe = () => {
    return (
        <div className="py-10 mb-4 mt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
                <section className="flex-1 w-auto">
                    <h2 className="uppercase pb-2"> About Me </h2>
                    <p className='pb-8'> I am a developer who primarly loves to work on the frontend, but can do some backend work as well. Outside of coding, you can find me getting a coffee, a cocktail, or hanging out with dog.</p>
                    <Link
                        to="/about"
                        className="uppercase underline underline-offset-4"
                    >
                        More About Me <FaArrowRight className="inline" />
                    </Link>
                </section>
                <section className='flex-1 md:justify-end flex items-center'>
                    <img
                        className='h-85 w-auto rounded-[25px]'
                        src={Ranger}
                        alt='Ranger'
                    />
                </section>
            </div>
        </div>
    )
}

export default AboutMe
