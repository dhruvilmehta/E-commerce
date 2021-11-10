import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BooksComponent,BookDetailComponent,CartComponent } from './books';
import { OrderedBooksComponent, OwnedBooksComponent ,LogoutComponent,  CheckoutComponent, SearchComponent} from './books/component';
import { LoginParentComponent } from './user/login';
import { ProfileComponent } from './profile';
import {gsap} from "gsap";


const appEl = document.getElementById('root')
if(appEl){
  ReactDOM.render(<App />,appEl);
}


const e=React.createElement
const booksEl=document.getElementById('books')
if(booksEl){
  ReactDOM.render(e(BooksComponent,booksEl.dataset),booksEl);
}

const booksdetailEl=document.getElementById('bookdetail')
if(booksdetailEl){
  ReactDOM.render(e(BookDetailComponent,booksdetailEl.dataset),booksdetailEl);
}

const usercartEl=document.getElementById('usercart')
if(usercartEl){
  ReactDOM.render(e(CartComponent,usercartEl.dataset),usercartEl);
}

const ownedBooks=document.getElementById('ownedBooks')
if(ownedBooks){
  ReactDOM.render(e(OwnedBooksComponent,ownedBooks.dataset),ownedBooks);
}

const orderedBooks=document.getElementById('orderedBooks')
if(orderedBooks){
  ReactDOM.render(e(OrderedBooksComponent,orderedBooks.dataset),orderedBooks);
}


const login=document.getElementById('login')
if(login){
  ReactDOM.render(e(LoginParentComponent,login.dataset),login);
}

const logout=document.getElementById('logout')
if(logout){
  ReactDOM.render(e(LogoutComponent,logout.dataset),logout);
}

const profile=document.getElementById('profile')
if(profile){
  ReactDOM.render(e(ProfileComponent,profile.dataset),profile);
}

const checkout=document.getElementById('checkout')
if(checkout){
  ReactDOM.render(e(CheckoutComponent,checkout.dataset),checkout);
}
const search=document.getElementById('search')
if(search){
  ReactDOM.render(e(SearchComponent,search.dataset),search);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// const menu = document.querySelector(".menu");
// const navOpen = document.querySelector(".hamburger");
// const navClose = document.querySelector(".close");

// const navLeft = menu.getBoundingClientRect().left;
// navOpen.addEventListener("click", () => {
//   if (navLeft < 0) {
//     menu.classList.add("show");
//     document.body.classList.add("show");
//     navBar.classList.add("show");
//   }
// });

// navClose.addEventListener("click", () => {
//   if (navLeft < 0) {
//     menu.classList.remove("show");
//     document.body.classList.remove("show");
//     navBar.classList.remove("show");
//   }
// });

// // Fixed Nav
// const navBar = document.querySelector(".nav");
// const navHeight = navBar.getBoundingClientRect().height;
// window.addEventListener("scroll", () => {
//   const scrollHeight = window.pageYOffset;
//   if (scrollHeight > navHeight) {
//     navBar.classList.add("fix-nav");
//   } else {
//     navBar.classList.remove("fix-nav");
//   }
// });

// // Scroll To
// const links = [...document.querySelectorAll(".scroll-link")];
// links.map(link => {
//   if (!link) return;
//   link.addEventListener("click", e => {
//     e.preventDefault();

//     const id = e.target.getAttribute("href").slice(1);

//     const element = document.getElementById(id);
//     const fixNav = navBar.classList.contains("fix-nav");
//     let position = element.offsetTop - navHeight;

//     window.scrollTo({
//       top: position,
//       left: 0,
//     });

//     navBar.classList.remove("show");
//     menu.classList.remove("show");
//     document.body.classList.remove("show");
//   });
// });

// gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
// gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
// gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
// gsap.from(".hero-content h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
// gsap.from(".hero-content h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
// gsap.from(".hero-content a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });


{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script> */}