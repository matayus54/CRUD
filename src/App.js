import "./App.css";
import { useState } from "react";
import FormatCrud from "./Projects/Crud/FormatCrud";

function App() {
  const [dark, setDark] = useState(false);
  const [color, setColor] = useState("dark");

  let HandlerTheme = () => {
    console.log("theme change of " + color);
    !dark ? setDark(true) : setDark(false);
    setColor(!dark ? "light" : "dark");
  };

  return (
    <header className={`App-header ${color}`} onDoubleClick={HandlerTheme}>
      <FormatCrud />
    </header>
  );
}

export default App;
