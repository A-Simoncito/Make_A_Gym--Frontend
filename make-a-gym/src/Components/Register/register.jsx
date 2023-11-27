import './register.css';
import axios from 'axios'
import React, { useState } from "react";

export default function Register() {

  const [name, nombre]=useState("")
  const [password, contraseña] =useState("")
  const [email, correoElectronico]=useState("")
  const [repeatPassword, repetirContraseña] =useState("")
  const registro = async (e) =>{

    e.preventDefault()
    if (password === repeatPassword){
      try {
        await axios.post("http://localhost:8080/users",{email,password,name})
        alert("cuenta creada exitosamente")
        
      } catch (error) {
        alert("no se pudo crear la cuenta")
        
      }

      
    }
    else{
      alert("las contraseñas no son iguales")
    }
    
  }


    return (
        <div className="register-container">
        <h2>Registrarse</h2>
        <form>
            <div className="form-group">
            <label htmlFor="username">Nombre de Usuario:</label>
            <input type="text" id="username"  value ={name} onChange={(e) => nombre (e.target.value)} required />
            </div>
            <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email"  value ={email} onChange={(e) => correoElectronico (e.target.value)} required />
            </div>
            <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password"  value ={password} onChange={(e) => contraseña (e.target.value)} required />
            </div>
            <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
            <input
                type="password"
                id="confirmPassword"
                value ={repeatPassword} onChange={(e) => repetirContraseña (e.target.value)}
                required
            />
            </div>
            <button type="submit" onClick = {registro} >Registrarse</button>
        </form>
        </div>
    );
}


