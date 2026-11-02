import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@heroui/react'
import "./home.css"

import img  from '../../imeges/comp.8961cf14.png'

function Home() {
    const navigate = useNavigate()

    const Data = {
        name: "Khaled Sayed",
        job: "Front End Developer"
    }

    return (
        <div className='home' id='home'>
            <div className="container mx-auto flex min-h-screen items-center px-4">
                <div className='grid w-full grid-cols-1 gap-8 md:grid-cols-2'>
                    <div className="flex flex-col justify-center">
                        <span>Hello In My Portofolio</span>
                        <h1 className='my-4'>{Data.name}</h1>
                        <h3>{Data.job}</h3>
                        <Button className='mt-3 w-fit' onPress={() => navigate('/about')}>
                            More About Me
                        </Button>
                    </div>
                    <div className='hidden md:block'>
                        <div className="right">
                            <div className="imege">
                                <img className='w-full' src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home