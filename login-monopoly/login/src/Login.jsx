// Se importa la libreria de react requerida para el uso de componentes
import React, { useState } from 'react';
// Se importan los estilos para el componente Login
import './loginStyles.css'

// Se define el componente Login
function Login() {
// Definicion de los estados
  // Guarda el nombre de usuario ingresado en el input
  const [usuario, setUsuario] = useState('');
  // Guarda la contraseña ingresada
  const [contrasena, setContrasena] = useState('');
  // Indica si esta mostrando el formulario de recuperacion contraseña(true) -- Login(false)
  const [showRecover, setShowRecover] = useState(false);
  // Guarda el correo ingresado al momento de recuperar la contraseña
  const [email, setEmail] = useState('');
  //controla si la app esta cargando (sirve para mostrar un indicador de carga)
  const [loading, setLoading] = useState(false);
  // Guarda los mensajes de error si algo falla en la autenticación  o recuperación
  const [error, setError] = useState('');

  //Función para manejar el inicio de sesión
  const handleSubmit = async (event) => {
    //Evita que la pagina se recargue al enviar el formulario
    event.preventDefault();
    // activa el estado de carga
    setLoading(true);
    // Resetea el estado de error antes de intentar iniciar sesión
    setError('');

    try {
                                      //En el post falta la url de la API
      const response = await axios.post('', {
        usuario,
        contrasena
      });

      console.log('Login exitoso:', response.data);
      // Guarda el token en localStore si el logeo funciona correctamente
      localStorage.setItem('token', response.data.token); 

    } catch (error) {
      //Muestra el mensaje de error si falla la solicitud
      setError(error.response?.data?.message || 'Error al iniciar sesión');
      //Desactiva el estado de carga
    } finally {
      setLoading(false);
    }
  };

  //Función para recuperar la contraseña por memdio de correo

  const handleRecoverPassword = async (event) => {
    // Evita que la pagina se recargue al enviar el formulario
    event.preventDefault();
    // activa el estado de carga
    setLoading(true);
    // Resetea el estado de error
    setError('');

    try {
                                  // Falta url de la API
      const response = await axios.post('', {
        email
      });
      // muestra mensaje de éxito
      alert(response.data.message);
      // Limpia el campo del correo
      setEmail('');
      // Regresa a la pantalla de iniciar sección
      setShowRecover(false);
      // Error si falla la solicitud
    } catch (error) {
      setError(error.response?.data?.message || 'Error al recuperar contraseña');
      // Desactiva el estado de carga
    } finally {
      setLoading(false);
    }
  };
    // Se renderiza el componente
    // showrecover muestra el titulo segun el estado
    // error => si hay un error lo muestra en pantalla
    //Loading => muestra mensaje de carga si es true
  return (
    <div className="container">
      <h2>{showRecover ? 'Recuperar Contraseña' : 'Iniciar sesión'}</h2>

      {error && <div className="error">{error}</div>}
      {loading && <div className="loading">Cargando...</div>}

      {!showRecover ? (
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(enviar) => setUsuario(enviar.target.value)}
            className="input"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(enviar) => setContrasena(enviar.target.value)}
            className="input"
          />

          <button type="submit" className="button">
            Iniciar
          </button>


          <span
            className="recoverLink"
            onClick={() => setShowRecover(true)}
          >
            ¿Olvidaste tu contraseña?
          </span>
          <button
            className="registerButton"
            onClick={() => console.log('Ir a registrarse')}
          >
            Registrarse
          </button>
        </form>
      ) : (
        //Maneja la recuperación de contrasñea
        //Permite ingresar correo y enviarlo a la API
        // permite volver al inicio cuando den clic
        <form onSubmit={handleRecoverPassword} className="form">
          <input
            type="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(enviar) => setEmail(enviar.target.value)}
            className="input"
            required
          />

          <button type="submit" className="button">
            Enviar enlace de recuperación
          </button>
          
          <span
            className="recoverLink"
            onClick={() => setShowRecover(false)}
          >
            Volver al Inicio
          </span>

        </form>
      )}


    </div>
  );
}

export default Login;