import React from 'react'
import './main.css'
import image from './main.svg'

const Main = () => {
    return (
        <div className="main">
            {/* <div> */}
                <img src={image} alt="img" className="main-pic"/>  
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab modi quisquam, molestias perferendis</p>
                {/* <img src={image} alt="img" className="main-pic"/>   */}
            {/* </div> */}
            
            
            <span>JOIN US!</span>
        </div>
    )
}

export default Main
