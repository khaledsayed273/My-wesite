import React from 'react'
import style from "./portfolio.module.css"

import img1 from "../../imeges/2.png"
import img2 from "../../imeges/3.png"
import img3 from "../../imeges/4.png"

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
            p: "Gym",
            link: "https://react-project-2-seven.vercel.app/"
        },
        {
            id: 3,
            img: img3,
            p: "E-Commerce",
            link: "https://buy-fast-mocha.vercel.app/"
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
                                            <a target="_blank" className='w-50 text-center m-auto ' href={item.link} rel="noreferrer">Vist Website</a>
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
