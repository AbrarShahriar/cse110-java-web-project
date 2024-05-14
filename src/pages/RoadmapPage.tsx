import React, { useState } from "react";
import styles from "./RoadmapPage.module.scss";
import { translations as lang } from "../lang";
import { useAppStore } from "../store";
import headerWave from "../assets/images/roadmap-wave.svg";
import Roadmap from "../components/Roadmap";

export default function RoadmapPage() {
  const language = useAppStore((state) => state.selectedLang);
  const [langSwitch, setLangSwitch] = useState(false);

  return (
    <div className={styles.roadmap}>
      <header className={styles.header}>
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
