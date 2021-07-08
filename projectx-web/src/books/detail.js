import { Button } from "./buttons"
import { useState,useEffect } from "react"
import { apicartLookup } from "./lookup"

export function Book(props){
    const {book,index,className,isDetail,inCart,onRemove,owned,expiry,orderid,ordered,deliveryDate,delivered,checkout}=props
    const [buttonclassName,setButtonClassName]=useState(delivered===false ?  "btn btn-danger disabled" : owned ? expiry ? "btn btn-secondary disabled" : "btn btn-danger" : ordered ? "btn btn-danger disabled" : "btn btn-primary")
    const [buttonName,setButtonName]=useState(delivered===false ? "Book Not Delivered Yet" : owned ? expiry ? "Book Processing for Return" : "Return Book" :ordered ? `Estimated Delivery Date : ${deliveryDate}` : "Add To Cart")
    const [isLoading,setIsLoading]=useState(true)
    // console.log("Book",book)
    // console.log(isDetail)
    const handleRemoveCartItem=(index)=>{
      onRemove(index)
    }

    const handleCartLookup=(response,status)=>{
      // console.log("Cart Items ",response.usercart_set)
      if(status===403){
        // console.log("Errror")
      }
      else{
        let items=response.usercart_set
        items.forEach(element => {
          // console.log(element.book.id)
          if(element.book.id===book.id){
            setButtonClassName("btn btn-danger")
            setButtonName("Remove")
          }
        });
      }
      setIsLoading(false)
    }
      useEffect(()=>{
          apicartLookup(handleCartLookup)
      },[])
    
    // console.log("Button Name",buttonName)
    // console.log(owned)
    // console.log(orderid,"Order ID")
    return isLoading===true ? "Loading" :<div className={`${className} mt-3`}><div class="card h-100" style={{width: 18+'rem' }}>
    <img class="card-img-top" src="..." alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{book.name}</h5>
      <p class="card-text">Rs {book.price} Category: {book.type}</p>
      {!owned && !ordered && <Button buttonname="Buy" className="btn btn-primary" book={book} isDetail={isDetail} />}
      <Button buttonname={buttonName} className={buttonclassName} checkout={checkout} book={book} inCart={inCart} onRemove={handleRemoveCartItem} index={index} orderid={orderid}/>
    </div>
    </div>
  </div>
    
    
}