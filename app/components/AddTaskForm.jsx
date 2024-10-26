"use client";

import React from 'react'

function AddTaskForm({ taskInput, setTaskInput, onAddOrEdit, isEditing }) {
  return (
    <div className="mb-[20px] flex gap-[10px]">
      <input
        type="text"
        placeholder="Add a new task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={onAddOrEdit}>
        {isEditing ? 'Update Task' : 'Add Task'}
      </button>
    </div>
  )
}

export default AddTaskForm