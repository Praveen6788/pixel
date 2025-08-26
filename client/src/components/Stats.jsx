    import React from 'react'
    import workshop from '../assets/workshop.png'
    import growth from "../assets/growth.png"
    import Activemember from "../assets/team.png"
    import cam from "../assets/cam.png"

import "animate.css"
    const Stats = () => {
        const stats = [
            {
                img:Activemember ,
                count: "100+",
                label: "Active Members",
            },
            {
                img: workshop, // Replace with actual image import if available
                count: "10+",
                label: "Workshops Conducted",
            },
            {
                img: cam, // Replace with actual image import if available
                count: "50+",
                label: "Events captured",
            },
            {
                img: growth,
                count: "3+",
                label: "Years Running",
            },
        ];

        return (
            <section className="flex flex-col items-center justify-center px-6 md:px-20 py-20">
                <h2 className="text-3xl md:text-4xl text-center mb-10 font-semibold">BY THE  <span className='text-yellow-500'> NUMBERS</span></h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-20 w-full mt-10">
                    {stats.map((stat, index) => (
                        <div key={index}    className="flex flex-col items-center text-center justify-center gap-2 ">
                            { <img src={stat.img} alt={stat.label} className="w-14 h-14 " />}
                            <h3 className="text-4xl font-semibold">{stat.count}</h3>
                            <p className="text-base md:text-xl text-gray-300 min-width-content  ">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        )
    }

    export default Stats
