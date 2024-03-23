import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'
import Skills from './Skills/Skills'

function Page() {
    return (
        <div className={`page w-100 `} id="page">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </div>
    )
}

export default Page
