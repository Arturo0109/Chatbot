import React, { useState } from 'react';
import './SimpleChatbot.css';
import { useNavigate } from 'react-router-dom'; // Para manejar la navegación

const SimpleChatbot = () => {
  const [selectedOption, setSelectedOption] = useState(null); // Opción seleccionada por el usuario
  const navigate = useNavigate(); // Hook para navegación en React

  // Opciones predefinidas que el usuario verá inicialmente
  const predefinedQuestions = [
    'Hola',
    'Información sobre los cursos',
    'Información de los eventos',
    'Servicios de la secretaria',
    'Formas de contacto',
  ];

  // Función para manejar la selección de una opción
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // Función para mostrar el menú principal
  const handleBackToMenu = () => {
    setSelectedOption(null);
  };

  // Funciones que manejan cada opción seleccionada
  const renderResponse = () => {
    switch (selectedOption) {
      case 'Hola':
        return (
          <>
            <div className="bot-message">¡Bienvenido! Esta web te ayudará a encontrar información sobre cursos, eventos y más. 😊</div>
            <button onClick={handleBackToMenu}>Volver al menú principal</button>
          </>
        );
      case 'Información sobre los cursos':
        return (
          <>
            <div className="bot-message">
              Puedes encontrar más información sobre nuestros cursos{' '}
              <span className="link" onClick={() => navigate('/cursos')}>aquí</span>.
            </div>
            <button onClick={handleBackToMenu}>Volver al menú principal</button>
          </>
        );
      case 'Información de los eventos':
        return (
          <>
            <div className="bot-message">
              Aquí tienes un video sobre los próximos eventos:
              <div className="video-container">
                <iframe
                  width="250"
                  height="140"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Reemplazar con un video real
                  title="Video de eventos"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <button onClick={handleBackToMenu}>Volver al menú principal</button>
          </>
        );
      case 'Servicios de la secretaria':
        return (
          <>
            <div className="bot-message">
              Los servicios de la secretaría incluyen: gestión de inscripciones, certificados, y atención al estudiante.
            </div>
            <button onClick={handleBackToMenu}>Volver al menú principal</button>
          </>
        );
      case 'Formas de contacto':
        return (
          <>
            <div className="bot-message">
              Puedes contactarnos a través del correo info@example.com o llamando al +123 456 789.
            </div>
            <button onClick={handleBackToMenu}>Volver al menú principal</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="chat-container">
      {/* Burbuja flotante que abre el chat */}
      <div className="chat-bubble" onClick={() => setSelectedOption(null)}>
        💬
      </div>

      {/* Caja del chat */}
      <div className="chat-box">
        <div className="chat-header">
          <h4>Chatbot</h4>
          <button onClick={() => setSelectedOption(null)}>✖</button>
        </div>
        <div className="chat-messages">
          {selectedOption ? (
            renderResponse() // Mostrar respuesta basada en la opción seleccionada
          ) : (
            predefinedQuestions.map((question, index) => (
              <button key={index} onClick={() => handleOptionClick(question)}>
                {question}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleChatbot;
