import React,{useState,useEffect} from 'react'
import { apiBookDetailLookup, apiBooksLookup, apiCartBuyLookup, apicartLookup, apiOrderedBooksLookup, apiOwnedBooksLookup } from './lookup'
import { Book } from './detail'
import { Button } from './buttons'

export function BooksComponent(props){
    const [books,setBooks]=useState([])
    const handleBackendLookup=(response,status)=>{
        setBooks(response) 
        console.log("response",response,status)
    }
    useEffect(()=>{
        apiBooksLookup(handleBackendLookup)
    },[])
    return <React.Fragment>
                {books.map((item,index)=>{
                    return <Book book={item} key={`${index}-{item.id}`}/>
                })}
            </React.Fragment>
}

export function BookDetailComponent(props){
    const [book,setBook]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    // console.log("Props ",props.bookname)
    const handleBackendLookup=(response,status)=>{
        // console.log("Book Detail Lookup",response,status)
        setBook(response[0])
        setIsLoading(false)
    }
    useEffect(()=>{
        apiBookDetailLookup(props.bookname,handleBackendLookup)
    },[])
    return isLoading===true ? "" :<Book book={book} isDetail />
}

export function CartComponent(props){
    const [books,setBooks]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    let cost=0
    useEffect(()=>{
        apicartLookup(handleBackendCartLookup)
    },[])
    
    const handleBackendCartLookup=(response,status)=>{
        console.log("Cart Lookup ",response.usercart_set,status)
        setBooks(response.usercart_set)
        setIsLoading(false)
    }

    const handleRemoveCartItem=(index)=>{
        setBooks(books.filter(item => books.indexOf(item) !== index))
    }
    let bookids=books.map((item,index)=>{
        console.log(item.book.price)
        cost=cost+item.book.price
        // setTotalCost(item.book.price)    Going Infinite Loop
        return item.book.id
    })

    // books.map((item,index)=>{console.log(item.book)})
    return isLoading ? "" : bookids.length===0 ? <div className="text-muted">Cart Is Empty</div> :<div>
        {books.map((item,index)=>{
            return <Book book={item.book} key={index} index={index} inCart onRemove={handleRemoveCartItem} />
        })}
        {bookids.length!==0 && <Button buttonname="Buy All" className="btn btn-primary" cartbooks={bookids} />}
        {bookids.length!==0 && <div>Total Cost {cost}</div>}
    </div>
}

export function OwnedBooksComponent(props){
    const [orders,setOrders]=useState([])
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        apiOwnedBooksLookup(handleBackendLookup)
        setIsLoading(false)
    },[])

    const handleBackendLookup=(response,status)=>{
        setOrders(response)
        console.log(response)
        console.log("order",orders)
    }
    return isLoading ? "Loading" : <div> {orders.map((item,index)=>{
        return <div className="border border-secondary mt-3">
                <div>Order Id : {item.orderid}</div>
                <Book book={item.book} key={index} owned expiry={item.expiry} orderid={item.orderid}/>
                <div>Order Duration :{item.duration}</div>
                <div>OwnerFrom : {item.ownerfrom}</div>
                <div>Book Expiry : {item.expiry}</div>
                <div>Book Return Amount : {item.returnamount}</div>
                <div>Boom Return Date : {item.returndate}</div>
            </div>
    })}
    </div>
}

export function OrderedBooksComponent(props){
    const [orders,setOrders]=useState([])
    const [isLoading,setIsLoading]=useState(true)

    const handleBackendLookup=(response,status)=>{
        // console.log(response,status)
        setOrders(response)
        setIsLoading(false)
    }

    useEffect(()=>{
        apiOrderedBooksLookup(handleBackendLookup)
    },[])

    return isLoading ? "Loading" : <div>
        {orders.map((item,index)=>{
            return <div>
                <div>Order ID : {item.id}</div>
                <Book book={item.book} key={index} ordered deliveryDate={item.deliveryDate} />
                <div>Delivery Date : {item.deliveryDate} </div>
            </div>
        })}
    </div>
}