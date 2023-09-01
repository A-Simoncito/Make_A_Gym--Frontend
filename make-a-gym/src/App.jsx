import './App.css';
import Header from './Components/Header/header';
import Body from './Components/Body/body'
import Login from './Components/Login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>

      {/* <Header></Header>
      
      <Login></Login> */}

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
                <Login/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>

      




    </div>

  );
}

export default App;
