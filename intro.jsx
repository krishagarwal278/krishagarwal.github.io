import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const [text, setText] = useState(""); // Holds the displayed text
  const [index, setIndex] = useState(0); // Tracks the current character

  const introText = "Hi, I'm Krish Agarwal. Welcome to my Personal Portfolio!";

  useEffect(() => {
    if (index < introText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + introText[index]); // Add the next character
        setIndex((prev) => prev + 1);
      }, 100); // Adjust the typing speed here
      return () => clearTimeout(timeout);
    }
  }, [index, introText]);

  return (
    <h1 style={styles.typewriter}>{text}<span style={styles.cursor}>|</span></h1>
  );
};

const styles = {
  typewriter: {
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "'Courier New', Courier, monospace",
    textAlign: "center",
    color: "#333",
    margin: "20px auto",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  cursor: {
    display: "inline-block",
    animation: "blink 1s infinite",
  },
};

// CSS for cursor blinking
const globalStyles = document.createElement("style");
globalStyles.innerHTML = `
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
`;
document.head.appendChild(globalStyles);

export default Typewriter;
