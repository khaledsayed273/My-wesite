import React from 'react'
import './contact.css'

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
        <div className='contact'>
            <h2 className='text-center text-white my-5'>GET IN TOUCH</h2>
            <div className='container'>
                <div className='row '>
                    <div className="col-lg-4 col-12 gx-3 mt-3">
                        <div className='card d-flex flex-column'>
                            <i className="fa-solid fa-phone"></i>
                            <span className='text-center mt-3'>Phone</span>
                            <p className='text-center'>{Data.phone}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 gx-3 mt-3">
                        <div className='card'>
                            <i className="fa-solid fa-location-dot"></i>
                            <span className='text-center mt-3'>address</span>
                            <p className='text-center'>{Data.address}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 gx-3 mt-3">
                        <div className='card'>
                            <i className="fa-solid fa-message"></i>
                            <span className='text-center mt-3'>email</span>
                            <p className='text-center'>{Data.email}</p>
                        </div>
                    </div>

                    <ul className='mt-4 d-flex justify-content-center mt-5'>
                            {Social.map(item => {
                                return (
                                    <li key={item.id}><a target="_blank" href={item.link} rel="noreferrer"><i className={`fa-brands fa-${item.type}`}></i></a></li>
                                )
                            })}
                        </ul>
                </div>
            </div>
        </div>

    )
}

export default Contact
