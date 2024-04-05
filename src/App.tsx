import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedPriority, setSelectedPriority] = useState<string>("");

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const priorityOptions = ["High", "Medium", "Low"];

  const handlePrioritySelect = (priority: string) => {
    setSelectedPriority(priority);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-1">
            <div className="p-4 transition-opacity duration-500 ease-in-out">
              <AddTaskForm addTask={addTask} />
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 ">
            <div className="p-4 transition-transform duration-500 ease-in-out transform translate-x-0">
              <Dropdown options={priorityOptions} onSelect={handlePrioritySelect} />
              <span className="text-gray-600 mt-2">
                {selectedPriority && `Selected Priority: ${selectedPriority}`}
              </span>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 shadow-lg rounded-md">
            <div className="p-4 transition-opacity duration-200 ease-in-out">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
