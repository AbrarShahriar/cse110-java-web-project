import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./LessonPage.module.scss";
import { translations } from "../lang";
import { useAppStore } from "../store";
import { FaArrowRight } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";

export default function LessonPage() {
  const [menuActive, setMenuActive] = useState(false);
  const lang = useAppStore((state) => state.selectedLang);
  const { lessionId } = useParams();

  const [topicData, setTopicData] = useState<
    (typeof translations.roadmapData)[0] | null
  >(null);

  useEffect(() => {
    setTopicData(getTopicData(lessionId as string) || null);
  }, []);

  const getTopicData = (
    slug: string
  ): (typeof translations.roadmapData)[0] | undefined => {
    const title = slug
      .split("-")
      .map((el) => `${el[0].toUpperCase()}${el.substring(1, el.length)}`)
      .join(" ");
    return translations.roadmapData.find(
      (el) => title.trim() === el.title[lang].trim()
    );
  };

  return (
    <div className={styles.lessonsPage}>
      <div className={styles.topicCard}>
        <h2 className={styles.title}>{topicData?.title[lang]}</h2>
        <img src={topicData?.coverImg} alt={topicData?.title[lang]} />

        <p className={styles.text}>{topicData?.texts?.map((el) => el[lang])}</p>

        <div className={styles.footnote}>
          More Details:
          {topicData?.footnote?.map((el) => (
            <a href={el.url} target="_blank">
              {el[lang]}
            </a>
          ))}
        </div>
      </div>
      <button className={styles.nextButton}>
        Next <FaArrowRight />
      </button>
      <button
        className={`${styles.menuButton} ${
          menuActive && styles.menuButtonActive
        }`}
        onClick={() => setMenuActive(!menuActive)}
      >
        <RiMenu4Fill />
      </button>

      <ul className={`${styles.menu} ${menuActive && styles.menuActive}`}>
        {["Program", "Logic", "Flow Control", "Flow Chart", "Exit"].map(
          (el) => (
            <li key={el}>
              <button>{el}</button>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
