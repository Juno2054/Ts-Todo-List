import React from 'react';
import * as St from '../../styled-component/home/Sthome';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../redux/modules/home/homeSlice';
import { Todo } from '../../types/TodoType';
import { RootState } from '../../redux/config/configStore';

const HomeComponentBottom = () => {
   const dispatch = useDispatch();
   const todos = useSelector((state: RootState) => state.homeSlice);
   const handleComplete = (id: string) => {
      dispatch(toggleTodo(id));
   };
   const handleDelete = (id: string) => {
      dispatch(deleteTodo(id));
   };
   return (
      <St.MiddleHomeContainer>
         {todos.map(
            todo =>
               todo.isDone === true && (
                  <>
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
                           <St.Button onClick={() => handleComplete(todo.id)}>
                              {todo.isDone ? '취소' : '완료'}
                           </St.Button>
                           <St.Button onClick={() => handleDelete(todo.id)}>삭제</St.Button>
                        </St.ButtonContainer>
                     </St.MiddleHomeDiv>
                  </>
               ),
         )}
      </St.MiddleHomeContainer>
   );
};

export default HomeComponentBottom;
