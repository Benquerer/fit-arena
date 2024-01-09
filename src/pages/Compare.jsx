import React from 'react'
import img4 from '../assets/img4.png'
import '../styles/Compare.css'

export const Compare = () => {
  return (
    <div className="compare">
      <h1>Coming Soon...</h1>
      <p>Exciting news! We're working on a cool tool that lets you pick up to 4 items from our ever-growing library. You can compare the important stuff when shopping for supplements: Price, servings, calories, nutritional values, average rating, and more. Plus, it'll help you check out category-specific details like aminograms for whey proteins. Stay tuned for this handy feature!</p>
      <img src={img4} className="imgSupps"/>
      <h3>the outcome will be well worth the wait!</h3>
    </div>
  )
}
