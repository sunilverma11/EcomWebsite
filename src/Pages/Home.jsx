import React from 'react';
import background from '../pictures/dummyshoes.jpg'
import { Button } from 'reactstrap';
import {Link} from "react-router-dom";
import NavBar from '../components/NavBar';

function Home() {
    return (
      <div>        
      <NavBar/>
        <div className="App" style={{position:'absolute',zIndex:'-1'}}>
          <img src={background} alt="Home background"  style={{width:'100%'}}/>                  
        </div>
        <div style={{position:'relative',top:'500px',alignItems:'right',width:'100%'}}>
            <div style={{textAlign:'right',paddingRight:'100px'}}>
            <Link to="/product"><Button color="primary">
              Shop Here
            </Button></Link>
            </div>            
        </div>
      </div>
      
      
      
    );
  }
  export default Home;