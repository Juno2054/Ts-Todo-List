import React, { useEffect, useState } from 'react';
import type { 타입이름 } from './types/testType';
import Router from '../src/shared/Router';
import GlobalStyle from './styled-component/GlobaStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
const App = () => {
   return (
      <>
         <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <Router />
         </QueryClientProvider>
      </>
   );
};
export default App;
