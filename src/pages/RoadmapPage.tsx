import { useEffect, useState } from "react";
import styles from "./RoadmapPage.module.scss";
import { TLang, translations as lang } from "../lang";
import { useAppStore } from "../store";
import headerWave from "../assets/images/roadmap-wave.svg";
import Roadmap from "../components/Roadmap";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";

export default function RoadmapPage() {
  const selectedLang = useAppStore((state) => state.selectedLang);
  const [langSwitch, setLangSwitch] = useState(selectedLang !== "en");

  const setLang = useAppStore((state) => state.setLang);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Roadmap");

    ReactGA.send({
      hitType: "pageview",
      page: "/roadmap",
      title: "Roadmap",
    });
  }, []);

  return (
    <div className={styles.roadmap}>
      <header className={styles.header}>
        <button
          className={styles.aboutUs}
          onClick={() => {
            ReactGA.event({
              category: "Navigation",
              action: "Click",
              label: "About Us",
            });
            navigate("/about");
          }}
        >
          {lang.aboutUsTitle[selectedLang]}
        </button>
        <h1>{lang.roadmap_headerTitle[selectedLang]}</h1>
        <div
          className={styles.langSwitch}
          onClick={() => {
            ReactGA.event({
              category: "Language",
              action: "Click",
              label: `Language Switched`,
            });
            setLangSwitch(!langSwitch);
            if (selectedLang == "en") {
              setLang("bn");
            } else {
              setLang("en");
            }
          }}
        >
          <span>EN</span>
          <span>BN</span>
          <div className={`${styles.circle} ${langSwitch && styles.on}`}></div>
        </div>
      </header>
      <img src={headerWave} alt="wave" />

      <Roadmap />
    </div>
  );
}
