import React, { useState } from "react";
import "./styles.css";

export default function App() {
  //emoji database
  const emojiDictionary = {
    "😁": "A yellow face with smiling eyes and full-toothed grin",
    "🥰": "Smiling Face with Hearts",
    "😍": "Smiling Face with Heart-Eyes",
    "🤩": "Star-Struck",
    "😘": "Face Blowing a Kiss",
    "😗": "Kissing Face",
    "🐵": "Monkey Face",
    "🐒": "Monkey",
    "🦍": "Gorilla",
    "🐶": "Dog Face"
  };

  var emojisList = Object.keys(emojiDictionary);

  var [meaning, setmeaning] = useState("");

  //on change event handler
  function eventHandler() {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, not available in our database";
    }

    setmeaning(meaning);
  }

  //on click event handler
  function emojiClickHandler(item) {
    var meaning = emojiDictionary[item];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>😁The Emoji Interpreter😎</h1>
      <input onChange={eventHandler}></input>
      <div className="output-div">
        {" "}
        <h2>{meaning}</h2>
      </div>
      <h3 className="clickh2">Click any of the following emoji</h3>

      {emojisList.map(function (item) {
        return (
          <span onClick={() => emojiClickHandler(item)} className="emojilist">
            {item}
          </span>
        );
      })}
    </div>
  );
}
