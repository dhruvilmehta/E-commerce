import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BooksComponent, CartComponent,BookDetailComponent } from './books';
import { CheckoutComponent, LogoutComponent, OrderedBooksComponent, OwnedBooksComponent, SearchComponent } from './books/component';
import { LoginParentComponent } from './user/login';
import Navbar from './books/Navbar';
import { ProfileComponent } from './profile';

require('dotenv').config()

function App() {
  return (
    // <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<div id="books" class=""></div>} /> */}
          {/* <Route exact path="/cart" element={<div id="usercart" class=""></div>} /> */}
          <Route path="/" element={<BooksComponent />} />
          <Route path="/cart" element={<CartComponent />} />
          
          <Route exact path="/orders" element={<OrderedBooksComponent />} />
          <Route exact path="/ownedBooks" element={<OwnedBooksComponent />} />
          <Route exact path="/login" element={<LoginParentComponent />} />
          <Route exact path="/logout" element={<LogoutComponent />} />
          <Route exact path="/profile" element={<ProfileComponent />} />
          <Route exact path="/checkout" element={<CheckoutComponent />} />
          {/* <Route exact path="/" element={<div id="profile"></div>} /> */}
          {/* <Route exact path="/search/" element={<div id="search" data-query="Rich+Dad+Poor+Dad"></div>} /> */}
          <Route path="/search/query=:query" element={<SearchComponent />} />
          <Route path="/:bookname/detail" element={<BookDetailComponent />} />
          {/* <Route exact path="/" element={<div id="profile"></div>} /> */}
        </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
