import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { roadmapData } from "../data/roadmap";
import styles from "./Roadmap.module.scss";

export default function Roadmap() {
  return (
    <VerticalTimeline lineColor="#000" className={styles.timeline}>
      {roadmapData.map((data, i) => (
        <VerticalTimelineElement
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
          <h3 className="vertical-timeline-element-title">{data.title}</h3>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
