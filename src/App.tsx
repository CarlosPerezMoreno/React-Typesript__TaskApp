import React, { useState } from "react";
import "./App.css";

type FormElement = React.FormEvent<HTMLFormElement>;
interface TaskElement {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [taskList, setTaskList] = useState<TaskElement[]>([]);

  const handleSubmit = (event: FormElement) => {
    event.preventDefault();
    addTask(newTask);
    console.log(taskList);
  };

  const addTask = (name: string) => {
    const addingTask: TaskElement[] = [...taskList, { name, done: false }];
    setTaskList(addingTask);
    setNewTask("");
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => setNewTask(e.target.value)}
                  value={newTask}
                  autoFocus
                />
                <button className="btn btn-success btn-block mt-2">Save</button>
              </form>
            </div>
          </div>
          {taskList.map((task: TaskElement, i: number) => (
            <div className="card card-body mt-2" key={i}>
              <h2 style={{ textDecoration: "line-through" }}>{task.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
