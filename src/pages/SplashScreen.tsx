import { useAppStore } from "../store";
import { translations as lang } from "../lang";
import { useNavigate } from "react-router-dom";

import ReactGA from "react-ga4";
import { useEffect } from "react";

export default function SplashScreen() {
  ReactGA.initialize("G-0NP7RD2JL8");

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/",
      title: "Home",
    });
  }, []);

  const selectedLang = useAppStore((state) => state.selectedLang);
  const navigate = useNavigate();

  return (
    <>
      <div className="splash">
        <div className="splash_logo">Arefin & Abrar</div>
        <div className="splash_svg">
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" />
          </svg>
        </div>
        <div className="splash_minimize">
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" />
          </svg>
        </div>
      </div>
      <div className="text">
        <p>{lang.hero_title[selectedLang]}</p>
        <button onClick={() => navigate("/roadmap")}>
          {lang.hero_getMeThere[selectedLang]}
        </button>
      </div>
    </>
  );
}
