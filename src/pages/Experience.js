import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2021"
          iconStyle={{ background: "#3e497", colo: "fff" }}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
