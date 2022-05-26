// Builtin imports
import { Fragment, useEffect, useState, useRef } from "react";

// External imports
import {
	faGears,
	faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	useSelector,
	useDispatch,
} from "react-redux";
import {
	Link,
	NavLink,
	useNavigate,
} from "react-router-dom";
import {
	Login as LoginIcon,
	ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
import Icon from "@mui/material/Icon";
import { loadCSS } from "fg-loadcss";

// Internal imports
import UserNavProfile from "../UserNavProfile/UserNavProfile.jsx";
import PlatformSelector from "./PlatformSelector/PlatformSelector.jsx";
import {
	logout,
	updateUser,
	reset,
} from "../../app/reducers/auth/authSlice";
import "./navmenu.css";

// Fragments
const USER_LOGGED_IN = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = props;

  // Reference variables
  const userNavProfileRef = useRef(null);
  const invisStatusRef = useRef(null);
  const onlineStatusRef = useRef(null);
  const onlineGameStatusRef = useRef(null);

  // State variables
  const [open, setOpen] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState("");

  // Event handlers
  const handleLogout = async () => {
    // Dispatch the logout action
    await dispatch(logout(user));
    // Dispatch the reset action
    await dispatch(reset());
    // Redirect the user back to the home page
    await navigate("/");
  };
  const handleClick = (e) => {
    const prev = onlineStatus;
    const target = e.target.innerHTML.toLowerCase();
    const payload = {
      user: user,
      data: { status: target },
    };
    if (target === prev) return;
    dispatch(updateUser(payload));
  };
  const handleMouseEnter = () => setOpen(true);
  const handleMouseOut = () => setOpen(false);

  // React hook to handle when the profile dropdown is opened
  useEffect(() => {
    if (user && open) {
      userNavProfileRef.current.classList.add("open_close");
    } else if (user && !open) {
      userNavProfileRef.current.classList.remove("open_close");
    } else {
      setOpen(false);
    }
  }, [user, open]);

  // React hook to handle when the user updates their status
  useEffect(() => {
    if (user) {
      // Set the user's status
      setOnlineStatus(user.onlineStatus);
      switch (onlineStatus) {
        case "online":
          onlineStatusRef.current.classList.add("activeStatus");
          onlineGameStatusRef.current?.classList.remove("activeStatus");
          invisStatusRef.current?.classList?.remove("activeStatus");
          break;
        case "online in game":
          onlineGameStatusRef.current.classList.add("activeStatus");
          onlineStatusRef.current?.classList.remove("activeStatus");
          invisStatusRef.current?.classList?.remove("activeStatus");
          break;
        case "invisible":
          invisStatusRef.current.classList.add("activeStatus");
          onlineStatusRef.current?.classList.remove("activeStatus");
          onlineGameStatusRef.current?.classList.remove("activeStatus");
          break;
        default:
          break;
      }
    }
  }, [
    user,
    onlineStatus,
    // Functions
    dispatch,
  ]);

  return (
    <Fragment>
      <li className="navMenu_category">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "navMenu_link_active" : "navMenu_link"
          }>
          <Icon
            baseClassName="fa"
            className="fa-solid fa-user"
            id="profileIcon"
          />
          <div className="navMenu_title">
            <span>My Profile</span>
          </div>
        </NavLink>
      </li>
      <li className="navMenu_category">
        <NavLink
          to="/messages"
          className={({ isActive }) =>
            isActive ? "navMenu_link_active" : "navMenu_link"
          }>
          <Icon
            baseClassName="fa"
            className="fa-solid fa-envelope"
            id="messagesIcon"
          />
          <div className="navMenu_title">
            <span>My Messages</span>
          </div>
        </NavLink>
      </li>
      <li
        className="navMenu_profileComboBox"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseOut}>
        <ul className="profileShift" ref={userNavProfileRef}>
          <li className="profile_text_entry">Select your status</li>
          <li className="profile_status_switch">
            <span
              className="status_online"
              ref={onlineStatusRef}
              onClick={handleClick}>
              Online
            </span>
            <span
              className="status_online_ingame"
              ref={onlineGameStatusRef}
              onClick={handleClick}>
              Online in game
            </span>
            <span
              className="status_invisible"
              ref={invisStatusRef}
              onClick={handleClick}>
              Invisible
            </span>
          </li>
          <li className="profile_settings">
            <Link to="/settings/account" className="smartlink">
              <FontAwesomeIcon
                icon={faGears}
                className="profile_settings_icon"
              />
              <div className="profile_settings_title">
                <span>Settings</span>
              </div>
            </Link>
          </li>
          <li className="profile_signout">
            <Link to="/" onClick={handleLogout} className="smartlink">
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="profile_logout_icon"
              />
              <div className="profile_logout_title">
                <span>Sign out</span>
              </div>
            </Link>
          </li>
        </ul>
        <UserNavProfile open={open} />
      </li>
    </Fragment>
  );
};
const USER_LOGGED_OUT = () => {
  return (
    <Fragment>
      <li className="navMenu_category">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "navMenu_link_active" : "navMenu_link"
          }>
          <LoginIcon className="navMenu_login_icon" />
          <div className="navMenu_title">
            <span>Log In</span>
          </div>
        </NavLink>
      </li>
    </Fragment>
  );
};

// NavMenu components
const NavMenuLogo = () => {
  return (
    <div className="navMenu_logo_container">
      <Link to="/">
        <img
          src="https://imgur.com/3S4kh9l.png"
          alt="diabloii.market"
          className="navMenu_logo"
        />
      </Link>
    </div>
  );
};
const NavMenuList = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <ul className="navMenu_list">
      <li className="navMenu_category">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navMenu_link_active" : "navMenu_link"
          }>
          <ShoppingCartIcon className="navMenu_market_icon" />
          <div className="navMenu_title">
            <span>Market</span>
          </div>
        </NavLink>
      </li>
      <li className="navMenu_category">
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "navMenu_link_active" : "navMenu_link"
          }>
          <Icon baseClassName="far" className="fa-handshake"></Icon>
          <div className="navMenu_title">
            <span>Services</span>
            <span className="navMenu_title_subscript">
              Rushes | Cows | Ubers
            </span>
          </div>
        </NavLink>
      </li>
      <li className="navMenu_category_separator" />

      {/* If the user is logged in, show the user's profile and logout options */}
      {user ? <USER_LOGGED_IN user={user} /> : <USER_LOGGED_OUT />}
    </ul>
  );
};
const NavMenu = () => {
  // React hook to load the font-awesome css file
  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
      // Inject before JSS
      // eslint-disable-next-line no-undef
      document.querySelector("#font-awesome-css") || document.head.firstChild,
    );
    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <div className="navigation__container">
      <NavMenuLogo />
      <PlatformSelector />
      <NavMenuList />
    </div>
  );
};

export default NavMenu;
