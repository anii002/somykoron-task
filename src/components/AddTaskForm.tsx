import React, { useState } from 'react';
import { Task } from '../types';

interface AddTaskFormProps {
  addTask: (task: Task) => void;
}

function AddTaskForm({ addTask }: AddTaskFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    const newTask: Task = {
      id: Date.now(),
      title: title
    };
    addTask(newTask);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col md:flex-row">
    <input
      type="text"
      placeholder="Add a new task..."
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="border border-gray-400 px-4 py-2 rounded-md mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
    />
    <button type="submit" className="bg-blue-500 hover:bg-slate-600 hover:text-[#ffffff] text-white px-4 py-2 rounded-md w-full md:w-auto">Add Task</button>
  </form>
  
  );
}

export default AddTaskForm;

