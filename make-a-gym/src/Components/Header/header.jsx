import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadLayersModel } from '@tensorflow/tfjs';
import './header.css';
import loginIcon from '../../multimedia/login.jpg';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const [model, setModel] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await loadLayersModel('/models/autocorrect_model.json'); // Ajustar la ruta según la ubicación real del modelo
        setModel(loadedModel);
      } catch (error) {
        console.error('Error al cargar el modelo:', error);
      }
    };
    loadModel();
  }, []);

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setSearchText(value);
    if (model && value) {
      try {
        const predictions = await model.predict([value]);
        setOptions(predictions[0].split(','));
      } catch (error) {
        console.error('Error al predecir:', error);
      }
    } else {
      setOptions([]);
    }
  };

  return (
    <header>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <Autocomplete
          id="search-autocomplete"
          options={options}
          value={searchText}
          onChange={(event, newValue) => setSearchText(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search…"
              onChange={handleInputChange}
            />
          )}
        />
      </Search>

      <h1 className="TittleP">
        <Link to="/">Make a Gym</Link>
      </h1>

      <div className="login-icon">
        <Link to="/Login">
          <img src={loginIcon} alt="login-icon" />
        </Link>
      </div>

      <div className="nav-container">
        <Link to="/Cart">
          <h1 className="seeCarrito">🛒</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
