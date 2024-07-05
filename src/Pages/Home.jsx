import React from 'react';
import background from '../pictures/dummyshoes.jpg'
import { Button } from 'reactstrap';

function Home() {
    return (
      <div>
        <div className="App" style={{position:'absolute',zIndex:'-1'}}>
          <img src={background} alt="Home background"  style={{width:'100%'}}/>                  
        </div>
        <div style={{position:'relative',top:'200px',alignItems:'right',width:'100%'}}>
            <Button color="primary" >
              Shop Here
            </Button>
          </div>
      </div>
      
      
      
    );
  }
  export default Home;