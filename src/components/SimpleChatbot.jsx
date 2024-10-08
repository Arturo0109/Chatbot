import React, { useState } from 'react';
import './SimpleChatbot.css';
import { useNavigate } from 'react-router-dom';

const SimpleChatbot = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChatVisible, setIsChatVisible] = useState(false); // Nuevo estado para la visibilidad
  const navigate = useNavigate();

  const predefinedQuestions = [
    'Hola',
    'Información sobre los cursos',
    'Información de los eventos',
    'Servicios de la secretaria',
    'Formas de contacto',
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleBackToMenu = () => {
    setSelectedOption(null);
  };

  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible); // Cambiar visibilidad
    if (!isChatVisible) {
      setSelectedOption(null); // Reiniciar la selección al abrir el chat
    }
  };

  const renderResponse = () => {
    switch (selectedOption) {
      case 'Hola':
        return (
          <>
            <div className="bot-message">
              ¡Bienvenido! Esta web te ayudará a encontrar información sobre la Secretaria de las TIC, cursos, eventos y más. 😊
            </div>
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
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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
              Los servicios de la secretaría incluyen: gestión de inscripciones, certificados y atención al estudiante.
            </div>
            <button onClick={handleBackToMenu}>Volver al menú principal</button>
          </>
        );
      case 'Formas de contacto':
        return (
          <>
            <div className="bot-message">
              Dirección: Carrera 13 No. 6-50, Edificio CAMB Piso 3, Código Postal: 763042
              <br /><br />
              Correo Electrónico: asistemas@guadalajaradebuga-valle.gov.co
              <br />
              Correo Electrónico: tic@buga.gov.co
              <br /><br />
              Teléfono: (57+2) 2377000 Ext. 1555
              <br /><br />
              Horario de atención: lunes a jueves (8:00 am - 12:00 m; y de 2:00 pm - 6:00 pm) / viernes (de 8:00 am - 12:00 m; y de 2:00 pm - 5.00 pm)
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
      {!isChatVisible && ( // Renderizar la burbuja solo si el chat no es visible
        <div className="chat-bubble" onClick={toggleChatVisibility}>
          💬
        </div>
      )}

      {/* Caja del chat */}
      {isChatVisible && ( // Solo renderizar si el chat es visible
        <div className="chat-box">
          <div className="chat-header">
            <h4>TicBOT</h4>
            <button onClick={toggleChatVisibility}>✖</button>
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
      )}
    </div>
  );
};

export default SimpleChatbot;
