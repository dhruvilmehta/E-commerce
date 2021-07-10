import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BooksComponent,BookDetailComponent,CartComponent } from './books';
import { OrderedBooksComponent, OwnedBooksComponent ,LogoutComponent,  CheckoutComponent, SearchComponent} from './books/component';
import { LoginParentComponent } from './user/login';
import { ProfileComponent } from './profile';

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
