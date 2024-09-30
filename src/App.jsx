import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext"; // Adjust the path as necessary
import "./App.css";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>{`Current theme: ${theme}`}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
