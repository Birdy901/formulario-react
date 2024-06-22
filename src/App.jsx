import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    usuario: '',
    email: '',
    subject: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { usuario, email, subject, message } = formData;
    if (!usuario || !email || !subject || !message) {
      setError('Todos los campos deben ser llenados');
      setSuccess('');
    } else {
      setError('');
      setSuccess('El mensaje ha sido enviado exitosamente');

      setFormData({
        usuario: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <div className="App">
      <div className="Formulario">
        <h1>Mensajería</h1>
        <form onSubmit={handleSubmit}>
          <div className="usuario-datos">
            <div>
            <label>Usuario:</label>
            <input
              type="text"
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
            />
            </div>
            <div>
              <label>Correo Electrónico:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label>Asunto:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Mensaje:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Enviar formulario</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </div>
    </div>
  );
}

export default App;
