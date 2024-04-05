import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  deleteTask: (taskId: number) => void;
}

function TaskItem({ task, deleteTask }: TaskItemProps) {
  return (
    <li className="flex justify-between items-center border-b py-2 md:py-4">
      <span className="flex-1">{task.title}</span>
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} className="text-red-600 ml-4 md:ml-0 cursor-pointer" />
    </li>
  );
}

export default TaskItem;
