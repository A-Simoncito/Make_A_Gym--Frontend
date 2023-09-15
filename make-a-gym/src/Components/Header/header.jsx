import './header.css';
import loginIcon from '../../multimedia/login.jpg'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header>

      
      <h1 class="TittleP">Make a Gym</h1>
     


      <div class="login-icon">
        <Link to= "/Login">
          <img src={loginIcon} alt="login-icon"/>
        </Link>

      </div>
    
      <div className = 'nav-container'>
      <Link to= "/Cart">
        <h2 className= 'seeCarrito'>🛒</h2>
      </Link>
      </div>

  
    </header>
  )
}