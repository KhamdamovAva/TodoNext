"use client";

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/taskSlice';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

export default function Todo() {
  const [taskInput, setTaskInput] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const dispatch = useDispatch();

  const handleAddOrEditTask = () => {
    if (taskInput.trim()) {
      if (editTaskId) {
        dispatch(editTask({ id: editTaskId, name: taskInput }));
        setEditTaskId(null);
      } else {
        dispatch(addTask(taskInput));
      }
      setTaskInput('');
    }
  };

  const handleEdit = (id, name) => {
    setEditTaskId(id);
    setTaskInput(name);
  };

  return (
    <div className="max-w-[1440px] m-auto flex flex-col items-center p-[20px]">
      <AddTaskForm
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        onAddOrEdit={handleAddOrEditTask}
        isEditing={!!editTaskId}
      />
      <TaskList onEdit={handleEdit} />
    </div>
  );
}
