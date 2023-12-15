import React, { useState } from 'react';
import * as St from '../../styled-component/home/Sthome';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const HomeComponentTop = () => {
   const [title, setTitle] = useState<string>('');
   const [content, setContent] = useState<string>('');

   const queryClient = useQueryClient();

   const createTodo = async (newTodo: any) => {
      const res = await axios.post('http://localhost:4001/todos', newTodo);
      return res.data;
   };
   const mutation = useMutation(createTodo, {
      onSuccess: () => {
         queryClient.invalidateQueries('todos');
      },
   });

   // 그냥 e.target.value 로하면 에러남
   //e: React.ChangeEvent<HTMLInputElement 넣어줘야함
   const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
   };
   const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
      setContent(e.target.value);
   };
   const submitTodo = async (e: React.FormEvent<HTMLFormElement>) => {
      const uuid = uuidv4();
      e.preventDefault();
      try {
         const newTodo = {
            id: uuidv4(),
            title,
            contents: content,
            isDone: false,
         };
         mutation.mutate(newTodo);
         setTitle('');
         setContent('');
      } catch (e) {
         console.log(e);
      }
   };
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
            <form onSubmit={submitTodo}>
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
