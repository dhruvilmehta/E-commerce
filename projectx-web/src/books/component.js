import React,{useState,useEffect} from 'react'
import { apiBookDetailLookup, apiBooksLookup, apiCartBuyLookup, apicartLookup, apiOrderedBooksLookup, apiOwnedBooksLookup, apiSearchLookup } from './lookup'
import { Book } from './detail'
import { Button } from './buttons'
import { ProfileComponent } from '../profile'

export function BooksComponent(props){
    const [books,setBooks]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const handleBackendLookup=(response,status)=>{
        console.log("response",response,status)
        setBooks(response) 
        setIsLoading(false)
    }
    useEffect(()=>{
        apiBooksLookup(handleBackendLookup)
    },[])
    console.log("Books ",books)
    return isLoading===true ? "Loading" :<React.Fragment>
                {books.map((item,index)=>{
                    return <Book book={item} key={index}/>
                })}
            </React.Fragment>
}

export function BookDetailComponent(props){
    const [book,setBook]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    // console.log("Props ",props.bookname)
    const handleBackendLookup=(response,status)=>{
        console.log("Book Detail Lookup",response,status)
        setBook(response[0])
        setIsLoading(false)
    }
    useEffect(()=>{
        apiBookDetailLookup(props.bookname,handleBackendLookup)
    },[])
    return isLoading===true ? "Loading" :<Book book={book} isDetail />
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
        // console.log(response)
        // console.log("order",orders)
    }
    return isLoading ? "Loading" : <div> {orders.map((item,index)=>{
        return <div className="border border-secondary mt-3 " >
                <div>Order Id : {item.orderid}</div>
                <Book book={item.book} key={index} owned expiry={item.expiry} orderid={item.orderid} delivered={item.delivered}/>
                <div>Order Duration :{item.duration}</div>
                <div>OwnerFrom : {item.ownerfrom}</div>
                <div>Book Expiry : {item.expiry}</div>
                <div>Book Return Amount : {item.returnamount}</div>
                <div>Book Return Date : {item.returndate}</div>
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
            return <div className="border border-secondary">
                <div>Order ID : {item.id}</div>
                <Book book={item.book} key={index} ordered deliveryDate={item.deliveryDate} />
                <div>Delivery Date : {item.deliveryDate} </div>
            </div>
        })}
    </div>
}

export function LogoutComponent(props){
    const [message,setMessage]=useState("Are You Sure You Want to Logout ? ")
    const [status,setStatus]=useState(true)
    const handleLogout=()=>{
        localStorage.setItem('token','')
        setMessage("Log Out Successfull")
        window.location.href='/'
        setStatus(false)
    }
    useEffect(()=>{
        let token=localStorage.getItem('token')
        if(token){
            setStatus(true)
            console.log(token,"TOKEN")
        }
        else{
            setStatus(false)
        }
    },[])
    return <div>
        <div>{message}</div>
        {status===true && <button onClick={handleLogout} className="btn btn-danger">Logout</button>}
        </div>
}

export function CheckoutComponent(props){
    const [cart,setCart]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    let cost=0
    const handleCartLookup=(response,status)=>{
        // console.log("Checkout Lookup ",response.usercart_set,status)
        if(status===201){
            setCart(response.usercart_set)
        }
        else{
            alert("CheckOut Component Error ")
        }
        setIsLoading(false)
    }

    const handleRemoveCartItem=(index)=>{
        setCart(cart.filter(item => cart.indexOf(item) !== index))
    }

    useEffect(()=>{
        apicartLookup(handleCartLookup)
    },[])

    const handleCartBuyAll=(response,status)=>{
        console.log("Cart Buy All ",response,status)
        if(status===201){
            window.location.href="/orders/"
        }
        if(status===406){
            alert("Profile Not Completed")
        }
        else{
            alert("Checkout Cart Buy Error ")
        }
    }

    let bookids=cart.map((item,index)=>{
        // console.log(item.book.price)
        cost=cost+item.book.price
        // setTotalCost(item.book.price)    Going Infinite Loop
        return item.book.id
    })
    
    const handleButtonPlaceOrder=()=>{
        apiCartBuyLookup(bookids,handleCartBuyAll)
    }

    return isLoading===true ? "Loading" : <div>
        <div className="text-warning">Note: Profile Should Be Completed Before Ordering</div>
        <ProfileComponent />
        <div>{cart.map((item,index)=>{
        return <Book book={item.book} key={index} index={index} checkout onRemove={handleRemoveCartItem} />
    })}
    </div>
    <div>Total Cost : {cost}</div>
    <button className="btn btn-secondary" onClick={handleButtonPlaceOrder}>Place Order</button>
    </div>
}

export function SearchComponent(props){
    const {query}=props
    const [searchResults,setSearchResults]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const handleBackendSearchResults=(response,status)=>{
        console.log(response,status)
        setSearchResults(response)
        setIsLoading(false)
    }
    console.log("search results ",searchResults)
    useEffect(()=>{
        apiSearchLookup(query,handleBackendSearchResults)
    },[])
    return isLoading===true ? "Loading" : <div>
        {searchResults.map((item,index)=>{
            // console.log(item)
            return <Book book={item} key={index} />
        })}
    </div>

}