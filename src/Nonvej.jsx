import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './store';

function Nonvej() {
    const nonvegs=useSelector(state=>state.products.nonVeg)
    const dispatch=useDispatch();
    const items=nonvegs.map((novej,index)=>
        <li key={index}>
          {novej.name}-${novej.price.toFixed(2)}
          <button onClick={()=>dispatch(addToCart(novej))}>Add cart</button>
        </li> 
        )

  return (
     <>
     <h2>Non-vej items List</h2>
     <ul>
        {items}
     </ul>
    </>
  )
}

export default Nonvej


