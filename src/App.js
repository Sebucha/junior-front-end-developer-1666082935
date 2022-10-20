import './App.css';

import BusinessContext from './components/BusinessContext/BusinessContext';
import ListingTasks from './components/ListingTasks/listingTasks';
import taskList from "./components/db"
import { useState } from 'react';




function App() {
  const [tasks, setTasks] = useState(taskList);
  const [selectedID, setSelectedID] = useState(
    tasks.find((el) => el.state.active)?.id
  );

  return (
    <div className="App">
      <ListingTasks
        tasks={tasks}
        setTasks={setTasks}
        setSelectedID={setSelectedID}
        
      />
      <BusinessContext
        context={tasks.find((el) => el.id === selectedID)?.bussinesContext}
      />
    </div>
  );
}

export default App;
