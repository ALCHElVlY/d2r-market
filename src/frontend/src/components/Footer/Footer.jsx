// Built-in imports
import { useState, useEffect, useRef } from "react";

// External imports
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  faDiscord,
  faPatreon,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Internal imports
import {
	ChangeLanguage,
	ChangeTheme,
} from "../SelectMenus/index";
import {
  getOnlineUsers,
  getInGameUsers,
} from "../../app/reducers/user/userSlice";
import "./footer.css";

const FooterBodyLeft = () => {
  return (
    <div className="footer__left">
      <div className="footer__links">
        <h3 className="link__header">Links</h3>
        <Link to="#" className="smart__link">
          <span>F.A.Q.</span>
        </Link>
        <Link to="#" className="smart__link">
          <span>Contact Us</span>
        </Link>
        <Link to="#" className="smart__link">
          <span>Terms of Service</span>
        </Link>
        <Link to="#" className="smart__link">
          <span>API Documentation</span>
        </Link>
        <Link to="#" className="smart__link">
          <span>Contribute (GitHub)</span>
        </Link>
      </div>
      <div className="footer__follow">
        <h3 className="link__header">Follow Us On</h3>
        <Link to="#" className="smart__link">
          <FontAwesomeIcon icon={faDiscord} className="icon" />
          <span>Discord</span>
        </Link>
        <Link to="#" className="smart__link">
          <FontAwesomeIcon icon={faPatreon} className="icon" />
          <span>Patreon</span>
        </Link>
        <Link to="#" className="smart__link">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
          <span>Twitter</span>
        </Link>
      </div>
      <div className="footer__privacy">
        <h3 className="link__header">Privacy</h3>
        <Link to="#" className="smart__link">
          Policy
        </Link>
      </div>
      <div className="footer__language">
        <h3 className="link__header">Change Language</h3>
        <ChangeLanguage />
      </div>
      <div className="footer__theme">
        <h3 className="link__header">Change Theme</h3>
        <ChangeTheme />
      </div>
      <div className="footer__disclaimer">
        <h3 className="link__header">Disclaimer</h3>
        <p>
          Blizzard Entertainment, Diablo II: Resurrected and the logo Diablo II
          are registered trademarks. All rights are reserved worldwide. This
          site has no official link with Blizzard Entertainment or Diablo II.
          All artwork, screenshots, characters or other recognizable features of
          the intellectual property relating to these trademarks are likewise
          the intellectual property of Blizzard Entertainment, INC.
        </p>
      </div>
    </div>
  );
};
const FooterBodyRight = () => {
  // Reference variables
  const totalOnlineRef = useRef(null);
  const totalTradersRef = useRef(null);

  // State variables
  const [totalOnline, setTotalOnline] = useState(0);
  const [totalTraders, setTotalTraders] = useState(0);
  const { total } = useSelector((state) => state.users);

  // React hook to update the  total users state
  // for the footer component
  useEffect(() => {
    // Update the user totals
    setTotalOnline(total.online);
    setTotalTraders(total.inGame);
  }, [total]);

  return (
    <div className="footer__right">
      <div className="footer__recently_online flex__evenly">
        <div className="recently__online">
          <p ref={totalOnlineRef}>{totalOnline}</p>
          <h3>Total Online</h3>
        </div>
        <div className="recently__online">
          <p ref={totalTradersRef}>{totalTraders}</p>
          <h3>Traders Online</h3>
        </div>
      </div>
      <div className="footer__adapt">
        <div className="donate">
          <Link to="#" className="patreon__link">
            <img
              alt="Support us on Patreon"
              src="../assets/images/footer/D2R_Patreon_Support.webp"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
const Footer = () => {
  const dispatch = useDispatch();

  // React hook to set the total users thats are marked as online
  // and online in-game
  useEffect(() => {
    // Update the totals every 60 seconds after re-render
    const timer = setInterval(async () => {
      dispatch(getOnlineUsers({ status: "online" }));
      dispatch(getInGameUsers({ status: "onlineInGame" }));
    }, 60000);

    // Clear the timer when the component is unmounted
    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <footer>
      <div className="footer_left"></div>
      <div className="footer_body">
        <FooterBodyLeft />
        <FooterBodyRight />
      </div>
      <div className="footer_right"></div>
    </footer>
  );
};

export default Footer;
