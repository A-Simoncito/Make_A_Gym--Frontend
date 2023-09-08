import './App.css';
import Header from './Components/Header/header';
import Body from './Components/Body/body'
import Login from './Components/Login/login.jsx';
import Register from './Components/Register/register.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>

          <Route 
            path='/'
            element={
              <>
                <Header />
                <Body></Body>
              </>
            }
          />

          <Route 
            path='/Login'
            element={
              <>
                <Header/>
                <Login/>
              </>
            }
          />

          <Route 
            path='/Register'
            element={
              <>
                <Header/>
                <Register/>
              </>
            }
          />


        </Routes>
      </BrowserRouter>

      




    </div>

  );
}

export default App;
