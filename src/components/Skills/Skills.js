import React from 'react'
import './skills.css'

import gitimg from '../../imeges/download.png'

function Skills() {


    const dataSkills = [
        
        {
            id: 1,
            img: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
            title: "html"
        },
        {
            id: 2,
            img: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
            title: "css"
        },
        {
            id: 3,
            img: "https://cdn.worldvectorlogo.com/logos/bootstrap-5.svg",
            title: "bootstrap"
        },
        
        {
            id: 4,
            img: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
            title: "javascript"
        },
        
        {
            id: 5,
            img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
            title: "React JS"
        },
        {
            id: 6,
            img: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
            title: "VS Code"
        },
        {
            id: 7,
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAnFBMVEUaKzQoTFNEiY1QpqhWs7QoS1MgMTssPkgyRE4zRlA3bXFWsrM3bHImOEI0RlFLNz6rTlHVWVrqXl6qT1FQTji3kkHlsUb7v0d+REjpXl59Q0iGcj36vkfWWVpRTzlQpadDioxDRFeSc5q1ibjGk8ZsXXrFksVMNz7ksEW2kkGHcz20ibeRdJltXXpERFiIcz0bKzQaKjQaKzUaLDQ2xOENAAAEqklEQVR4AezYg5kEQRBA4RrbWuef5fn6jPoGi3l/Bo2iAAAAAAAAAADwApbtuGfi2J584AdhNEIY+KIWu+eUpPJOFo2VZ6JkueeVeGL40Xi5Lzq2e2a2GEE0gUB0HPfMHDHCaAIhF0AIqHiJe16WGH4ejeeLUnreG4jlnWz8DWSi5p2zEbLO1ggBAAAARVnVv6qaQj5ou35YQN+1fzfK41vhzbb+03Yn7+wPw0IOe+2opN8JFtv6H7aFGO1hWMyhVQ7L+p1gWf9LKUY3LKhTr0sC0TnW/3IUox8W1KsXZiEXQAiQBFV2ay2DRtFUf8R/WcgHp/v27ivJbR2IwrBy1lXWROU4Oe1/b/eZU1Nttg8IG9b/rYCFKpDN5mnwXyiEAAAAgHplVQtita6XMjbb3T6n3XZjpBeNPKFeCve6RaX+Dse9w/FgpBeNPKH6MlTvFpX62xz3LsdNNr3ozxOGzwlKkaft3mlrXpUdpgqfE9RDb7u90864qvxxuhYLwBZI/yaYvSpfnrCR/mMwe1XOPGH/DxZC1UrAQqieLYTKYQshAAAAwE796R+sjTJ1MFyM3RbDwY9XIJTCd/dyZME/12sHMxxhjb7cE5zey6EV/1yvHc1xxHUaek9wJseWHJq5wlmOwFZTb4jMleCaMNa6GP+2hXkFLRaALXABN0HjChoX9hj8z90TpBACAAAA9I/YSimcLcHFYlwohZUYg/IydHevD1KJPUEhyKK/Dk/v9VE6vScoRpmUhshMH6bUGyJqmE1pic2LGqdtsQBsgUu6CUo9wfQfg0JPkEIIAAAAOA0Xxufn6ex8ZTo/TAs6qjvS7PC1GUB4vHe8noQcwoo2O3wKcGzW/TT4GF682eFhiIPTZsEHMeMNTi5CHJ03Dz6KK4zOsgBsAfU8wdNffxPUZ4etvN61t3MX9zEYfnZ4kC2ETt8KoYezs0uXRiEEAAAA2KWrXZJmy2jnsMtm+7Q3PT17P8ZHOE+w23MMPpndxpdj+DhGjPMEu3XH6JvRbdwcwwdy4pwnWBGGH4fucNa28B8sVIXW1EIYet0VFcprsQBsAW6CSTwGDwU/BhMohJ6f5FSiUAgBAAAAr9tdtvyM92u9+WzpLHYLKIVfzBeQt7i/VGx76S9Dr+Yr6DLuTzXbuhCzw1thvFEdg9QFmB3eCQOu6iCsrsUCsAXU2eHXqP8YXma6fjp9dvjFEZfXPXq7fiZ9dni3fb2QQggAAAB4/VVeT0/zxSD0BFXHQ9i+XuyeoCwbZGnHFf88QSnKFF788wSlMFsELRaALeDtCepeA/f1YvcEVS+B+3qxe4LPWiG0fU2yEAIAAADKlVXtB6t1/fuH8rN9nmCipXAn54DUo531S7YnWM45IreUs366+LPDlZxxqVnCDZFqzjHZuR51i6PFArAFws0Ol7OJQT3rF0HI2eFOzpMFH9PuCdZ/LoSqlbJ9xHI265dcIQQAAACchqOxYDQZpF0KX49VN7cp9wRPY93NIOGe4HAcwDDhhshiHMAi2ZYYC8AWGNyMdaeUe4K3+gpcp90THEy0Qmh4oicIAABwad5LuGgfJVy4zxKA/LhBfJUAANH9D5mak7hqUFbgAAAAAElFTkSuQmCC",
            title: "prettier"
        },
        {
            id: 8,
            img: "https://cdn.worldvectorlogo.com/logos/redux.svg",
            title: "Redux"
        },
        {
            id: 9,
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAJ2CAMAAAB4notuAAAAYFBMVEXMAADMAgLMAQHLAADTMTHjd3fkeXn+/Pz//v7//f3////++/v45ub44+P44uL54+P54uLUPj7PKCjPKSnPKinQJybUQED45eX43d3RGRn43Nz44uHhamrODAzPFBTha2sByAg3AAAGOklEQVR4Ae3YRYLeMBCFwdcKw8D9bzgUXAXszg1Chp+q9mb7k+QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFyEylJU5c+gOwcHI+BFcQ8BBAsQLADBAhAsQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAngejtyzsJcpCBZLPK8K++j6GQSL//esxk7Font+NgXB4v/V2KlXVHfw0x1AsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAsQLADBAhAsQLAABAtgueeB9VXVZnv+2UGwYD0vtipWVb3+GgQL1vO67qds4tnt9+AfFqxqOor9IlgAggUgWIBgAQgWgGABggUgWACCBQgWgGABCBYgWACCBQgWgGABCBYgWACCBSBYgGABCBaAYAGCBSBYAIIFCBaAYAEIFiBYAIIFIFiAYAEIFoBgAYIFIFgAggUIFoBgAQgWIFgAggUIFoBgAQgWIFgAggUgWIBgAQgWgGABggUgWACCBQgWgGABCBYgWACCBSBYgGABCBaAYAGCBSBYAIIFCBaAYAGMAAgWgGABggUgWACCBQgWgGABCBYgWACCBSBYgGABCBaAYAGCBSBYAIIFCBaAYAEIFiBYAIIFIFiAYAEIFoBgAYIFIFiAYAEIFoBgAYIFIFgAggUIFoBgAQgWIFgAggUgWIBgAQgWgGABggUgWACCBQgWgGABCBYgWACCBSBYgGABCBaAYAGCBSBYgGABCBaAYAGCBSBYAIIFCBaAYAEIFiBYAIIFIFiAYAEIFoBgAYIFIFgAggUIFoBgAQgWIFgAggUgWIBgAQgWgGABggUgWIBgAQgWgGABggUgWACCBQgWgGABCBYgWACCBSBYgGABCBaAYAGCBSBYAIIFCBaAYAEIFiBYAIIFIFiAYAEIFoBgAYIFIFiAYAEIFoBgAYIFIFgAggUIFoBgAQgWIFgAggUgWIBgAQgWgGABggUgWACCBQgWgGABCBYgWACCBSBYgGABCBaAYAGCBSBYgGABCBaAYAGCBSBYAIIFCBaAYAEIFiBYAIIFIFiAYAEIFoBgAYIFIFgAggUIFoBgAQgWIFgAggUgWIBgAQgWgGABggUgWIBgAQgWgGABggUgWACCBQgWgGABCBYgWACCBSBYgGABCBaAYAGCBSBYAIIFCBaAYAEIFiBYAIIFIFiAYAEIFsDzcNx6rsqpqdHZzPXHzia6OwsgWEw1V07PqGzlXf3MRrqncNQqSzHmbOnZaYb2JG/IdAIvyjIwAl4U9xBAsADBAhAsAMECBAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsgApLVeXPoDt/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgFooytrbRKqNwAAAABJRU5ErkJggg==",
            title: "NPM"
        },
        {
            id: 10,
            img: gitimg,
            title: "GITHUB"
        },
        {
            id: 11,
            img: "https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png",
            title: "Redux Toolkit"
        },
        {
            id: 12,
            img: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
            title: "tailwind"
        },
        {
            id: 13,
            img: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
            title: "next js"
        },
        
    ]

    return (
        <>
            <h2 className='my-5 text-center'>My Skills</h2>
            <div className='container mt-5'>
                <div className="cards">
                    <div className='row '>
                        {dataSkills.map(item => {
                            return (
                            <div className='col-lg-2 col-md-3 col-sm-4 my-3' key={item.id}>
                                <div className="cardskills p-2 d-flex flex-column justify-content-center align-items-center p-2">
                                    <div className='p-img my-2'>
                                        <img className='w-100 h-100' src={item.img} alt="" />
                                    </div>
                                    <span className='d-block text-center fw-bold mt-2'>{item.title}</span>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
