import './header.css';
import loginIcon from '../../multimedia/login.jpg';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const machinesstock = [
  { title: 'Press de banca', year: 1994 },
  { title: 'Press inclinado', year: 1972 },
  { title: 'Press Declinado', year: 1972 },
  { title: 'Dorsalera', year: 1972 },
  { title: 'Hombros', year: 1972 },
  { title: 'Espalda Poleas', year: 1972 },
  { title: 'Prensa 45°', year: 1972 },
  { title: 'Sillon Cuadriceps', year: 1972 },
  { title: 'Gemelos y Sentadillas', year: 1972 },

  // Otras películas aquí...
];

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

export default function Header() {
  return (
    <header>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <Autocomplete
          id="search-autocomplete"
          options={machinesstock.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
                'aria-label': 'search',
                style: { width: '100%' }, // Ajuste del ancho del campo de búsqueda
              }}
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
}
