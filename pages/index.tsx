import React from 'react';
import Head from 'next/head';

import MainView from './mainView';

function MainPage(): JSX.Element {
  return (
    <div>
      <Head>
        <title>evercareFrontendTest</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainView />
    </div>
  );
}

export default MainPage;
