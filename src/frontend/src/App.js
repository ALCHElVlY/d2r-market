// Built-in imports
import { useState, useEffect } from "react";

// External imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Internal imports
import {
  NavMenu,
  ToastNotification,
  RequireAuth,
  ErrorBoundary,
  PlaceOrder,
} from "./components/index";
import {
  ContentWrapper,
  Services,
  Register,
  Login,
  OAuthLogin,
  Profile,
  Messages,
  Settings,
  Subscription,
  Notifications,
} from "./containers";
import { getBnetCredentials } from "./app/reducers/oauth/oauthSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { linkedAccounts } = useSelector((state) => state.oauth);

  // State variables
  const [isAuthorized, setIsAuthorized] = useState(false);

  // React hook to handle checking the oauth credentials
  useEffect(() => {
    if (user) {
      // Set an initial request to get the user's credentials
      dispatch(getBnetCredentials(user));

      // If the user is logged in, fetch their linked accounts
      // every 5 minutes
      setInterval(async () => {
        dispatch(getBnetCredentials(user));
      }, 1000 * 60 * 5);
    }
  }, [
    user,
    // Functions
    dispatch,
  ]);

  // React hook to check if a user has linked a battle.net account
  // Pre-loader to the 'Must be authorized to interact' notification
  useEffect(() => {
    // Check if the user has a linked battle.net account
    const hasBnetCredentials = linkedAccounts.some((account) => account.bnet);
    if (hasBnetCredentials) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, [linkedAccounts]);

  // React hook to send a toast notification while the user has
  // not linked a battle.net account
  useEffect(() => {
    if (user && isAuthorized) return;
    if (user && !isAuthorized) {
      const message = [
        "A linked battle.net account is required to interact with this app.",
        `Visit the settings page to link your account.`,
      ].join("\n");
      const options = {
        className: "toast-missing-bnet",
        autoClose: false,
      };

      // Send the notification
      ToastNotification("warning", message, options);
    }
  }, [user, isAuthorized]);

  return (
    <div className="main__container">
      <ErrorBoundary>
        <Router>
          <NavMenu />
          {/* Public routes - users do not need to be logged in */}
          <Routes>
            <Route exact path="/" element={<ContentWrapper />} />
            <Route path="/services" element={<Services />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/oauth">
              <Route path="bnet" element={<OAuthLogin target="bnet" />} />
              {/* <Route path="xbox" element={<OAuthLogin target="xbox" />} /> */}
              {/* <Route path="discord" element={<OAuthLogin target="discord" />} /> */}
            </Route>

            {/* Private routes - users must be logged in */}
            <Route element={<RequireAuth />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/settings">
                <Route path="account" index element={<Settings />} />
                <Route path="subscription" element={<Subscription />} />
                <Route path="notifications" element={<Notifications />} />
              </Route>
            </Route>
          </Routes>
        </Router>
        <PlaceOrder />
        <ToastContainer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
