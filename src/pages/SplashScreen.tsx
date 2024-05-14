import { useAppStore } from "../store";
import { translations as lang } from "../lang";
import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
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
