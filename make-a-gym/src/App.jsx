import Header from './Components/Header/header';
import Body from './Components/Body/body'
import Login from './Components/Login/login.jsx';
import Register from './Components/Register/register.jsx';
import Cart from './Components/Cart/CartContent.jsx';
import DataProvider from './Components/Context/DataContext'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>

  <DataProvider>
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

          <Route 
            path='/Cart'
            element={
              <>
                <Header/>
                <Cart/>
              </>
            }
          />


        </Routes>
      </BrowserRouter>

  </DataProvider>       

    </div>

  );
}

export default App;
