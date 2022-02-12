import { useState } from "react"
import { useNavigate } from "react-router"
import { apiAddtocartLookup, apiBookDetailBuyLookup, apiCartBuyLookup, apiReturnBooksLookup } from "./lookup"

export function Button(props){
    const {book,index,isDetail,inCart,onRemove,orderid,checkout}=props
    const navigate=useNavigate()
    // console.log(isDetail," Is Detail")
    // console.log(props.buttonname)
    // console.log("abcd ",props.cartbooks)
    const [actionName,setActionName]=useState(props.buttonname ? props.buttonname : null)
    // console.log("actionname ",actionName)
    const [className,setClassName]=useState(props.className ? props.className : null)
    // console.log(className," ClassName");
    const handleBackendAddtoCart=(response,status)=>{
        // console.log("Add To Cart ",response,status)
        if(status===404){
            if(response.detail==="Book Not Available"){
                alert("Book Not Available")
            }
        }
        if(status===400){
            if(actionName==="Buy"){
                // window.location.href="/cart"
                navigate('/cart')
            }
        }
        if(status===201){
            if(actionName==="Add To Cart"){
                setActionName("Remove")
                setClassName("btn btn-danger")
            }
            if(actionName==="Buy"){
                // setActionName("Remove")
                // setClassName("btn btn-danger")
                // window.location.href="/cart/"
                navigate('/cart')
            }
            else if(actionName==="Remove"){
                if(inCart===true || checkout===true){
                    // console.log("Remove")
                    onRemove(index)
                }
                else{
                    setActionName("Add To Cart")
                    setClassName("btn btn-primary")
                }
            }
        }
    }

    const handleBackendBuy=(response,status)=>{
        // console.log("BUY ",response,status)
        if(response.detail==="Book Not Available"){
            alert("Book Not Available")
        }
    }

    const handleCartBuyAll=(response,status)=>{
        // console.log("Cart Buy All",response,status)
        // console.log("Buy All Successfull ")
        if(status===201){
            alert("Order Placed Successfully")
        }
    }

    const handleReturnBook=(response,status)=>{
        // console.log(response,status)
        if(response.detail==="Book Not Delivered"){
            alert("Book Not Delivered")
        }
        else{
            setClassName("btn btn-secondary disabled")
            setActionName("Book Processing for Return")
        }
    }

    const handleButtonClick=(event)=>{
        // console.log("Button Click",event.target.textContent)
        let action=actionName
        event.preventDefault()
        event.stopPropagation()

        if(actionName==="Add To Cart"){
            action="Add"
            apiAddtocartLookup(book.id,action,handleBackendAddtoCart)
        }
        else if(actionName==="Remove"){
            action="Remove"
            apiAddtocartLookup(book.id,action,handleBackendAddtoCart)
        }
        else if(actionName==="Buy"){
            if(isDetail){
                // apiBookDetailBuyLookup(book.name,handleBackendBuy)
                action="Add"
                apiAddtocartLookup(book.id,action,handleBackendAddtoCart)
                // window.location.href="/checkout/"
            }
            else{
                window.location.href=`${book.name}/detail/`
            }
        }
        else if(actionName==="Buy All"){
            // apiCartBuyLookup(props.cartbooks,handleCartBuyAll)
            window.location.href="/checkout/"
        }
        else if(actionName==="Return Book"){
            apiReturnBooksLookup(orderid,handleReturnBook)
            // console.log(orderid,"order ID OnClick")
        }
    }

    return <button className={className} onClick={handleButtonClick}>{actionName}</button>
}