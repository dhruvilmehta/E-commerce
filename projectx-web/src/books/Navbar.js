import React, { useEffect,useState } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom';

export function Navbar() {
    const [token, setToken] = useState(localStorage.getItem("token"))
    useEffect(() => {
        const menu = document.querySelector(".menu");
        const navOpen = document.querySelector(".hamburger");
        const navClose = document.querySelector(".close");

        console.log("Navbar JS")

        const navLeft = menu.getBoundingClientRect().left;
        navOpen.addEventListener("click", () => {
            if (navLeft < 0) {
                menu.classList.add("show");
                document.body.classList.add("show");
                navBar.classList.add("show");
            }
        });

        navClose.addEventListener("click", () => {
            if (navLeft < 0) {
                menu.classList.remove("show");
                document.body.classList.remove("show");
                navBar.classList.remove("show");
            }
        });

        // Fixed Nav
        const navBar = document.querySelector(".nav");
        const navHeight = navBar.getBoundingClientRect().height;
        window.addEventListener("scroll", () => {
            const scrollHeight = window.pageYOffset;
            if (scrollHeight > navHeight) {
                navBar.classList.add("fix-nav");
            } else {
                navBar.classList.remove("fix-nav");
            }
        });

        // Scroll To
        const links = [...document.querySelectorAll(".scroll-link")];
        links.map(link => {
            if (!link) return;
            link.addEventListener("click", e => {
                e.preventDefault();

                const id = e.target.getAttribute("href").slice(1);

                const element = document.getElementById(id);
                const fixNav = navBar.classList.contains("fix-nav");
                let position = element.offsetTop - navHeight;

                window.scrollTo({
                    top: position,
                    left: 0,
                });

                navBar.classList.remove("show");
                menu.classList.remove("show");
                document.body.classList.remove("show");
            });
        });

        gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
        gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
        gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
        gsap.from(".hero-content h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
        gsap.from(".hero-content h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
        gsap.from(".hero-content a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });

        let navbar = document.querySelector(".nav-list")
        // const token = localStorage.getItem("token")
        
        // if (token) {
        //     navbar.innerHTML = `
        // <li class="nav-item">
        //   <Link to="/" class="nav-link">Home</Link>
        // </li>
        // <li class="nav-item">
        //   <a href="/orders/" class="nav-link">Your Orders</a>
        // </li>
        // <li class="nav-item">
        //   <a href="/profile/" class="nav-link">Your Profile</a>
        // </li>
        // <li class="nav-item">
        //   <a href="/ownedBooks/" class="nav-link">Owned Books</a>
        // </li>
        // <li class="nav-item">
        //   <a href="/logout/" class="nav-link">Logout</a>
        // </li>
        // <li class="nav-item">
        //   <Link to="/cart/" class="nav-link icon"><i class="bx bx-shopping-bag"></i></Link>
        // </li>
        // `
        // } else {
        //     navbar.innerHTML = `
        // <li class="nav-item">
        //   <a href="/login/" class="nav-link">Login</a>
        // </li>
        // <li class="nav-item">
        //   <a href="#about" class="nav-link">About</a>
        // </li>
        // <li class="nav-item">
        //   <a href="#contact" class="nav-link">Contact</a>
        // </li>
        // `
        // }
    }, [])


    return token ? <nav class="nav">
        <div class="navigation container">
            <div class="logo">
                <h1>ProjectX</h1>
            </div>

            <div class="menu">
                <div class="top-nav">
                    <div class="logo">
                        <h1>ProjectX</h1>
                    </div>
                    <div class="close">
                        <i class="bx bx-x"></i>
                    </div>
                </div>

                {/* <ul class="nav-list"> */}
                    <LoggedInNavbar />
                    {/* <li class="nav-item">
            <a href="index.html" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="product.html" class="nav-link">Products</a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">Contact</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">Account</a>
          </li>
          <li class="nav-item">
            <a href="cart.html" class="nav-link icon"><i class="bx bx-shopping-bag"></i></a>
          </li> */}
                {/* </ul> */}
            </div>

            <div class="hamburger">
                <i class="bx bx-menu"></i>
            </div>
        </div>
    </nav> : <nav class="nav">
        <div class="navigation container">
            <div class="logo">
                <h1>ProjectX</h1>
            </div>

            <div class="menu">
                <div class="top-nav">
                    <div class="logo">
                        <h1>ProjectX</h1>
                    </div>
                    <div class="close">
                        <i class="bx bx-x"></i>
                    </div>
                </div>

                {/* <ul class="nav-list"> */}
                    <LoggedOutNavbar />
                    {/* <li class="nav-item">
            <a href="index.html" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="product.html" class="nav-link">Products</a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">Contact</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">Account</a>
          </li>
          <li class="nav-item">
            <a href="cart.html" class="nav-link icon"><i class="bx bx-shopping-bag"></i></a>
          </li> */}
                {/* </ul> */}
            </div>

            <div class="hamburger">
                <i class="bx bx-menu"></i>
            </div>
        </div>
    </nav>
}

function LoggedInNavbar(){
    return <ul class="nav-list">
        <li class="nav-item">
          <Link to="/" class="nav-link">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/orders" class="nav-link">Your Orders</Link>
        </li>
        <li class="nav-item">
          <Link to="/profile" class="nav-link">Your Profile</Link>
        </li>
        <li class="nav-item">
          <Link to="/ownedBooks" class="nav-link">Owned Books</Link>
        </li>
        <li class="nav-item">
          <Link to="/cart" class="nav-link">Cart</Link>
        </li>
        <li class="nav-item">
          <Link to="/logout" class="nav-link">Logout</Link>
        </li>
    </ul>
}

function LoggedOutNavbar(){
    return <ul class="nav-list">
        <li class="nav-item">
          <Link to="/login" class="nav-link">Login</Link>
        </li>
        <li class="nav-item">
          <Link to="#about" class="nav-link">About</Link>
        </li>
        <li class="nav-item">
          <Link to="#contact" class="nav-link">Contact</Link>
        </li>
    </ul>
}

export default Navbar
