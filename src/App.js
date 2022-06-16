import './App.css';
import Padbank from './components/padbank';
import {bankOne, bankTwo} from './constants'
import { useState } from 'react';


function App() {
  const [power, setPower] = useState(false);
  const [banks, setBanks] = useState(false);
  const [displayValue, setDisplayValue] = useState('welcome');
  const [volume, setVolume] = useState('')
  const handleDisplay = (value) =>{
    setDisplayValue(value)
  }
  const handlePower =() =>{
    setPower(!power);
    power ? handleDisplay('power off') : handleDisplay('power on');
  }
  const handleBank = () =>{
    setBanks(!banks)
    banks ? handleDisplay('bank off') : handleDisplay('bank on');
  }
  const handleVolume =(e) =>{
    setVolume(e.target.value)
    handleDisplay(`${parseFloat(volume * 100)}`);
  }
  const bank = banks ? bankTwo : bankOne;
  return (
    <div className="App" id='drum-machine'>
        <Padbank bank= {bank} power={power} handleDisplay={handleDisplay} volume={volume} />
        <div className='setup'>
        <div className='power'>
          power
          <label id='switch'>
          <input type='checkbox' value={power} checked={power} onChange={handlePower} />
            <span className='slider' />
          </label>
        </div>
        <div className='display' id='display'>
          {displayValue}
          </div>
          <div className='volume'>
          <label id='switch'>
            <input type='range' min='0' step='0.1' max='1' value={volume} onChange={handleVolume} />
          </label>
        </div>
        <div className='bank'>
          bank
          <label id='switch'>
          <input type='checkbox' value={power} onChange={handleBank} checked={banks} />
            <span className='slider' />
          </label>
        </div>
        </div>
    </div>
  );
}

export default App;
