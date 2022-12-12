import { Background } from 'components/ui';
import { ContextProvider } from 'context/Context';
import { Header, Main } from 'layout';
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
