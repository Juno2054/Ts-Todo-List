import styled from 'styled-components';
interface ButtonProps {
   color: string;
   hoverColor: string;
}

export const Div = styled.div``;

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   width: 100%;
   max-width: 1200px;
   min-width: 800px;
   margin: 0 auto;
   padding: 50px 20px;
   box-sizing: border-box;
`;
export const Button = styled.button<ButtonProps>`
   display: inline-block;
   padding: 10px 20px;
   font-size: 1em;
   text-align: center;
   color: #ffffff;
   background-color: ${(props: any) => props.color};
   /* background-color: #064992; */
   border: none;
   border-radius: 4px;
   cursor: pointer;
   transition: background-color 0.3s ease;
   &:hover {
      background-color: ${(props: any) => props.hoverColor};
   }
`;

export const H2 = styled.h2`
   font-size: 20px;
   font-weight: 600;
   padding: 10px;
   text-align: left;
`;

export const P = styled.p`
   font-size: 1.1em;
   font-weight: 600;
   text-align: center;
   margin-bottom: 10px;
`;

export const Input = styled.input`
   width: 30%;
   height: 40px;
   padding: 0 10px;
   font-size: 1em;
   border: 1px solid #ced4da;
   border-radius: 4px;
   box-sizing: border-box;
   transition: border-color 0.3s ease;
   &:focus {
      border-color: #007bff;
      outline: none;
   }
`;

export const TopHomeDiv = styled.div`
   width: 100%;
   margin-bottom: 20px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
   button {
      margin: 10px 10px 10px 10px;
   }
`;
export const TopHomeContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   flex-direction: column;
`;

export const MiddleHomeDiv = styled.div`
   width: 40%;
   margin: 2.5%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
`;
export const ButtonContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   Button {
      width: 100%;
      margin: 0 20px;
   }
`;

export const MiddleHomeContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-items: center;
`;
export const MiddleHomeTitle = styled.div`
   width: 100%;
   justify-content: center;
   align-items: center;
   padding: 3% 5%;
   h2 {
      text-align: center;
      max-width: 500px;
      width: 100%;
      margin: auto;
   }
   p {
      text-align: center;
      max-width: 500px;
      width: 100%;
   }
`;
export const MiddleHomeTitleFlex = styled.div`
   margin: 30px 0;
   width: 50%;
   justify-content: center;
   align-items: center;
`;
export const BottomHomeContainer = styled.div`
   margin-top: 40px;
   width: 40%;
   display: flex;
   justify-content: flex-start;
   flex-direction: row;
   align-items: center;
`;
export const HomeMiddleDiv = styled.div`
   margin-top: 40px;
   width: 100%;
`;
export const HomeBottomDiv = styled.div`
   margin-top: 40px;
   width: 100%;
`;

export const DivTitle = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-start;
`;
