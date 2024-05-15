import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./Roadmap.module.scss";
import { useNavigate } from "react-router-dom";
import { translations } from "../lang";
import { useAppStore } from "../store";
export default function Roadmap() {
  const navigate = useNavigate();
  const lang = useAppStore((state) => state.selectedLang);
  return (
    <VerticalTimeline lineColor="#000" className={styles.timeline}>
      {translations.roadmapData.map((data, i) => (
        <VerticalTimelineElement
          onTimelineElementClick={() =>
            navigate(
              `/lessons/${data.title[lang]
                .split(" ")
                .map((el) => el.toLowerCase())
                .join("-")}`
            )
          }
          className={`vertical-timeline-element--work ${styles.noBoxShadow}`}
          contentStyle={{ background: "#000", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #000" }}
          date={`Chapter 1.${i + 1}`}
          iconStyle={{ background: "#000", color: "#fff", boxShadow: "none" }}
          dateClassName={styles.timelineDate}
          // icon={<WorkIcon />}
        >
          <h5
            className="vertical-timeline-element-subtitle"
            style={{
              marginBottom: "20px",
              opacity: ".75",
            }}
          >
            CSE-110
          </h5>
          <h3 className="vertical-timeline-element-title">
            {data.title[lang]}
          </h3>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
