import React from 'react'
import { Card, Button } from '@heroui/react'

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
            <h2 className='text-center text-foreground mt-5 mb-5'>About Me</h2>
            <div className='container mx-auto px-4'>
                <Card>
                    <Card.Content className='mt-5'>
                        <p className='text-start text-foreground'>
                            Khaled, a professional Front-End Developer with extensive experience in creating interactive and engaging user interfaces. I possess strong skills in HTML, CSS, JavaScript, and modern frameworks such as React and Next.js. I have a proven track record of successfully executing projects that involve designing and developing high-quality websites that meet industry standards and client needs.
                            I am known for my precision and attention to detail, along with the ability to work effectively within cross- functional teams and under tight deadlines.I am always eager to enhance my skills and stay updated with the latest technologies in the field to deliver innovative and efficient solutions.
                            <br />
                            Key Achievements:
                            <br />
                            Created and developed the &quot;Damietta Civil Bridge&quot; website, which was inaugurated by the Egyptian government, receiving official recognition for my efforts.
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
                        <div className='mt-4 flex flex-wrap items-center justify-between gap-4'>
                            <Button
                                href='https://www.linkedin.com/in/khaled-sayed-08939921a'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Hire Me
                            </Button>
                            <ul className='flex gap-2'>
                                {Social.map(item => {
                                    return (
                                        <li key={item.id}>
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                href={item.link}
                                                className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-default text-foreground transition hover:bg-surface'
                                            >
                                                <i className={`fa-brands fa-${item.type}`}></i>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </Card.Content>
                </Card>
            </div>
        </>
    )
}

export default About