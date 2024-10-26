"use client";

import React from 'react';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';

function TaskList({ onEdit }) {
    const tasks = useSelector((state) => state.tasks.tasks);

    if (!tasks.length) return <div className="empty">No tasks found</div>;

  return (
    <div className="w-full max-w-[400px]">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onEdit={onEdit} />
      ))}
    </div>
  )
}

export default TaskList