'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/taskSlice';

export default function TaskItem({ task, onEdit }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="task-item flex justify-between items-center py-[10px] px-0 border-b border-gray-300">
      <input
        type="checkbox"
        checked={task.status === 'done'}
        onChange={handleToggle}
      />
      <span className='font-sans'>{task.name}</span>
      <div className='flex gap-[10px]'>
        <button onClick={() => onEdit(task.id, task.name)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
