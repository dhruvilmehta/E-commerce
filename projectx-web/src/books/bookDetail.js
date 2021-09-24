import React,{useState,useEffect} from 'react'
import { Button } from './buttons'

export function BookDetail(props){
    const {book}=props
    const [buttonName,setButtonName]=useState(book.does_exists_in_cart ? "Remove" : "Add To Cart")
    const [buttonClassName,setButtonClassName]=useState(book.does_exists_in_cart ? "btn btn-danger" : "btn btn-primary")

    return <section class="section product-detail">
    <div class="details container-md">
      <div class="left">
        <div class="main">
          <img src={book.photo} alt="" />
        </div>
        <div class="thumbnails">
          <div class="thumbnail">
            <img src={book.photo} alt="" />
          </div>
          <div class="thumbnail">
            <img src={book.photo} alt="" />
          </div>
          <div class="thumbnail">
            <img src={book.photo} alt="" />
          </div>
          <div class="thumbnail">
            <img src={book.photo} alt="" />
          </div>
        </div>
      </div>
      <div class="right">
        {/* <span>Home/books</span> */}
        <h1>{book.name}</h1>
        <div class="price">Rs {book.price}</div>
        
        <h3>Book Category: {book.type}</h3>
        <p> Book Description </p>
        <Button buttonname="Buy" className="btn btn-primary" book={book} isDetail />
        <Button buttonname={buttonName} className={buttonClassName} book={book} />
      </div>
    </div>
  </section>
}