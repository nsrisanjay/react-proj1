import React, { useEffect } from 'react'

function CardList(props) {
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(proArray=>console.log(proArray))
  })
  return (
    <div>
      {
        props.sent.map(ele=>{
          <div className="card">
            <h1>{ele.title}</h1>
          </div>
        })
      }
    </div>
  )
}

export default CardList
