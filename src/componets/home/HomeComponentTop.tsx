import React, { useState } from 'react';
import * as St from '../../styled-component/home/Sthome';
import { useDispatch, useSelector } from 'react-redux';
import { setTodo } from '../../redux/modules/home/homeSlice';
import { v4 as uuidv4 } from 'uuid';

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
   const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const uuid = uuidv4();
      dispatch(
         setTodo({
            id: uuid,
            title,
            contents: content,
            isDone: false,
         }),
      );
      setTitle('');
      setContent('');
   };
   return (
      <St.Container>
         <St.TopHomeContainer>
            <form onSubmit={onSubmit}>
               <St.TopHomeDiv>
                  <St.H2>제목</St.H2>
                  <St.Input value={title} onChange={onChangeTitle} />
                  <St.H2>내용</St.H2>
                  <St.Input value={content} onChange={onChangeContent} />
                  <div>
                     <St.Button type='submit'>작성</St.Button>
                  </div>
               </St.TopHomeDiv>
            </form>
         </St.TopHomeContainer>
      </St.Container>
   );
};

export default HomeComponentTop;
