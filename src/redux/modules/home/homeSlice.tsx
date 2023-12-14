import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../../types/TodoType';
const initialState: Todo[] = [];

const homeSlice = createSlice({
   name: 'home',
   initialState,
   reducers: {
      setTodo: (state, action: PayloadAction<Todo[]>) => {
         state.push(...action.payload);
      },
      toggleTodo: (state, action: PayloadAction<string>) => {
         const todo = state.findIndex(todo => todo.id === action.payload);
         state[todo].isDone = !state[todo].isDone;
      },
      deleteTodo: (state, action: PayloadAction<string>) => {
         const todo = state.findIndex(todo => todo.id === action.payload);
         state.splice(todo, 1);
      },
   },
});

export const { setTodo, toggleTodo, deleteTodo } = homeSlice.actions;

export default homeSlice.reducer;
