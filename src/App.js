import "./index.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

export default function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 2,
      text: "Review Finances",
      day: " Today 10AM",
      reminder: true
    },
  { 
      id: 1,
      text: "Book Holiday",
      day: "Today 1PM.",
      reminder: true
    },

    {
      id: 3,
      text: "Property Maintenance",
      day: "Today 3PM.",
      reminder: true
    }
  ]);

  // Delete tasks
  const deleteTasks = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    // console.log("delete:", id);
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    // console.log("toggle:", id);
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">

      <Header
        onAdd={() => setShowAddTask
        (!showAddTask)}
        showAdd={showAddTask}
      />
     
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length ? (
        <Tasks tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder} />
      ) : (
        "Increase your productivity - complete 3 tasks per day!"
      )}
    </div>
  );
}
 