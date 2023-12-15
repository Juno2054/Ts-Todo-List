import axios from 'axios';
import { Todo } from '../types/TodoType';
const apiUrl = process.env.REACT_APP_SERVER_URL;
console.log(apiUrl);
export const fetchTodos = async () => {
   const res = await axios.get(`${apiUrl}/todos`);
   return res.data;
};
export const createTodo = async (newTodo: any) => {
   const res = await axios.post(`${apiUrl}/todos`, newTodo);
   return res.data;
};

export const deleteTodo = async (id: string) => {
   await axios.delete(`${apiUrl}/todos/${id}`);
};
export const updateTodo = async ({ id, data }: { id: string; data: Partial<Todo> }) => {
   const res = await axios.patch(`${apiUrl}/todos/${id}`, data);
   return res.data;
};
