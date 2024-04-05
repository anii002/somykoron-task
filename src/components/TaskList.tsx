import React from "react";
import { Task } from "../types";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  deleteTask: (taskId: number) => void;
}

function TaskList({ tasks, deleteTask }: TaskListProps) {
  return (
    <div className="w-full md:w-auto">
      <h2 className="text-xl font-semibold mb-2">Tasks</h2>
      <ul className="divide-y divide-gray-200">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
