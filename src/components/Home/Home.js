import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

import img  from '../../imeges/comp.8961cf14.png'

function Home() {

    const Data = {
        name: "Khaled Sayed",
        job: "Front End Developer"
    }

    return (
        <div className='home' id='home'>
            <div className="container  d-flex align-items-center justify-content-start justify-content-lg-center">
                <div className='row w-100 '>
                    <div className='col-md-6 d-flex justify-content-center justify-content-lg-start align-items-center'>
                        <div className="left">
                            <span>Hello In My Portofolio</span>
                            <h1 className='my-4'>{Data.name}</h1>
                            <h3>{Data.job}</h3>
                            <Link to='/about' className='btn btnmore mt-3'>More About Me</Link>
                        </div>
                    </div>
                    <div className='col-6 d-none d-md-block'>
                        <div className="right">
                            <div className="imege">
                                <img className='w-100 h-100' src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
