import React from 'react'
import '../styles/Start.css'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'



export const Start = () => {

    //returns the homepage (its always the same)
    //uses variables that were imported for the images src attributes
    return (
        <div className="Homepage">
            <div className="startBlock">
                <div className="blockTxt">
                    <h4>Welcome to FitArena</h4>
                    <h1>It's time for a new beginning</h1>
                    <p>The first step into a new life is by taking care of your body! You can't replace it so why not give it the best treatment possible? We are here to help you in this journey</p>
                </div>
                <div className="blockImg">
                    <img src={img1} alt="mainImg" />
                </div>
            </div>
            <div className="startBlock">
                <div className="blockImg">
                    <img src={img2} alt="mainImg" />
                </div>
                <div className="blockTxt">
                    <h1>Browse through the best supplements in the market</h1>
                    <p>In our library, you will encounter a diverse range of supplements spanning various categories. The database is continually expanding, and we are committed to showcasing only the finest selections at all times.</p>
                </div>               
            </div>
            <div className="startBlock">         
                <div className="blockTxt">
                    <h1>Compare products when Unsure</h1>
                    <p>Coming soon, our "Compare" page will enable you to assess the characteristics of up to 4 products. This feature goes beyond just comparing prices, including all vital information to ensure you make the best-informed choice.</p>
                </div>   
                <div className="blockImg">
                    <img src={img3} alt="mainImg" />
                </div>            
            </div>
        </div>
    )
}
