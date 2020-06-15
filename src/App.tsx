import React, { Fragment, useState } from "react";
import "./App.css";

function App(): JSX.Element {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFontElement>) => {
    event.preventDefault();
    console.log("sending");
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setNewTask(e.target.value)} />
        <button>Save</button>
      </form>
    </Fragment>
  );
}

export default App;
