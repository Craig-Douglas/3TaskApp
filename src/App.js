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
      text: "blah blah blah, example job",
      day: " Tues 25th Jillember",
      reminder: true
    },
  { 
      id: 1,
      text: "blah another example blah blah...",
      day: "Friday 4PM.",
      reminder: true
    },

    {
      id: 3,
      text: "If I'm all thats left..... go drink a beer!!",
      day: "Now, right now.",
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
        "ADD SOME JOBS - GET THEM DONE - GET A BEER!"
      )}
    </div>
  );
}
 