import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SimpleChatbot from './components/SimpleChatbot';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Bienvenido a nuestro sitio web</h1>
        <Routes>
          <Route path="/" element={<SimpleChatbot />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
