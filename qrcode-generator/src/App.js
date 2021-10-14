import './App.css';
import {useState} from 'react';
import QRCodeCanvas from './QRCodeCanvas';

function App() {

  const [text, setText] = useState ("Digite aqui ")
  return (
    
    <div className="App">
      <h1>QR Code Generator ProgramadorBR</h1>
      <input onChange={(element) => { setText(element.target.value)}} 
      value={text}></input>
      <QRCodeCanvas text={text}></QRCodeCanvas>
    </div>
  );
}

export default App;
