import { useState, useEffect } from "react";
import "./App.css";
import CharSheet from "./Components/CharSheet";
import axios from "axios";

function App() {
  const [currentChars, setCurrentChars] = useState([]);

  console.log(currentChars);
  const addCharsheets = () => {
    console.log("clicked");
    setCurrentChars([...currentChars, {}]);
  };

  useEffect(() => {
    getAllChars();
  }, []);

  const getAllChars = async () => {
    try {
      const res = await axios.get(
        "https://recruiting.verylongdomaintotestwith.ca/api/{{anusha358}}/character",
        currentChars
      );
      setCurrentChars(res);
    } catch (e) {
      window.alert(e);
    }
  };

  const saveAllChars = async () => {
    const data = JSON.stringify(currentChars);
    // do api call to save the data
    try {
      const res = await axios.put(
        "https://recruiting.verylongdomaintotestwith.ca/api/{{anusha358}}/character",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (e) {
      window.alert(e);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise - Anusha Chokka</h1>
      </header>
      <section className="App-section">
        <div>
          <button
            className="btn"
            onClick={(e) => {
              addCharsheets();
            }}
          >
            Add New Character
          </button>
          <button
            className="btn"
            onClick={(e) => {
              setCurrentChars([]);
            }}
          >
            Reset All Characters
          </button>
          <button
            className="btn"
            onClick={(e) => {
              saveAllChars();
            }}
          >
            Save All Characters
          </button>
          {currentChars.map((char, index) => (
            <CharSheet seq={index} key={index} chars={char} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
