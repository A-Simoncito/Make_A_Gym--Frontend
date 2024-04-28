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
import { setup } from '../../LSTM/lstm.js'; // Importar las funciones necesarias

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
    setup(); // Llamar a la función setup dentro del useEffect
  }, []);

  return (
    <header>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
          <TextField
            placeholder="Search…"
            id="pred_features"
          />
          <TextField
            placeholder="Search…"
            id="pred_labels"
            disabled
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
