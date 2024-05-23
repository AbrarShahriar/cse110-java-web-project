import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./LessonPage.module.scss";
import { translations } from "../lang";
import { useAppStore } from "../store";
import { FaArrowRight } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";
import { slugify } from "../lib/utils";
import hljs from "highlight.js/lib/core";
import java from "highlight.js/lib/languages/java";
import ReactGA from "react-ga4";

import "highlight.js/styles/atom-one-dark-reasonable.min.css";

hljs.registerLanguage("java", java);

import Confetti from "react-dom-confetti";

const config = {
  angle: 90,
  spread: 140,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "400px",
  colors: ["#f00", "#0f0", "#00f"],
};

export default function LessonPage() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/lessions",
      title: "Roadmap",
    });
  }, []);

  const navigate = useNavigate();
  const { lessionId } = useParams();
  const lang = useAppStore((state) => state.selectedLang);
  const setSectionData = useAppStore((state) => state.setSectionData);

  const getTopicData = (
    slug: string
  ): {
    subSectionText: (typeof translations.roadmapData)[0];
    index: number;
  } => {
    const title = slug
      .split("-")
      .map((el) => `${el[0].toUpperCase()}${el.substring(1, el.length)}`)
      .join(" ");

    return {
      subSectionText: translations.roadmapData.find(
        (el) => title.trim() === el.title[lang].trim()
      ) as (typeof translations.roadmapData)[0],
      index: translations.roadmapData.findIndex(
        (el) => title.trim() === el.title[lang].trim()
      ) as number,
    };
  };

  const [topicData] = useState(
    getTopicData(lessionId as string)
      .subSectionText as (typeof translations.roadmapData)[0]
  );

  const [sectionNumber] = useState<number>(
    getTopicData(lessionId as string).index
  );

  const [subSectionNumber, setSubSectionNumber] = useState(0);
  const [menuActive, setMenuActive] = useState(false);

  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: `/lessons/${lessionId}`,
      title: topicData.title.en,
    });
  }, []);

  useEffect(() => {
    hljs.highlightAll();
  }, [subSectionNumber]);

  const handleNextClick = () => {
    let max = topicData && topicData.texts && topicData?.texts?.length - 1;

    if (!(subSectionNumber >= (max as number))) {
      setSubSectionNumber((val) => val + 1);
    } else if (subSectionNumber >= (max as number)) {
      setConfettiActive(true);

      let sectionData = JSON.parse(localStorage.getItem("sections") as string);

      if (
        sectionData[sectionNumber + 1] &&
        sectionData[sectionNumber + 1].locked
      ) {
        sectionData[sectionNumber + 1].locked = false;
        localStorage.setItem("sections", JSON.stringify(sectionData));
        setSectionData(sectionData);
      }

      if (
        !JSON.parse(localStorage.getItem("sections") as string)[sectionNumber]
          .locked
      ) {
        setTimeout(() => {
          navigate(
            `/lessons/${slugify(
              translations.roadmapData[sectionNumber + 1].title.en
            )}`
          );

          window.location.reload();
        }, 2000);
      }
    }
  };

  if (!topicData.texts[0]) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          color: "white",
        }}
      >
        <h1>Coming Soon!</h1>
      </div>
    );
  }

  return (
    <div className={styles.lessonsPage}>
      <button
        className={`${styles.menuButton} ${
          menuActive && styles.menuButtonActive
        }`}
        onClick={() => setMenuActive(!menuActive)}
      >
        <RiMenu4Fill />
      </button>
      <div className={styles.topicCard}>
        {subSectionNumber == 0 && (
          <>
            <h2 className={styles.title}>{topicData?.title[lang]}</h2>
            {topicData?.coverImg && (
              <img src={topicData?.coverImg} alt={topicData?.title[lang]} />
            )}
          </>
        )}
        {topicData && topicData.texts && (
          <p
            className={styles.text}
            dangerouslySetInnerHTML={{
              __html: topicData.texts[subSectionNumber][lang],
            }}
          ></p>
        )}

        {topicData?.footnote[0] && (
          <div className={styles.footnote}>
            More Details:
            {topicData?.footnote?.map((el) => (
              <a key={el.url} href={el.url} target="_blank">
                {el[lang]}
              </a>
            ))}
          </div>
        )}
      </div>

      <button className={styles.nextButton} onClick={handleNextClick}>
        Next <FaArrowRight />
        <Confetti active={confettiActive} config={config} />
      </button>

      <ul className={`${styles.menu} ${menuActive && styles.menuActive}`}>
        {topicData &&
          topicData.topics &&
          topicData.topics.map((el, i) => (
            <li key={el}>
              <button
                onClick={() => {
                  setSubSectionNumber(i);
                  setMenuActive(false);
                }}
              >
                {el}
              </button>
            </li>
          ))}
        <li>
          <button
            onClick={() => {
              navigate("/roadmap");
              setMenuActive(false);
            }}
          >
            Exit
          </button>
        </li>
      </ul>
    </div>
  );
}
