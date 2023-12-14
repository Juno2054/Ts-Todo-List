import React, { useEffect } from 'react';
import * as St from '../../styled-component/home/Sthome';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, setTodo, toggleTodo } from '../../redux/modules/home/homeSlice';
import { Todo } from '../../types/TodoType';
import { RootState } from '../../redux/config/configStore';
import axios from 'axios';

const HomeComponentMiddle = () => {
   const dispatch = useDispatch();
   // const fetchTodo = async () => {
   //    try {
   //       const res = await axios.get('http://localhost:4001/todos');
   //       dispatch(setTodo());
   //    } catch (e) {
   //       console.log(e);
   //    }
   // };
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
               todo.isDone === false && (
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
                           <St.Button color='#ff5e00' hoverColor='#843102' onClick={() => handleComplete(todo.id)}>
                              {todo.isDone ? '취소' : '완료'}
                           </St.Button>
                           <St.Button color='#007bff' hoverColor='#02448a' onClick={() => handleDelete(todo.id)}>
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

export default HomeComponentMiddle;
