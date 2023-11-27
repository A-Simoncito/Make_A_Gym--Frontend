import './login.css';
import React, { useState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'


export default function Login() {
  const [email, nombre]=useState("")
  const [password, contraseña] =useState("")
  const login = async (e) =>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:8080/login",{email,password})
            alert("inicio de sesion exitoso")
        
        
        } catch (error) {
          alert("no se pudo iniciar sesion")
        

        
        }
  }





    return (
        <div className='fondo'>
            <main>
                <div className="contenedor__todo">
                    <div className="caja__trasera">
                        <div className="caja__trasera-login">
                            <h3>¿Ya tienes una cuenta?</h3>
                            <p>Inicia sesión para entrar en la página</p>
                            <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                        </div>
                        <div className="caja__trasera-register">
                            <h3>¿Aún no tienes una cuenta?</h3>
                            <p>Regístrate para que puedas iniciar sesión</p>
                            <Link to= "/Register">
                                <button id="btn__registrarse">Registrarse</button>
                            </Link>
                          
                        </div>
                    </div>

                    <div className="contenedor__login-register">
                        <form action="" className="formulario__login">
                            <h2>Iniciar Sesión</h2>
                            <input type="text" placeholder="Correo Electrónico" value ={email} onChange={(e) => nombre (e.target.value)} />
                            <input type="password" placeholder="Contraseña" value ={password} onChange={(e) => contraseña (e.target.value)} />
                            <button onClick ={login}>Entrar</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
