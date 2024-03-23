import React from 'react'
import { NavLink} from 'react-router-dom'
import "./nav.css"

function Nav({ state ,toggle}) {


    const data = [
        {
            id: 1,
            name: "home",
            path: "/",
            className: "fa-solid fa-house"
        },
        {
            id: 2,
            name: "about",
            path: "/about",
            className: "fa-solid fa-user"
        },
        {
            id: 3,
            name: "skills",
            path: "/skills",
            className: "fa-solid fa-star"
        },
        {
            id: 4,
            name: "portfolio",
            path: "/portfolio",
            className: "fa-solid fa-image-portrait"
        },
        {
            id: 5,
            name: "contact",
            path: "/contact",
            className: "fa-solid fa-message"
        },
    ]

    return (
        <nav id='nav' className={state}>
            <ul className='h-100'>
                {data.map((item) => (

                    <li onClick={toggle} key={item.id}><NavLink style={{textTransform: "capitalize"}}  to={item.path}><i className={item.className}></i>{item.name}</NavLink></li>
                ))}

            </ul>
        </nav>
    )
}

export default Nav
