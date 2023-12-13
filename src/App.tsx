import React, { useEffect, useState } from 'react';
import type { 타입이름 } from './types/testType';
import Router from '../src/shared/Router';
import GlobalStyle from './styled-component/GlobaStyle';

const App = () => {
   return (
      <>
         <GlobalStyle />
         <Router />
      </>
   );
};
export default App;
