import React,{useContext,useState} from 'react';
import { styled, alpha,ThemeProvider } from '@mui/material/styles';
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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import bookContext from '../Context/bookContext';
import theme from '../styles/theme';
import { CssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
function RoutesButtonInDesktop() {
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
  <Box sx={{width:"fit-content",height: "fit-content"}}>
    {matches && (
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block', marginRight: "10px", cursor: 'pointer',fontFamily: 'Josefin Sans' } }}
      >
        <Link style={{color:"white",textDecoration: 'none'}} to="/">
        BookStore
      </Link>
      </Typography>
      <Typography
      // onClick={()=>{navigate('/about')}}
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block', marginRight: "10px", cursor: 'pointer',fontFamily: 'Josefin Sans'  } }}
      >
       <Link style={{color:"white",textDecoration: 'none'}} to='/about'>
        About
      </Link>
      </Typography>
      <Typography
      // onClick={()=>{navigate('/contact')}}
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block', marginRight: "10px", cursor: 'pointer', fontFamily: 'Josefin Sans' } }}
      >
        <Link style={{color:"white",textDecoration: 'none'}}  to="/contact">
        Contact
      </Link>
      </Typography>
      </Box>
    )}
    {!matches && (
      <Box id={'xyz'} sx={{display: 'none', position: 'absolute',top: '55px',left: '0px',padding: '15px',boxSizing: 'border-box', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column', width:"150px",height: '150px',zIndex: '1',backgroundColor: theme.palette.secondary.main}}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'block', sm: 'block', marginRight: "10px", cursor: 'pointer',fontFamily: 'Josefin Sans' } }}
      >
        <Link style={{color:"white",textDecoration: 'none'}} to="/">
        BookStore
      </Link>
      </Typography>
      <Typography
      // onClick={()=>{navigate('/about')}}
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'block', sm: 'block', marginRight: "10px", cursor: 'pointer',fontFamily: 'Josefin Sans'  } }}
      >
       <Link style={{color:"white",textDecoration: 'none'}} to="/about">
        About
      </Link>
      </Typography>
      <Typography
      // onClick={()=>{navigate('/contact')}}
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'block', sm: 'block', marginRight: "10px", cursor: 'pointer', fontFamily: 'Josefin Sans'  } }}
      >
        <Link style={{color:"white",textDecoration: 'none'}} to="/contact">
        Contact
      </Link>
      </Typography>
      </Box>
    )}
  </Box>);
}
const toggleRouteBtns = ()=> {
  if(!document.getElementById('routedBtns')) 
  return;
  if(document.getElementById('routedBtns').style.display === "flex")
  document.getElementById('routedBtns').style.display = "none"
  else
  document.getElementById('routedBtns').style.display = "flex"
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

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const navigate = useNavigate();
  const {user,setUser} = useContext(bookContext);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {user?<MenuItem sx={{fontFamily: 'Josefin Sans'}} onClick={()=>{setUser('');navigate('/login');handleMenuClose()}}>LogOut</MenuItem>:(
      <>
        <MenuItem sx={{fontFamily: 'Josefin Sans'}} onClick={()=>{navigate('/login');handleMenuClose()}}>Login</MenuItem>
        <MenuItem sx={{fontFamily: 'Josefin Sans'}} onClick={()=>{navigate('/signup');handleMenuClose()}}>SignUp</MenuItem>
      </>
      )}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={0} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p style={{fontFamily: 'Josefin Sans'}}>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p style={{fontFamily: 'Josefin Sans'}}>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p style={{fontFamily: 'Josefin Sans'}}>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar sx={{position: 'relative'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2,cursor: 'pointer' }}
            onFocus={toggleRouteBtns}
            onBlur={toggleRouteBtns}
          >
            <MenuIcon />
          </IconButton>
          <Box id='routedBtns' sx={{display: {xs:'none',sm:'flex'},boxShadow: {xs:3,sm: 0},borderRadius: {xs:'5px',sm: 0},width: {xs: '75px',sm:'fit-content'},alignItems: 'center', justifyContent: 'space-between',flexDirection: {xs: 'column',sm: 'row'}, position: {xs: 'absolute', sm: 'static'},top: {xs:'60px'},left: {xs:'15px'},zIndex: {xs:'1'},backgroundColor: theme.palette.secondary.main}}>
          <Typography
          onClick={()=>{navigate('/')}}
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block'}, "&:hover":{backgroundColor: {xs:'gray'}, borderRadius: {xs:'5px'}},marginRight: {md:"10px"}, cursor: 'pointer',fontFamily: 'Josefin Sans', width: {xs: '100%',sm:'fit-content'}, boxSizing: {xs: 'border-box'}, padding: {xs: '5px'}, textAlign: 'center' }}
          >
            BookStore
          </Typography>
          <Typography
          onClick={()=>{navigate('/about')}}
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block'},"&:hover":{backgroundColor: {xs:'gray'}, borderRadius: {xs:'5px'}}, marginRight: {md:"10px"}, cursor: 'pointer',fontFamily: 'Josefin Sans'  , width: {xs: '100%',sm:'fit-content'}, boxSizing: {xs: 'border-box'}, padding: {xs: '5px'} , textAlign: 'center' }}
          >
            About
          </Typography>
          <Typography
          onClick={()=>{navigate('/contact')}}
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block'},"&:hover":{backgroundColor: {xs:'gray'}, borderRadius: {xs:'5px'}}, marginRight: {md:"10px"}, cursor: 'pointer', fontFamily: 'Josefin Sans'  , width: {xs: '100%',sm:'fit-content'}, boxSizing: {xs: 'border-box'}, padding: {xs: '5px'} , textAlign: 'center' }}
          >
            Contact
          </Typography>
          </Box>
          {/* <RoutesButtonInDesktop/> */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Books…"
              inputProps={{ 'aria-label': 'search' , fontFamily: 'Josefin Sans'}}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={0} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    </ThemeProvider>
  );
}
