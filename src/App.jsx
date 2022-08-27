import { useState } from 'react';

// import image
import logo from "./assets/images/logo.svg";

// Components
import Display from './components/Display';
import Form from './components/Form';

function App() {
  return (
    <div className="wrapper">
      <img src={logo} alt="Splitter Logo" />
      <div className="container">
        <Form
        />
        <Display />
      </div>
    </div>
  )
}

export default App
