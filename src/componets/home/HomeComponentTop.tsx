import React, { useEffect, useState } from 'react';
import * as St from '../../styled-component/home/Sthome';
import { useDispatch, useSelector } from 'react-redux';
import { setTodo } from '../../redux/modules/home/homeSlice';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import styled from 'styled-components';

const HomeComponentTop = () => {
   const [title, setTitle] = useState<string>('');
   const [content, setContent] = useState<string>('');

   const dispatch = useDispatch();

   // 그냥 e.target.value 로하면 에러남
   //e: React.ChangeEvent<HTMLInputElement 넣어줘야함
   const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
   };
   const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
      setContent(e.target.value);
   };
   const fetchTodo = async (e: React.FormEvent<HTMLFormElement>) => {
      const uuid = uuidv4();
      e.preventDefault();
      try {
         const newTodo = {
            id: uuidv4(),
            title,
            contents: content,
            isDone: false,
         };
         const res = await axios.post('http://localhost:4001/todos', newTodo);
         console.log('res', res.data);
         dispatch(setTodo([res.data]));
         setTitle('');
         setContent('');
      } catch (e) {
         console.log(e);
      }
   };
   useEffect(() => {
      const fetchTodos = async () => {
         try {
            const res = await axios.get('http://localhost:4001/todos');
            dispatch(setTodo([...res.data]));
         } catch (e) {
            console.log(e);
         }
      };
      fetchTodos();
   }, [dispatch]);

   // const onSubmit = (e: React.FormEvent) => {
   //    e.preventDefault();
   //    const uuid = uuidv4();
   //    dispatch(
   //       setTodo([
   //          {
   //             id: uuid,
   //             title,
   //             contents: content,
   //             isDone: false,
   //          },
   //       ]),
   //    );
   //    setTitle('');
   //    setContent('');
   // };
   return (
      <St.Container>
         <St.TopHomeContainer>
            <form onSubmit={fetchTodo}>
               <St.TopHomeDiv>
                  <St.H2>제목</St.H2>
                  <St.Input value={title} onChange={onChangeTitle} />
                  <St.H2>내용</St.H2>
                  <St.Input value={content} onChange={onChangeContent} />
                  <div>
                     <St.Button color='#007bff' hoverColor='#02448a' type='submit'>
                        작성
                     </St.Button>
                  </div>
               </St.TopHomeDiv>
            </form>
         </St.TopHomeContainer>
      </St.Container>
   );
};

export default HomeComponentTop;
