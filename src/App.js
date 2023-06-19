import { upload } from '@testing-library/user-event/dist/upload';
import { useState } from 'react';
import './App.css';
import CharSheet from './Components/CharSheet';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';


function App() {

  const [currentChars, setCurrentChars] = useState([]);

  console.log(currentChars)
  const addCharsheets = () => {
    console.log("clicked")
    setCurrentChars([...currentChars, {}])
  }


  const saveAllChars = async () => {
    // do api call to save the data
  }
 



  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise - Anusha Chokka</h1>
      </header>
      <section className="App-section">
        <div>

          <button onClick={(e) => { addCharsheets() }}>Add New Character</button>
          <button onClick={(e) => { setCurrentChars([]) }}>Reset All Characters</button>
          <button onClick={(e) => { }}>Save All Characters</button>
          {currentChars.map((char,index) => <CharSheet seq={index} key={index} chars={currentChars}/>)}



        </div>
      </section>
    </div>
  );
}

export default App;
