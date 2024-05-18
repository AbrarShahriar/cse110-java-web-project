import { useEffect, useState } from "react";
import styles from "./RoadmapPage.module.scss";
import { translations as lang, translations } from "../lang";
import { useAppStore } from "../store";
import headerWave from "../assets/images/roadmap-wave.svg";
import Roadmap from "../components/Roadmap";
import { slugify } from "../lib/utils";
import { useNavigate } from "react-router-dom";

export default function RoadmapPage() {
  const language = useAppStore((state) => state.selectedLang);
  const [langSwitch, setLangSwitch] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("RoadmapPage useEffect");

    if (!localStorage.getItem("sections")) {
      console.log("LS item not found: creating LS item");

      let localSectionData = translations.roadmapData.map((el, i) => ({
        index: i,
        slug: slugify(el.title.en),
        locked: i == 0 ? false : true,
      }));

      localStorage.setItem("sections", JSON.stringify(localSectionData));
      console.log("LS item created");
    }
  }, []);

  return (
    <div className={styles.roadmap}>
      <header className={styles.header}>
        <button className={styles.aboutUs} onClick={() => navigate("/about")}>
          About Us
        </button>
        <h1>{lang.roadmap_headerTitle[language]}</h1>
        <div
          className={styles.langSwitch}
          onClick={() => setLangSwitch(!langSwitch)}
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
