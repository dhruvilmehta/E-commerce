import React,{useState,useEffect} from 'react'
import { apiBookDetailLookup, apiBooksLookup, apiCartBuyLookup, apicartLookup, apiOrderedBooksLookup, apiOwnedBooksLookup, apiSearchLookup } from './lookup'
import { Book } from './detail'
import { Button } from './buttons'
import { ProfileComponent } from '../profile'
import { BookDetail } from './bookDetail'
import { CartItem } from './cartItem'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export function BooksComponent(props){
    const [books,setBooks]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const handleBackendLookup=(response,status)=>{
        // console.log("response",response,status)
        setBooks(response) 
        setIsLoading(false)
    }
    useEffect(()=>{
        apiBooksLookup(handleBackendLookup)
    },[])
    // console.log("Books ",books)
    
    return isLoading===true ? "Loading" : <section class="section all-products" id="products">
        <div class="top container">
            <h1>All Products</h1>
            <form>
                <select>
                    <option value="1">Defualt Sorting</option>
                    <option value="2">Sort By Price</option>
                    <option value="3">Sort By Popularity</option>
                    <option value="4">Sort By Sale</option>
                    <option value="5">Sort By Rating</option>
                </select>
                <span><i class='bx bx-chevron-down'></i></span>
            </form>
        </div>
        <div class="product-center container">
        {books.map((item,index)=>{
            return <Book book={item} key={index}/>
        })}
        </div>
    </section>
}

export function BookDetailComponent(props){
    const [book,setBook]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    const {bookname}=useParams()
    // console.log("Props ",props.bookname)
    const handleBackendLookup=(response,status)=>{
        // console.log("Book Detail Lookup",response,status)
        setBook(response[0])
        setIsLoading(false)
    }
    
    useEffect(()=>{
        apiBookDetailLookup(bookname,handleBackendLookup)
    },[])

    // return isLoading===true ? "Loading" :<Book book={book} isDetail />

    return isLoading===true ? "Loading" : <BookDetail book={book} />
}

export function CartComponent(props){
    const [books,setBooks]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    let cost=0
    useEffect(()=>{
        apicartLookup(handleBackendCartLookup)
    },[])
    
    const handleBackendCartLookup=(response,status)=>{
        // console.log("Cart Lookup ",response.usercart_set,status)
        setBooks(response.usercart_set)
        setIsLoading(false)
    }

    const handleRemoveCartItem=(index)=>{
        setBooks(books.filter(item => books.indexOf(item) !== index))
    }
    let bookids=books.map((item,index)=>{
        // console.log(item.book.price)
        cost=cost+item.book.price
        // setTotalCost(item.book.price)    Going Infinite Loop
        return item.book.id
    })

    // books.map((item,index)=>{console.log(item.book)})

    // return isLoading ? "" : bookids.length===0 ? <div className="text-muted">Cart Is Empty</div> :<div>
    //     {books.map((item,index)=>{
    //         return <Book book={item.book} key={index} index={index} inCart onRemove={handleRemoveCartItem} />
    //     })}
    //     {bookids.length!==0 && <Button buttonname="Buy All" className="btn btn-primary" cartbooks={bookids} />}  
    //     {bookids.length!==0 && <div>Total Cost {cost}</div>}
    // </div>

    return isLoading ? "" : bookids.length===0 ? <div className="text-muted">Cart Is Empty</div> : <div class="container-md cart">
        <table>
        <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
        </tr>
        {books.map((item,index)=>{
            return <CartItem book={item.book} key={index} index={index} inCart onRemove={handleRemoveCartItem} />
        })}
        </table>
        <div class="total-price">
        <table>
            <tr>
            <td>Total</td>
            <td>Rs {cost}</td>
            </tr>
        </table>
        <Link to="/checkout/" class="checkout btn">Proceed To Checkout</Link>

    </div>
    </div>
}

export function OwnedBooksComponent(props){
    const [orders,setOrders]=useState([])
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        apiOwnedBooksLookup(handleBackendLookup)
    },[])
    
    const handleBackendLookup=(response,status)=>{
        // console.log(response,status)
        if(status===500){

        }else{
            setOrders(response)
            // console.log(response,"Response")
        }
        setIsLoading(false)
    }

    return isLoading ? "Loading" : orders.length===0 ? "No Orders" : <div className="product-center container"> {orders.map((item,index)=>{
        return <div className="border border-secondary mt-3">
                <Book book={item.book} key={index} owned expiry={item.expiry} orderid={item.orderid} delivered={item.delivered}/>
                <div>Order Id : {item.orderid}</div>
                <div>Order Duration :{item.duration}</div>
                <div>OwnerFrom : {item.ownerfrom}</div>
                <div>Book Expiry : {item.expiry}</div>
                <div>Book Return Amount : {item.returnamount}</div>
                <div>Book Return Date : {item.returndate}</div>
            </div>
    })}
    </div>

    // return isLoading ? "Loading" : orders.length===0 ? "No Orders" : <section class="section all-products" id="products">
    //     <div>
    //      {orders.map((item,index)=>{
    //     return <div class="product-center container">
    //             <Book book={item.book} key={index} owned expiry={item.expiry} orderid={item.orderid} delivered={item.delivered}/>
    //             <div>Order Id : {item.orderid}</div>
    //             <div>Order Duration :{item.duration}</div>
    //             <div>OwnerFrom : {item.ownerfrom}</div>
    //             <div>Book Expiry : {item.expiry}</div>
    //             <div>Book Return Amount : {item.returnamount}</div>
    //             <div>Book Return Date : {item.returndate}</div>
    //             </div>
    // })}
    // </div>
    // </section>
}

export function OrderedBooksComponent(props){
    const [orders,setOrders]=useState([])
    const [isLoading,setIsLoading]=useState(true)

    const handleBackendLookup=(response,status)=>{
        // console.log(response,status)
        if(status===500){

        }else{
            setOrders(response)
        }
        setIsLoading(false)
    }

    useEffect(()=>{
        apiOrderedBooksLookup(handleBackendLookup)
    },[])

    return isLoading ? "Loading" : orders.length===0 ? "No Orders" : <div className="product-center container">
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
            // console.log(token,"TOKEN")
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

    let tokken=localStorage.getItem("token")

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
      }

    async function displayrazorPay(){
        const res=await loadScript()

        if(!res){
            alert("Failed")
            return
        }

        const data=await fetch(window.location.hostname==='localhost' ? "http://localhost:8000/payment/" : 'https://dhruvilmehta.pythonanywhere.com/payment/',{
            method:'POST',
            headers:{
                "Authorization":`Token ${tokken}`,
                'X-CSRFToken':getCookie('csrftoken')
            }
        }).then((res)=>res.json())
        // console.log(data)
        // const data=await fetchdata.json()

        const options = {
            "key": "rzp_test_VR2iva4ym2KHCY", // Enter the Key ID generated from the Dashboard
            "amount": data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "ProjectX",
            "description": "Test Transaction",
            // "image": "https://example.com/your_logo",
            "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response){
                apiCartBuyLookup(bookids,handleCartBuyAll)
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature)
            },
            "prefill": {
                "name": data.name,
                "email": data.email,
                "contact": data.contact
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        // console.log(data)
        var rzp1 = new window.Razorpay(options);
        // console.log(rzp1)
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });
        rzp1.open();
        // document.getElementById('rzp-button1').onclick = function(e){
        //     e.preventDefault();
        // }
    }

    const loadScript=()=>{
        return new Promise((resolve)=>{
            const script=document.createElement('script')
            script.src="https://checkout.razorpay.com/v1/checkout.js"
            document.body.appendChild(script)
            script.onload=()=>{
                resolve(true)
            }
            script.onerror=()=>{
                resolve(false)
            }
        }).catch(err=>console.log(err))
        
    }

    useEffect(()=>{
        apicartLookup(handleCartLookup)
    },[])

    const handleCartBuyAll=(response,status)=>{
        // console.log("Cart Buy All ",response,status)
        if(status===201){
            window.location.href="/orders/"
        }
        else if(status===406){
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
        <div className="product-center container">{cart.map((item,index)=>{
        return <Book book={item.book} key={index} index={index} checkout onRemove={handleRemoveCartItem} />
    })}
    </div>
    <div>Total Amount : {cost}</div>
    <button id='rzp-button1' className="btn btn-secondary" onClick={displayrazorPay}>Proceed to Payment</button>
    </div>
}

export function SearchComponent(){
    const {query}=useParams()
    // console.log(query," Query")
    const [searchResults,setSearchResults]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const handleBackendSearchResults=(response,status)=>{
        // console.log(response,status)
        if(status===404){

        }else{
            setSearchResults(response)
        }
        setIsLoading(false)
    }
    // console.log("search results ",searchResults)
    useEffect(()=>{
        apiSearchLookup(query,handleBackendSearchResults)
    },[query])
    return isLoading===true ? "Loading" : searchResults.length!==0 ? <div class="product-center container">
        {searchResults.map((item,index)=>{
            return <Book book={item} key={index} />
        })}
        </div> : "Not Found"
}