import * as St from '../../styled-component/home/Sthome';
import { Todo } from '../../types/TodoType';
import { fetchTodos } from '../../Api/api';
import { useQuery } from 'react-query';
import { useDeleteMutation, useUpdateMutation } from '../../Hook/hook';
const HomeComponentBottom = () => {
   const {
      data: fetchdTodos,
      isLoading,
      error,
   } = useQuery('todos', fetchTodos) as {
      data: Todo[] | [Todo];
      isLoading: boolean;
      error: Error | null;
   };
   const updateMutation = useUpdateMutation();
   const deleteMutation = useDeleteMutation();

   const handleComplete = (id: string, todo: Todo) => {
      updateMutation.mutate({ id, data: { ...todo, isDone: !todo.isDone } });
   };
   const handleDelete = (id: string) => {
      if (window.confirm('정말 삭제할거에요?')) {
         deleteMutation.mutate(id);
      }
   };

   if (isLoading) return <p>'Loading...'</p>;
   if (error) return <p>{error.message}</p>;
   return (
      <St.MiddleHomeContainer>
         {fetchdTodos.map(
            (todo: Todo) =>
               todo.isDone === true && (
                  <St.MiddleHomeDiv key={todo.id}>
                     <St.MiddleHomeTitleFlex>
                        <St.MiddleHomeTitle>
                           <St.H2>{todo.title}</St.H2>
                        </St.MiddleHomeTitle>
                        <St.MiddleHomeTitle>
                           <St.P>{todo.contents}</St.P>
                        </St.MiddleHomeTitle>
                     </St.MiddleHomeTitleFlex>
                     <St.ButtonContainer>
                        <St.Button color='#ff001e' hoverColor='#7e0210' onClick={() => handleComplete(todo.id, todo)}>
                           {todo.isDone ? '취소' : '완료'}
                        </St.Button>
                        <St.Button color='#007bff' hoverColor='#014084' onClick={() => handleDelete(todo.id)}>
                           삭제
                        </St.Button>
                     </St.ButtonContainer>
                  </St.MiddleHomeDiv>
               ),
         )}
      </St.MiddleHomeContainer>
   );
};

export default HomeComponentBottom;
