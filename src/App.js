import React, { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <Form isShow={isOpen} />
      <button onClick={isOpenHandler}>Открыть форму</button>
    </div>
  );
}

export default App;
