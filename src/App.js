import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimpleChatbot from './SimpleChatbot';
import Cursos from './Cursos'; // La página de cursos
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/" element={<h1>Bienvenido a la página principal</h1>} />
        </Routes>

        {/* Chatbot flotante */}
        <SimpleChatbot />
      </div>
    </Router>
  );
}

export default App;
