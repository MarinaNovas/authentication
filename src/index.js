import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {LanguageProvider} from './context/context'

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider value='ru'>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
