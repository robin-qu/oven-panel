import { useState } from 'react';
import './App.css';
import { DisplayPanel } from './Components/DisplayPanel';
import { ModeKnob } from './Components/ModeComponents/ModeKnob';
import { VolumeKnob } from './Components/VolumeComponents/VolumeKnob';

function App() {
  const initialTime: Date = new Date();
  initialTime.setDate(0);
  initialTime.setMinutes(0);
  const initialTimeStamp = initialTime.getTime();

  // states
  const [mode, setMode] = useState(0);
  const [timeStamp, setTimeStamp] = useState(initialTimeStamp);
  const [temperature, setTemperature] = useState(0);
  const [isModifyingTime, setIsModifyingTime] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <ModeKnob 
          setMode={setMode} 
          setTimeStamp={setTimeStamp}
          setTemperature={setTemperature} 
        />
        <DisplayPanel 
          mode={mode} 
          timeStamp={timeStamp}
          temperature={temperature} 
          isModifyingTime={isModifyingTime} 
          setIsModifyingTime={setIsModifyingTime} 
        />
        <VolumeKnob 
          setTimeStamp={setTimeStamp}
          setTemperature={setTemperature} 
          isModifyingTime={isModifyingTime} 
        />
      </header>
    </div>
  );
}


export default App;
