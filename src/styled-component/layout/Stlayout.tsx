import styled from 'styled-components';

export const Div = styled.div``;

export const Container = styled.div`
   margin-top: 50px;
   display: flex;
   flex-direction: column;
   width: 90%;
   min-height: 100vh;
   margin: 0 auto;
   max-width: 1200px;

   margin-bottom: 300px;
`;

export const Header = styled.header`
   width: 100%;
   height: 60px;
   background-color: #f8f9fa;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 20px;
   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

export const Footer = styled.footer`
   width: 100%;
   height: 50px;
   background-color: #f8f9fa;
   display: flex;
   justify-content: center;
   align-items: center;
   position: fixed;
   bottom: 0;
   box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.1);
   copyright {
      font-size: 14px;
      color: #868e96;
   }
`;
