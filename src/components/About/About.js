import React from 'react'
import style from "./about.module.css"


function About() {

    const Social = [
        {
            id: 1,
            type: "facebook-f",
            link: "https://www.facebook.com/khaledsayed27/"
        },
        {
            id: 2,
            type: "linkedin",
            link: "https://www.linkedin.com/in/khaled-sayed-08939921a"
        },
        {
            id: 3,
            type: "whatsapp",
            link: "https://wa.me/201145645014"
        },
        {
            id: 4,
            type: "github",
            link: "https://github.com/khaledsayed273"
        },
    ]

    return (
        <>
            <h2 className='text-center text-white mt-lg-5 mt-5 mb-5'>About Me</h2>
            <div className=' container mx-auto'>

                    <div className={`${style.right} mt-5`}>
                        <p className='text-start '>
                        Khaled, a professional Front-End Developer with extensive experience in creating interactive and engaging user interfaces. I possess strong skills in HTML, CSS, JavaScript, and modern frameworks such as React and Next.js. I have a proven track record of successfully executing projects that involve designing and developing high-quality websites that meet industry standards and client needs.
                            I am known for my precision and attention to detail, along with the ability to work effectively within cross- functional teams and under tight deadlines.I am always eager to enhance my skills and stay updated with the latest technologies in the field to deliver innovative and efficient solutions.
                            <br />
                            Key Achievements:
                            <br />
                            Created and developed the "Damietta Civil Bridge" website, which was inaugurated by the Egyptian government, receiving official recognition for my efforts.
                            Improved website performance and increased loading speed by 30 % through performance optimization techniques.
                            Implemented high - quality responsive designs to ensure an excellent user experience across various devices.
                            <br />
                            Skills:
                            <br />
                            HTML, CSS, JavaScript
                            <br />
                            Tailwind , MUI , Bootstrap , React js , Next.js
                            <br />
                            Performance Optimization
                            Teamwork and effective communication</p>
                        <div className='d-flex flex-wrap justify-content-between align-items-center'>
                            <div className='d-flex justify-content-center justify-content-lg-start'>
                                <a target="_blank" rel="noreferrer" className='btn btn-dark py-3 px-5 mt-3' href='https://www.linkedin.com/in/khaled-sayed-08939921a'>
                                    Hire Me
                                </a>
                            </div>
                            <ul className='mt-4 d-flex'>
                                {Social.map(item => {
                                    return (
                                        <li className='me-2 ms-0' key={item.id}><a target="_blank" href={item.link} rel="noreferrer"><i className={`fa-brands fa-${item.type}`}></i></a></li>
                                    )
                                })}
                            </ul>
                        </div>

                    </div>

            </div>
        </>
    )
}

export default About
