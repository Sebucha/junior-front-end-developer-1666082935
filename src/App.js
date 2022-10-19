import './App.css';

import BussinesContext from './components/BussinesContext';
import TasksList from './components/tasksList';

function App() {
  return (
    <div className="App">

      <TasksList/>
      <BussinesContext/>
    </div>
  );
}

export default App;
