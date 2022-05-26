// Internal imports
import { ItemSearchBar } from "../../components/index";
import "./header.css";

const Header = () => {
  // Quick div element styling
  const divStyle = {
    transform: "translate3d(0px, 0px, 0px) rotate(0.0001deg)",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    pointerEvents: "none",
  };

  return (
    <section className="header__container">
      <div className="header_body flex__root">
        <div className="flex--left"></div>
        <section className="search_header container">
          <div className="row">
            <ItemSearchBar />
          </div>
        </section>
        <div className="flex--right"></div>
      </div>
      <div className="header_background" style={divStyle}>
        <img
          src="/assets/images/home/D2R-SelectHerobackground2-1920.jpg"
          alt="D2R-HeroSelectBackground"
          className="HeroSelect"
        />
      </div>
    </section>
  );
};

export default Header;
