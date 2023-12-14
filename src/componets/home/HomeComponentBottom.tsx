import React, { useEffect } from 'react';
import * as St from '../../styled-component/home/Sthome';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, deleteTodo, setTodo } from '../../redux/modules/home/homeSlice';
import { Todo } from '../../types/TodoType';
import { RootState } from '../../redux/config/configStore';
import axios from 'axios';

const HomeComponentBottom = () => {
   const dispatch = useDispatch();
   const todos = useSelector((state: RootState) => state.homeSlice);
   const handleComplete = (id: string) => {
      dispatch(toggleTodo(id));
      axios.patch(`http://localhost:4001/todos/${id}`, { isDone: true });
   };
   const handleDelete = (id: string) => {
      dispatch(deleteTodo(id));
      axios.delete(`http://localhost:4001/todos/${id}`);
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
                           <St.Button color='#ff001e' hoverColor='#7e0210' onClick={() => handleComplete(todo.id)}>
                              {todo.isDone ? '취소' : '완료'}
                           </St.Button>
                           <St.Button color='#007bff' hoverColor='#014084' onClick={() => handleDelete(todo.id)}>
                              삭제
                           </St.Button>
                        </St.ButtonContainer>
                     </St.MiddleHomeDiv>
                  </>
               ),
         )}
      </St.MiddleHomeContainer>
   );
};

export default HomeComponentBottom;
