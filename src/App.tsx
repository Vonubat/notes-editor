import { Background } from 'components/ui';
import { Header, Main } from 'layout';
import React from 'react';

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Background />
    </div>
  );
};
