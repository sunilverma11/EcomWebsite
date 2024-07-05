import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faSignIn,faCartShopping,faUser,faHeart,faSignOut } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
      <div style={{zIndex:'10'}}>        
        <div style={{position:'absolute',alignItems:'center',width:'100%',height:'60px',backgroundColor:'white',display:'flex',justifyContent:'end'}}>
          <div style={{width:'100%',textAlign:'left',paddingLeft:'5px'}}>
            <h3>Solesphere</h3>
          </div>
          <div style={{display:'flex',width:'200px',justifyContent:'space-evenly'}}>
          <p onClick={()=>{}}><FontAwesomeIcon icon={faPhone} /></p>
          <p onClick={()=>{}}><FontAwesomeIcon icon={faSignIn} /></p>
          <p onClick={()=>{}}><FontAwesomeIcon icon={faUser} /></p>
          <p onClick={()=>{}}><FontAwesomeIcon icon={faHeart} /></p>
          <p onClick={()=>{}}><FontAwesomeIcon icon={faCartShopping} /></p>
          <p onClick={()=>{}}><FontAwesomeIcon icon={faSignOut} /></p>
          </div>
          
        </div>
      </div>
    );
  }
  export default NavBar;