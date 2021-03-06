import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './NavigationBar.css';


const NavigationBar = () => {
   const [user] = useAuthState(auth);

   const logoutHandler = async () => {
      await signOut(auth);
   }

   return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
         <div className="container">
            <NavLink className="navbar-brand navBrand" to="/">EC-House</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                     <NavLink className={({ isActive }) => isActive ? "nav-link text-info" : "nav-link text-dark"} aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className={({ isActive }) => isActive ? "nav-link text-info" : "nav-link text-dark"} to="/blogs">Blogs</NavLink>
                  </li>
               </ul>
               <ul className="navbar-nav mb-2 mb-lg-0">
                  {
                     !user ? <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "nav-link text-info" : "nav-link text-dark"} aria-current="page" to="/login">Login</NavLink>
                     </li>
                        :
                        <>
                           <li className="nav-item">
                              <NavLink className={({ isActive }) => isActive ? "nav-link text-info" : "nav-link text-dark"} to={'/inventory'}>Manage Items</NavLink>
                           </li>
                           <li className="nav-item">
                              <NavLink className={({ isActive }) => isActive ? "nav-link text-info" : "nav-link text-dark"} to={'/add-item'}>Add Item</NavLink>
                           </li>
                           <li className="nav-item">
                              <NavLink className={({ isActive }) => isActive ? "nav-link text-info" : "nav-link text-dark"} to={'/my-item'}>My Items</NavLink>
                           </li>
                           <li className="nav-item">
                              <button className="bt9 bt9_close" onClick={logoutHandler}> <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon> Logout</button>
                           </li>
                        </>
                  }
               </ul>
            </div>
         </div>
      </nav>

   );
};

export default NavigationBar;