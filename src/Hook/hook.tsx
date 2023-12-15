import { Todo } from '../types/TodoType';
import { useMutation, useQueryClient } from 'react-query';
import { updateTodo, deleteTodo } from '../Api/api';

export const useUpdateMutation = () => {
   const queryClient = useQueryClient();

   return useMutation(updateTodo, {
      onSuccess: () => {
         queryClient.invalidateQueries('todos');
      },
   });
};

export const useDeleteMutation = () => {
   const queryClient = useQueryClient();

   return useMutation(deleteTodo, {
      onSuccess: () => {
         queryClient.invalidateQueries('todos');
      },
   });
};
