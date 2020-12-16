import React from 'react';
import Router from '@/router/Router';

function App() {
  const [isAppReady, toggleAppReady] = React.useState(false);

  React.useEffect(function () {
    toggleAppReady(true);
  }, []);

  return isAppReady
    ? <Router />
    : null;
}

export default App;
