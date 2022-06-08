import React from 'react';
import { Link } from 'react-router-dom';
 const  Nav = () =>{
    return(
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">Home</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
            <Link to="/Login" class="nav-link" >Login</Link>
            </li>
            <li class="nav-item">
            <Link to="/otp" class="nav-link" >Otp</Link>
            </li>
            <li class="nav-item">
              <Link to="/Register" class="nav-link" >Register</Link>
            </li>
            <li class="nav-item">
            <Link to="/logout" class="nav-link" >Logout</Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
       
          
        
    );

 };
 export default Nav;