import * as St from '../styled-component/home/Sthome';
import HomeComponentTop from '../componets/home/HomeComponentTop';
import HomeComponentMiddle from '../componets/home/HomeComponentMiddle';
import HomeComponentBottom from '../componets/home/HomeComponentBottom';
import { useQuery } from 'react-query';
import { fetchTodos } from '../Api/api';
function Home() {
   const { data: fetchdTodos, isLoading, error } = useQuery('todos', fetchTodos);

   return (
      <St.Container>
         {/* 상단 컴포넌트 */}
         <HomeComponentTop />
         <St.HomeMiddleDiv>
            <St.DivTitle>
               <St.H2>진행중인일</St.H2>
            </St.DivTitle>
            {/* 중단 컴포넌트 */}
            <HomeComponentMiddle />
         </St.HomeMiddleDiv>
         <St.HomeBottomDiv>
            <St.DivTitle>
               <St.H2>완료</St.H2>
            </St.DivTitle>
            {/* 하단 컴포넌트 */}
            <HomeComponentBottom />
         </St.HomeBottomDiv>
      </St.Container>
   );
}

export default Home;
