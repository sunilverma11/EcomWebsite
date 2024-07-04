import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faSignIn,faCartShopping,faUser,faHeart } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
      <div style={{zIndex:'10'}}>        
        <div style={{position:'absolute',width:'100%',height:'60px',backgroundColor:'white',display:'flex',justifyContent:'end'}}>
          <div style={{width:'100%',textAlign:'left',paddingLeft:'5px'}}>
            <h3>Solesphere</h3>
          </div>
          <div style={{display:'flex',width:'200px',justifyContent:'space-evenly'}}>
          <p><FontAwesomeIcon icon={faHeart} type='regular' /></p>
          <p><FontAwesomeIcon icon={faCoffee} /></p>
          <p><FontAwesomeIcon icon={faUser} /></p>
          <p><FontAwesomeIcon icon={faCartShopping} /></p>
          <p><FontAwesomeIcon icon={faSignIn} /></p>
          </div>
          
        </div>
      </div>
    );
  }
  export default NavBar;