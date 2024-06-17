import React from 'react'
import style from "./portfolio.module.css"

import goverment from "../../imeges/goverment.png"
import amir from "../../imeges/amir.png"
import megatron from "../../imeges/megatron.png"
import vintage from "../../imeges/vintage.png"
import goldenChef from "../../imeges/goldenChef.webp"
import img1 from "../../imeges/2.png"
import img2 from "../../imeges/3.png"
// import img3 from "../../imeges/4.png"
// import img4 from "../../imeges/Screenshot (15).png"
// import img5 from "../../imeges/Screenshot (16).png"

function Portfolio() {

    const Data = 
    [
        {
            img: goverment,
            p: "Damietta Civil Bridge (Next js)",
            link: "https://www.damietta-civil-bridge.com/"
        },
        {
            img: amir,
            p: "Amir Ashour Designer (Next js)",
            link: "https://www.amir-ashour.com/"
        },
        {
            img: megatron,
            p: "Megatron Soft (Next js)",
            link: "https://megatron-soft.com/en"
        },
        {
            img: vintage,
            p: "Vintage 'Not Finished Yet ( coming soon )'",
            link: "https://vintage-nu.vercel.app/"
        },
        {
            img: goldenChef,
            p: "Golden Chef ( Native )",
            link: "https://www.golden-chef-festival.com/en"
        },
        {
            img: img1,
            p: "Education ( Simple UI React js )",
            link: "https://education-iota-six.vercel.app/"
        },
        {
            img: img2,
            p: "The_event_product ( Simple UI React js )",
            link: "https://the-event-product.vercel.app/"
        },
        // {
        //     img: img3,
        //     p: "E-Commerce",
        //     link: "https://buy-fast-mocha.vercel.app/"
        // },
        
        // {
        //     img: img5,
        //     p: "Shahen Website",
        //     link: "https://www.shahin-furniture.com/"
        // },
        
        
    ]

    return (
        <div>
            <h3 className='text-white text-center my-5'>My Latest Projects</h3>
            <div className="container">
                <div className="row">
                    {Data.map((item , index) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-12 my-3" key={index}>
                                <div className={style.card} >
                                    <div className={style.image}>
                                        <img src={item.img} className="card-img-top w-100 h-100" alt={item.p} />
                                        <div className={style.over}>
                                            {item.link && (
                                                <a target="_blank" className='rounded-3 text-center m-auto ' href={item.link} rel="noreferrer">Visit This Website</a>
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
