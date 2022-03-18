// Import React
import React, { useEffect } from 'react';

// Import hooks from react-redux
import { useSelector, useDispatch } from 'react-redux';

// Import the logout and reset actions
import { logout, reset } from '../../features/auth/authSlice';

// Import link & navlink to navigate between pages in the navbar
import { Link, NavLink, useNavigate } from 'react-router-dom';

// Import loadCSS function to inject custom css
import { loadCSS } from 'fg-loadcss';

// Import the navmenu stylesheet
import './navmenu.css';

// Import the svg icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import Icon from '@mui/material/Icon';

// Import the platform selector component
import PlatformSelector from './PlatformSelector/PlatformSelector';

const NavMenu = () => {
  // Declare the dispatch variable
  const dispatch = useDispatch();
  // Declare the navigate variable
  const navigate = useNavigate();

  // Get the user from state
  const { user } = useSelector((state) => state.auth);

  // Handle the logout event
  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
    // Dispatch the reset action
    dispatch(reset());
    // Redirect the user back to the home page
    navigate('/');
  }

  // Create a hook to load the font awesome icons into the css
  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
      // Inject before JSS
      document.querySelector('#font-awesome-css') || document.head.firstChild,
    );
    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);


  return (
    <div className='navigation__container'>
      <div className='navMenu_logo_container'>
        <Link to="/">
          <img src='https://imgur.com/3S4kh9l.png'
            alt='d2r.market'
            className='navMenu_logo' />
        </Link>
      </div>
      <PlatformSelector />

      <ul className='navMenu_list'>
        <li className='navMenu_category'>
          <NavLink to="/" className={({ isActive }) => isActive
            ? "navMenu_link_active"
            : "navMenu_link"}>
            <ShoppingCartIcon className='navMenu_market_icon' />
            <div className='navMenu_title'><span>Market</span></div>
          </NavLink>
        </li>

        <li className='navMenu_category'>
          <NavLink to="/services" className={({ isActive }) => isActive
            ? "navMenu_link_active"
            : "navMenu_link"}>
            <Icon baseClassName='far' className='fa-handshake'></Icon>
            <div className='navMenu_title'>
              <span>Services</span>
              <span className="navMenu_title_subscript">
                Rushes | Cows | Ubers
              </span>
            </div>
          </NavLink>
        </li>

        <li className="navMenu_category_separator"></li>

        {/* If the user is logged in, show the user's profile and logout options */}
        {user ? (
          <><>
            <li className='navMenu_category'>
              <NavLink to="/profile" className={({ isActive }) => isActive
                ? "navMenu_link_active"
                : "navMenu_link"}>
                <Icon baseClassName='fa'
                  className='fa-solid fa-user' id='profileIcon' />
                <div className='navMenu_title'><span>My Profile</span></div>
              </NavLink>
            </li>
          </><>
              <li className="navMenu_category">
                <NavLink to="/messages" className={({ isActive }) => isActive
                  ? "navMenu_link_active"
                  : "navMenu_link"}>
                  <Icon baseClassName='fa'
                    className='fa-solid fa-envelope' id='messages' />
                  <div className='navMenu_title'><span>My Messages</span></div>
                </NavLink>
              </li>
            </><button onClick={handleLogout}>
              Log out
            </button></>
        ) : (
          <>
            <li className='navMenu_category'>
              <NavLink to="/login" className={({ isActive }) => isActive
                ? "navMenu_link_active"
                : "navMenu_link"}>
                <LoginIcon className='navMenu_login_icon' />
                <div className='navMenu_title'><span>Log In</span></div>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  )
};

export default NavMenu;
