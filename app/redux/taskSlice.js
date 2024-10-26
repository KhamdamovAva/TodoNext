import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now().toString(),
        name: action.payload,
        status: 'in-progress',
      });
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.status = task.status === 'done' ? 'in-progress' : 'done';
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, name } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.name = name;
      }
    },
  },
});

export const { addTask, toggleTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
