import React from 'react'
import { Button } from './buttons'
import { apiAddtocartLookup } from './lookup'

export function CartItem(props){
    const {book,index,onRemove}=props

    const handleBackendAddtoCart=()=>{
        onRemove(index)
    }

    
    return <tr>
    <td>
      <div class="cart-info">
        <img src={book.photo}  alt="" />
        <div>
          <p>{book.name}</p>
          <span>Price: Rs {book.price}</span>
          <br />
          <Button buttonname="Remove" className="btn btn-danger" book={book} inCart onRemove={handleBackendAddtoCart} />
        </div>
      </div>
    </td>
    <td><input type="number" value="1" min="1" /></td>
    <td>Rs {book.price}</td>
  </tr>
}