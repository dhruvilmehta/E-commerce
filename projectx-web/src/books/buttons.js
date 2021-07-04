import { useState } from "react"
import { apiAddtocartLookup, apiBookDetailBuyLookup, apiCartBuyLookup, apiReturnBooksLookup } from "./lookup"

export function Button(props){
    const {book,index,isDetail,inCart,onRemove,orderid}=props
    // console.log(props.buttonname)
    // console.log("abcd ",props.cartbooks)
    const [actionName,setActionName]=useState(props.buttonname ? props.buttonname : null)
    // console.log("actionname",actionName)
    const [className,setClassName]=useState(props.className ? props.className : null)
    const handleBackendAddtoCart=(response,status)=>{
        console.log("Add To Cart ",response,status)
        if(status===201){
            if(actionName==="Add To Cart"){
                setActionName("Remove")
                setClassName("btn btn-danger")
            }
            else if(actionName==="Remove"){
                if(inCart===true){
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
        console.log("BUY ",response,status)
    }

    const handleCartBuyAll=(response,status)=>{
        console.log("Cart Buy All",response,status)
        console.log("Buy All Successfull ")
    }

    const handleReturnBook=(response,status)=>{
        console.log(response,status)
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
                apiBookDetailBuyLookup(book.name,handleBackendBuy)
            }
            else{
                window.location.href=book.name
            }
        }
        else if(actionName==="Buy All"){
            apiCartBuyLookup(props.cartbooks,handleCartBuyAll)
        }
        else if(actionName==="Return Book"){
            apiReturnBooksLookup(orderid,handleReturnBook)
            console.log(orderid,"order ID OnClick")
        }
    }

    return <button className={className} onClick={handleButtonClick}>{actionName}</button>
}