import React, { useState } from 'react'
// import CardList from '../cardList/CardList'
import { useContext } from 'react'
import { Context } from '../context/Context'
import {useNavigate} from 'react-router-dom'
function SearchBar(props) {
  let [basket,setBasket] = useContext(Context)
  let [searchtext, setSearchText] = useState('')
  let [data, setData] = useState([])
  // useNvigate hook
  let navigate = useNavigate()
  // function to increment basket
  function f2(x)
  {
    setBasket(x+1)
  }
  // function for filtering card during search
  let fet = function (x) {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(proArray => {
        const y = proArray.filter(ele => {
          return ele && ele.title && ele.title.toLowerCase().includes(x.toLowerCase())
        });
        let copy = [...y]
        setData(copy)
      })
  }
  // handles onchange of the input field
  let handleChange = function (val) {
    setSearchText(val)
    fet(val)
  }
  // fetches data of particular product and navigates to the product card...
  function fet2(x)
  {
    // console.log(x)
    let id = x+1;
    // console.log(id)
    fetch(`https://fakestoreapi.com/products?id=${id}`,
      {
        method:'GET'
      }
    )
    .then(res=>res.json())
    .then(prodObj=>{
      let title = prodObj[0].title.replaceAll(' ','-')
      // console.log(prodObj[0])// response we get in the form of an single element array.
      // passing the product details into product cards..
      navigate(`/product-detail/${title}`,{state:prodObj[0]})
    })
  }
  return (
    <div className='text-center mt-4'>
      <div className='text-center'>
        <input type="search" name="search" id="" onChange={(event) => handleChange(event.target.value)} placeholder='type to search' className='mb-4' style={{ width: '300px', fontSize: '1.4rem' }} />
        {/* <CardList sent={data}/> */}
        <div style={{display:'flex',flexWrap:'wrap',gap:'15px',justifyContent:'center'}}>
        {
            data.map((ele,key) => {
              return (
                <div index={key} className='card p-4' style={{width:'24%'}}>
                  <img src={ele.image} className='d-block mx-auto' width="150 px" height="150px" alt="" />
                  <br />
                  <h6 className='lead text-center p-2' style={{height:'110px', width:'280 px'}}>{ele.title}</h6>
                  <div className="d-flex" style={{justifyContent:'center',gap:'10px'}}>
                  <button className="btn btn-dark" onClick={()=>f2(basket)}>Add to basket</button>
                  <button className="btn btn-dark" onClick={()=>fet2(key)}>Details</button>
                  </div>
                </div>
              )
            }
            )
          }
        </div>
        
      </div>
    </div>
  )
}

export default SearchBar
