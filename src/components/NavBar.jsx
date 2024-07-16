import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";
import { faPhone,faSignIn,faCartShopping,faUser,faHeart,faSignOut } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
      <div style={{color:'black'}}>        
        <div style={{position:'absolute',zIndex:'1',alignItems:'center',width:'100%',height:'60px',backgroundColor:'white',display:'flex',justifyContent:'end'}}>
          <div style={{textAlign:'left',paddingLeft:'5px',width:'100%'}}>
          <Link to="/home" style={{color:'black',textDecoration:'none',color:'green'}} ><h3>✺Solesphere✺</h3></Link>
          </div>
          <div style={{display:'flex',width:'200px',justifyContent:'space-evenly'}}>
          <p onClick={()=>{}}><FontAwesomeIcon icon={faPhone} /></p>
          <Link to="/signin" style={{color:'black'}} >
          <p><FontAwesomeIcon icon={faSignIn} /></p>
          </Link>
          <p onClick={()=>{}}><FontAwesomeIcon icon={faUser} /></p>
          <Link to="/wishlist" style={{color:'black',textDecoration:'none'}} ><p onClick={()=>{}}><FontAwesomeIcon icon={faHeart} /></p></Link>
          <Link to="/add-to-cart" style={{color:'black',textDecoration:'none'}} ><p onClick={()=>{}}><FontAwesomeIcon icon={faCartShopping} /></p></Link>
          <p onClick={()=>{}}><FontAwesomeIcon icon={faSignOut} /></p>
          </div>
          
        </div>
      </div>
    );
  }
  export default NavBar;