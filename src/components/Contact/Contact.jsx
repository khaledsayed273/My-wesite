import React from 'react'
import { Card } from '@heroui/react'

function Contact() {


    const Data = 
        {
            phone: "+201145645014",
            address: "Cairo",
            email: "khaledsayed273@gmail.com"
        }

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
        <div className='contact container mx-auto px-4'>
            <h2 className='text-center text-foreground my-5'>GET IN TOUCH</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                <Card>
                    <Card.Content className='flex flex-col items-center'>
                        <i className="fa-solid fa-phone"></i>
                        <span className='text-center mt-3'>Phone</span>
                        <p className='text-center'>{Data.phone}</p>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content className='flex flex-col items-center'>
                        <i className="fa-solid fa-location-dot"></i>
                        <span className='text-center mt-3'>address</span>
                        <p className='text-center'>{Data.address}</p>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content className='flex flex-col items-center'>
                        <i className="fa-solid fa-message"></i>
                        <span className='text-center mt-3'>email</span>
                        <p className='text-center'>{Data.email}</p>
                    </Card.Content>
                </Card>
            </div>

            <ul className='mt-5 flex justify-center gap-2'>
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
    )
}

export default Contact