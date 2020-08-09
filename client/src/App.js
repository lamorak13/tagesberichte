import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import Nav from './components/Nav';
import Hello from './components/Hello';
import CurrentReport from './components/CurrentReport';
import Chart from './components/Chart';
import Options from './components/Options';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Nav />
        <div className='main'>
          <Hello />
          <Options />
          <CurrentReport />
          <Chart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
