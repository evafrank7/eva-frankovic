import React from 'react'
import { PiPawPrintDuotone, PiSoccerBallDuotone } from "react-icons/pi";
import { IoCarSportOutline } from "react-icons/io5";
import { FaPlaneDeparture } from "react-icons/fa6";

const aboutMoreItems = [
    {
        title: 'Soccer',
        Icon: PiSoccerBallDuotone,
        paragraphs: [
            'I played Division 1 soccer at the University of Pittsburgh for two and a half years before I made the decision to transfer to Bucknell University.',
            'It has been fun to see how characteristics from the field translate to the workplace!',
        ],
    },
    {
        title: 'Motorsport',
        Icon: IoCarSportOutline,
        paragraphs: [
            'One of my favorite sports to watch is Formula 1! One of my dreams is to be able to go watch a race in Monaco! I have never been to a race, so maybe we start small with Miami, Vegas, or Texas first.',
            'I have a love/hate relationship with Ferrari, but would have to say one of my favorite drivers is Max Verstappen or Charles Leclerc.',
        ],
    },
    {
        title: 'Ranger',
        Icon: PiPawPrintDuotone,
        paragraphs: [
            'I am sure you saw a photo of my delinquent Ranger on the Home Page!',
            'Ranger always keeps me on my toes whether he is eating shoes or begging for food.',
        ],
    },
    {
        title: 'Travel',
        Icon: FaPlaneDeparture,
        paragraphs: [
            'I love to travel, especially abroad! I have had the ability to visit Paris, Virgin Gorda, Aruba, Turks & Caicos, and this upcoming summer, I’m heading to Greece!',
            'Although, one of my favorite places that I have visited was Salem, Massachusetts in the Fall.',
        ],
    },
]

const AboutMore = () => {
    return (
        <div className="bg-[var(--surface)] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-16">
                <h1 className='text-4xl font-semibold pb-6'> A little bit more about me </h1>
            </div>
            <div className="w-1/16 mx-auto border-b-3 border-[var(--olive-dark)]" />
            <div className='lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center pt-6'>
                {aboutMoreItems.map(({ title, Icon, paragraphs }, index) => {
                    const showBorder = index !== aboutMoreItems.length - 1

                    return (
                        <div key={title} className={`${showBorder ? 'lg:border-r lg:border-[var(--olive-dark)]' : ''} p-5`}>
                            <Icon className="mx-auto text-5xl mb-3 text-[var(--olive-dark)]" />
                            <h2 className='text-xl font-semibold pb-4 uppercase'>{title}</h2>
                            {paragraphs.map((paragraph, paragraphIndex) => (
                                <p
                                    key={paragraph}
                                    className={`text-lg ${paragraphIndex !== paragraphs.length - 1 ? 'pb-2' : ''}`}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AboutMore
