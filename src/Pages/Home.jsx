import React from 'react';
import background from '../pictures/dummyshoes.jpg'

function Home() {
    return (
      <div className="App" style={{position:'relative',zIndex:'-1'}}>
        <img src={background} alt="Home background"  style={{width:'100%'}}/>
      </div>
    );
  }
  export default Home;