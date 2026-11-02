import React from 'react'
import { Card } from '@heroui/react'

import goverment from "../../imeges/goverment.png"
import amir from "../../imeges/amir.png"
import megatron from "../../imeges/megatron.png"
import vintage from "../../imeges/vintage.png"
import goldenChef from "../../imeges/goldenChef.webp"
import img1 from "../../imeges/2.png"
import img2 from "../../imeges/3.png"

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
    ]

    return (
        <div>
            <h3 className='text-foreground text-center my-5'>My Latest Projects</h3>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {Data.map((item , index) => {
                        return (
                            <Card key={index}>
                                <Card.Content>
                                    <div className="overflow-hidden rounded-lg">
                                        <img src={item.img} className="w-full h-48 object-cover" alt={item.p} />
                                    </div>
                                    <p className="text-foreground text-center mt-3">{item.p}</p>
                                    {item.link && (
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href={item.link}
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-accent px-4 py-2 text-accent-foreground"
                                        >
                                            Visit This Website
                                        </a>
                                    )}
                                </Card.Content>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Portfolio