import React from 'react'
import style from "./portfolio.module.css"

import img1 from "../../imeges/2.png"
import img2 from "../../imeges/3.png"
import img3 from "../../imeges/4.png"
import img4 from "../../imeges/Screenshot (15).png"
import img5 from "../../imeges/Screenshot (16).png"

function Portfolio() {

    const Data = 
    [
        {
            id: 1,
            img: img1,
            p: "Education",
            link: "https://education-iota-six.vercel.app/"
        },
        {
            id: 2,
            img: img2,
            p: "the_event_product",
            link: "https://the-event-product.vercel.app/"
        },
        {
            id: 3,
            img: img3,
            p: "E-Commerce",
            link: "https://buy-fast-mocha.vercel.app/"
        },
        {
            id: 4,
            img: img4,
            p: "dashboard my previous company.",
        },
        {
            id: 5,
            img: img5,
            p: "shahen webSite",
        },
        
    ]

    return (
        <div>
            <h3 className='text-white text-center my-5'>My Last projects</h3>
            <div className="container">
                <div className="row">
                    {Data.map((item) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-12 my-3" key={item.id}>
                                <div className={style.card} >
                                    <div className={style.image}>
                                        <img src={item.img} className="card-img-top w-100 h-100" alt="..." />
                                        <div className={style.over}>
                                            {item.link && (
                                                <a target="_blank" className='w-50 text-center m-auto ' href={item.link} rel="noreferrer">Visit Website</a>
                                            ) }
                                        </div>
                                    </div>
                                    <div className="card-body p-2">
                                        <p className="card-text text-white text-center">{item.p}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
