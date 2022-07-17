import React from 'react';
import './App.css';
// import { Knob, Arc } from 'rc-knob'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>title</div>
        {/* <div>
          <Knob 
            size={100}  
            angleOffset={220} 
            angleRange={280}
            min={0}
            max={100}
            onChange={value => console.log(value)}
          >
            <Arc 
              arcWidth={5}
              color="#FC5A96"
              background="#180094"
            />
          </Knob>
        </div> */}
      </header>
    </div>
  );
}

export default App;
