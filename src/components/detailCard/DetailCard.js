import React, { useState } from 'react'
import x from '../../../src/star.png' 
// receiving the fetched data(during navigation) and used in card detail.
import { useLocation } from 'react-router-dom'
function DetailCard() {
  let {state} = useLocation() // destructuring of state
  // an object is returned by this useLocation hook.
  let y = Math.ceil(state.rating.rate)
  console.log(state)
  return (
    <div className='card w-100 p-3' style={{display:'block',margin:'auto'}}>
      <div className="d-flex flex-wrap">
      <img src={state.image} width="300px" alt="" />
      <div className="othereles p-2 w-75">
        <h3 className="display-6 lead text-center">{state.title}</h3>
        <h4 className="display-6 lead text-center">Price : £{state.price}.00</h4>
        <p className="lead text-center">{state.description}</p>
        <p className="text-center lead" style={{fontSize:'1.5rem',}}>Category : {state.category}</p>
        <span style={{display:'block',margin:'auto',paddingLeft:'20px'}}>
          <p className="lead text-center" style={{display:'inline'}}>Rating :</p>
          <p className='lead text-center' style={{display:'inline'}}>{y}</p>
          <img src={x} className='p-2 mb-1' width="35px" alt="" />
        </span>
      </div>
      </div>
    </div>
  )
}

export default DetailCard