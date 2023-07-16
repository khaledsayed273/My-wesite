import React from 'react'
import style from "./about.module.css"
import img from '../../imeges/33.fb89c83d.png'


function About() {

    const Data = {
        details: "Front End Developer able to build a Web presence from the ground up - from concept, navigation, layout, and programming. Skilled at writing well-designed, testable, and efficient code using current best practices in Web development. Fast learner, hard worker, and team player who is proficient in an array of scripting languages and multimedia Web tools. I have excellent design & coding skills"
    }

    const Social = [
        {
            id: 1,
            type: "facebook-f",
            link: "https://www.facebook.com/khaledsayed27/"
        },
        {
            id: 2,
            type: "twitter",
            link: "https://twitter.com/_khaledsayed_?t=WHyl5gUutKvlz_4BFQryQg&s=09"
        },
        {
            id: 3,
            type: "instagram",
            link: "https://www.instagram.com/_khaledsayed/?fbclid=IwAR2Z2-J_lbP_UYbLdL6DlWqzrSebwDUuJVazmIW3EWOmHqemO6wOolyLyTk"
        },
        {
            id: 4,
            type: "github",
            link: "https://github.com/khaledsayed273"
        },
    ]

    return (
        <>
            <h2 className='text-center text-white mt-lg-5 mt-3 mb-5'>About Me</h2>
            <div className='row justify-content-center w-100'>
                <div className="col-6 d-none d-lg-block">
                    <div className={`${style.left} d-flex flex-column align-items-center justify-content-center`}>
                        <div className="image">
                            <img className='w-100 h-100' src={img} alt="" />
                        </div>
                        <ul className='mt-4'>
                            {Social.map(item => {
                                return (
                                    <li key={item.id}><a target="_blank" href={item.link} rel="noreferrer"><i className={`fa-brands fa-${item.type}`}></i></a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="col-6 d-flex align-items-center">
                    <div className={ `${style.right} mt-5`}>
                        <p>{Data.details}</p>

                        <a target='_blank' href="https://www.mediafire.com/file/15vagxxr4xrgf16/Frontend+developer+khaled+sayed.pdf/file" className={`d-inline-block p-0`} style={{
                            background: "none"
                        }} rel="noreferrer">
                            <button className='btn btn-dark me-2 p-3 mt-3'>Download CV</button>
                        </a>

                        <button className='btn btn-dark mx-2 p-3 mt-3'>Hire Me</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About
