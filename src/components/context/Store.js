import React from 'react'
import { useState } from 'react'
import { Context } from './Context'
function Store({children}) {
    let [basket,setBasket] = useState(0)
  return (
    <Context.Provider value={[basket,setBasket]}>
        {children}
    </Context.Provider>
  )
}

export default Store