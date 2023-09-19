import './register.css';
import { useRef } from 'react';

export default function Register() {

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const username = usernameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const confirmPassword = confirmPasswordRef.current.value;
  
      
      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }
      
      console.log(`Nombre de usuario: ${username}`);
      console.log(`Correo Electrónico: ${email}`);
      console.log(`Contraseña: ${password}`);

    }

    return (
        <div className="register-container">
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="username">Nombre de Usuario:</label>
            <input type="text" id="username" ref={usernameRef} required />
            </div>
            <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" ref={emailRef} required />
            </div>
            <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" ref={passwordRef} required />
            </div>
            <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
            <input
                type="password"
                id="confirmPassword"
                ref={confirmPasswordRef}
                required
            />
            </div>
            <button type="submit">Registrarse</button>
        </form>
        </div>
    );
}


