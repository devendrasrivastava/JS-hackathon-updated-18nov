import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useNavigate } from "react-router-dom";

export default function Header() {

    const username = JSON.parse(localStorage.getItem('userName'));
  // console.log(username)

  const navigate = useNavigate();

  function logout() {
    // localStorage.removeItem('jwt_token');
    // localStorage.clear();    // it will clear all tokens
    localStorage.removeItem('jwt_token');
    navigate("/registraion")
  }


  return (
    <div>
        
        <nav class="navbar navbar-expand-lg bg-light user-navbar fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand img-fluid" href="/"><img src="./assets/nw logo.png" alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse user-navbar-navbtn" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>

                        {
              localStorage.getItem('jwt_token') ?
                <>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/contactus">Contact Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/aboutus">About Us</Link>
                        </li>

                        </>

                :
                <>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/loginpage">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/signup">Sign Up</Link>
                        </li>
                        </>
}
                    </ul>
                </div>
            </div>

            {localStorage.getItem('jwt_token') ?
        <div class="dropdown">
          <button class="btn dropdown-toggle" id="user-details-on-header" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {username.firstname}
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/" onClick={logout}>Logout</a></li>
            {/* <li><a class="dropdown-item" href="/">Profile</a></li> */}

          </ul>
        </div>
        :null
}

        </nav>
    
    

    </div>
  )
}
