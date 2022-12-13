import { ContextProvider } from 'context/Context';
import { Header, Main } from 'layout';
import { Background } from 'components';
import React from 'react';

export const App = (): JSX.Element => {
  return (
    <ContextProvider>
      <Header />
      <Main />
      <Background />
    </ContextProvider>
  );
};
