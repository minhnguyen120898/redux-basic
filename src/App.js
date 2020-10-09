import React from 'react';
import './App.css';
import Header from'./components/header';
import Main from './components/products/main';
import Sidebar from './components/sidebar/sideBar';

function App() {

  return (
    <div>
        <Header /> 
        <div>
          <Main />
          <Sidebar />
        </div>
    </div>
  );
}

export default App;
