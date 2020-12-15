import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiDictionary = {
    "🤪": "Zany face",
    "😉": "Winking",
    "🤩": "Star Struck",
    "😋": "Face Savoring Food",
    "🤫": "Shushing Face",
    "🤐": "Zipper Mouth",
    "🤔": "Thinking",
    "🤗": "Hugging"
  };
  const [meaning, setMeaning] = useState("");
  var emojisWeKnow = Object.keys(emojiDictionary);

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div style={{ margin: "auto" }} className="App">
      <h1>Emoji Interpreter</h1>
      <p style={{ color: "#783827" }}>
        Now, send an emoji without any backspace
        <span role="img" aria-label="wink">
          {" "}
          😉
        </span>{" "}
      </p>

      <input
        style={{ padding: "1rem", borderRadius: "1rem", width: "40%" }}
        onChange={emojiInputHandler}
      />
      <h2 style={{ color: "red" }}> {meaning} </h2>
      <h3 style={{ color: "#080086" }}>Emojis we Know </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ cursor: "pointer", padding: "0.5rem", fontSize: "2rem" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
