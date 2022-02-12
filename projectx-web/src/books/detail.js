import { Button } from "./buttons"
import { useState,useEffect } from "react"
import { apicartLookup } from "./lookup"
import { useNavigate } from 'react-router-dom'

export function Book(props){
    const {book,index,className,isDetail,inCart,onRemove,owned,expiry,orderid,ordered,deliveryDate,delivered,checkout}=props
    const [buttonclassName,setButtonClassName]=useState(delivered===false ?  "btn btn-danger disabled" : owned ? expiry ? "btn btn-secondary disabled" : "btn btn-danger" : ordered ? "btn btn-danger disabled" : "btn btn-primary")
    const [buttonName,setButtonName]=useState(delivered===false ? "Book Not Delivered Yet" : owned ? expiry ? "Book Processing for Return" : "Return Book" :ordered ? `Estimated Delivery Date : ${deliveryDate}` : "Add To Cart")
    const [isLoading,setIsLoading]=useState(true)
    // console.log("Book",book)
    // console.log(buttonName,"Button Name")
    const handleRemoveCartItem=(index)=>{
      onRemove(index)
    }

    const handleButtonName=()=>{
      if(book.does_exists_in_cart==true){
        setButtonClassName("btn btn-danger")
        setButtonName("Remove")
      }
      setIsLoading(false)
    }
    
    useEffect(()=>{
        // apicartLookup(handleCartLookup)
        handleButtonName()
    },[])

    const navigate=useNavigate()
      const goToDetail=()=>{
        // window.location.href=`/${book.name}/detail/`;
        navigate(`/${book.name}/detail/`)
      }

    // console.log(book.photo,"Books")
  return isLoading===true ? "Loading" : <div class="product bookContainer" onClick={goToDetail}>
  <div class="product-header">
      <img src={book.photo} alt="" />

      <ul class="icons">
          {/* <span><i class="bx bx-heart"></i></span> */}
          {/* <span><i class="bx bx-shopping-bag" onClick={}></i></span> */}
          {/* <span><i class="bx bx-search"></i></span> */}
      </ul>
  </div>
  <div class="product-footer">
      <h3>{book.name}</h3>
      <div class="rating">
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star"></i>
          <i class="bx bx-star"></i>
      </div>
      <h4 class="price">Rs {book.price}</h4>
      {/* {!owned && !ordered && <Button buttonname="Buy" className="btn btn-primary" book={book} isDetail={isDetail} />} */}
     <Button buttonname={buttonName} className={buttonclassName} checkout={checkout} book={book} inCart={inCart} onRemove={handleRemoveCartItem} index={index} orderid={orderid}/>
  </div>
</div>
    
    
}