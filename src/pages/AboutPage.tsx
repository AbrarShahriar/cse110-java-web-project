import { useEffect } from "react";
import styles from "./AboutPage.module.scss";
import ReactGA from "react-ga4";
import { useAppStore } from "../store";
import { translations } from "../lang";
import wave from "../assets/images/about-wave.svg";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { PiLinkSimpleFill } from "react-icons/pi";

export default function AboutPage() {
  const lang = useAppStore((state) => state.selectedLang);

  useEffect(() => {
    console.log("About");

    ReactGA.send({
      hitType: "pageview",
      page: `/about`,
      title: "About",
    });
  }, []);

  return (
    <div className={styles.about}>
      <header>
        <h1>{translations.aboutUsTitle[lang]}</h1>
      </header>
      <img src={wave} alt="" />

      <div className={styles.about_container}>
        <div className={styles.card}>
          <img
            src="https://avatars.githubusercontent.com/u/60544231?v=4"
            alt="Arefin"
          />
          <h1>Arefin Ahmed</h1>
          <p>Department of Computer Science and Engineering, BRAC.</p>
          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/thearefinahmed/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://github.com/TheArefinAhmed">
              <FaGithubSquare />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100008444586562"
            >
              <FaFacebookSquare />
            </a>
            <a target="_blank" href="https://github.com/TheArefinAhmed">
              <PiLinkSimpleFill />
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://avatars.githubusercontent.com/u/68944030?v=4"
            alt="Arefin"
          />
          <h1>Abrar Shahriar</h1>
          <p>Department of Computer Science and Engineering, BRAC.</p>
          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/abrar-shahriar-kabir/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://github.com/AbrarShahriar">
              <FaGithubSquare />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/abrar.shahriar.kabir/"
            >
              <FaFacebookSquare />
            </a>
            <a target="_blank" href="https://abrarshahriar.com/">
              <PiLinkSimpleFill />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.contact}>
        <p>Contact Us at : summerelitecoders@gmail.com</p>
      </div>
    </div>
  );
}
