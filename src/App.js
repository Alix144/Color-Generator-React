import Content from "./Content";
import { useState } from "react";

function App() {
  const [text, setText] = useState("Empty Value")
  const [color, setColor] = useState("white")

 const handleText = (e) => {
  if(!e.target.value){
    setText("Empty Value")
    setColor("white")
  }else{
  setText(e.target.value)
  setColor(e.target.value)
  }
 }


  return (
    <div className="App">
      <Content
        text={text}
        setText={setText}
        handleText={handleText}
        color={color}
      />
    </div>
  );
}

export default App;
