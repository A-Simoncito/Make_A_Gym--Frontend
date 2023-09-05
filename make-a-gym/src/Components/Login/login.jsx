import './login.css';

export default function Login() {
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
                            <button id="btn__registrarse">Registrarse</button>
                        </div>
                    </div>

                    <div className="contenedor__login-register">
                        <form action="" className="formulario__login">
                            <h2>Iniciar Sesión</h2>
                            <input type="text" placeholder="Correo Electrónico" />
                            <input type="password" placeholder="Contraseña" />
                            <button>Entrar</button>
                        </form>

                        <form action="" className="formulario__register">
                            <h2>Registrarse</h2>
                            <input type="text" placeholder="Nombre completo" />
                            <input type="text" placeholder="Correo Electrónico" />
                            <input type="text" placeholder="Usuario" />
                            <input type="password" placeholder="Contraseña" />
                            <button>Registrarse</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
