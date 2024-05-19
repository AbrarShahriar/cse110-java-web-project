import { useEffect } from "react";
import styles from "./AboutPage.module.scss";
import ReactGA from "react-ga4";

export default function AboutPage() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: `/about`,
      title: "About",
    });
  }, []);
  return <div className={styles.about}>AboutPage</div>;
}
