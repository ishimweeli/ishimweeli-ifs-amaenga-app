import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useState, useEffect,useCallback } from 'react';
const BASE_URL = process.env.REACT_APP_BASE_URL; // set your base URL in .env file
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import CircularProgress from '@mui/material/CircularProgress';




export default function Amarenga() {

 
  const [Data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(Data)

  const [ loading, setLoading ] = useState(true);
    const [error, setError] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(Data);


  function CircularIndeterminate() {
    return (
      <Box
        sx={ {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          color: 'white',
        } }
      >
        <CircularProgress color="inherit" />
        <Typography variant="h6" component="div" sx={ { marginTop: '10px' } }>
          Please wait...
        </Typography>
      </Box>
    );
  }


  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '80%',
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
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  useEffect(() => {
 

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/amarenga`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

 
    fetchData();

  }, []);
  
  
  
  useEffect((event) => {
  
    const filtered = searchTerm
      ? Data.filter((item) =>
          item.kinyarwanda.toLowerCase().includes(searchTerm.toLowerCase())
       
         )
      : Data;
    setFilteredData(filtered);
  
  }, [Data, searchTerm]);

  const handleSearch = (event) => {
    event.preventDefault(); 
    const term = event.target.value.trim();
    setSearchTerm(term);
  };

  const handleButtonClick = () => {
    handleSearch();
    
  };
  
  if (loading) {
    return CircularIndeterminate();
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  
  return (
    
    <div>
 <div className='amarenga-search'>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
         
            onClick={handleButtonClick}
        >
          {/* Add an icon here if you want */}
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          {/* Add a title here if you want */}
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search',
            onBlur: (event) => event.stopPropagation(),
            autoFocus: true,
          }}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleButtonClick();
              }
            }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  </Box>
    </div>
<div>

    <ImageList sx={{ display: 'flex', flexWrap: 'wrap',width: "90%", height: "50%", mt: "5%", mb: "5%", ml: "5%", mr: "5%" }}>
      
    {filteredData ? (
  filteredData.map((item) => (
    <ImageListItem key={ item.id } sx={ { width: '30%', height: '10vh', display: 'flex', flexDirection: 'column' } }>
      <img
        src={ `${item.avatar}?w=248&fit=crop&auto=format` }
        srcSet={ `${item.avatar}?w=248&fit=crop&auto=format&dpr=2 1x` }
        alt={ item.title }
        loading="lazy"
        sx={ { flex: 1, width: '100%', height: '20%' } }
      />
      <ImageListItemBar
        title={ item.kinyarwanda }
        subtitle={ <span style={ { color: 'white' } }>{ item.english }</span> }
        position="below"
        style={ { color: 'white' } }
      />
    </ImageListItem>
  ))
) : (
  Data.map((item) => (
    <ImageListItem key={ item.id } sx={ { display: 'flex', flexGrow: 1, width: '30%', height: '10vh', display: 'flex', flexDirection: 'column' } } className="image-list-item">
      <img
        src={`${item.avatar}?w=248&fit=crop&auto=format`}
        srcSet={`${item.avatar}?w=248&fit=crop&auto=format&dpr=2 1x`}
        alt={item.title}
        loading="lazy"
        sx={{ flex: 1 }}
        className="image-list-item"
      />
      <ImageListItemBar
        title={item.kinyarwanda}
        subtitle={<span style={{color: 'white'}}>{item.english}</span>}
        position="below"
        style={{color: 'white'}}
      />
    </ImageListItem>
  ))
)}

    </ImageList>
    </div>
    </div>
  );
}

