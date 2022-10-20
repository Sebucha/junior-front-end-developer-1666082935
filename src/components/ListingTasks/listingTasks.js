import './listingTask.css'
import "../colors.css"
import {  BrowserRouter as Router, Link } from "react-router-dom";
import Task from '../Task';

export default function ListingTasks({ tasks, setTasks, setSelectedID }) {
  function manageTask(id, state, value) {
    const taskIndex = tasks.findIndex((el) => el.id === id);
    if (taskIndex < 0 || tasks[taskIndex].state.blocked) return;
    setSelectedID(taskIndex);

    // Reset all other entries
    const tasksCopy = tasks.map((el) => ({
      ...el,
      state: { ...el.state, [state]: !value },
    }));
    // apply active state to the one selected
    tasksCopy[taskIndex].state[state] = value;
    // overwrite the state with shallow copy
    setTasks(tasksCopy);
  }

  return (
    <Router>
      <div className="container">
        <header className="header">Your TASKS</header>
        <div className="tasksList">
          <table>
            <tbody>
              {tasks.map(({ id, title, state }) => (
                <Link to={"/&{id}"}>
                  <Task
                    key={id}
                    id={id}
                    title={title}
                    state={state}
                    manageTask={manageTask}
                  />
                </Link>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Router>
  );
}