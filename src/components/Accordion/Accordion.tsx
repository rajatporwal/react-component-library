import React from "react";
import "./Accordion.scss";
export interface AccordionProps {
  title: string;
  content: string;
}

const Accordion = (props: AccordionProps) => {
  return (
    <div className="accordion">
        <details>
          <summary>
            <span className="heading-5-inherit pad-l-s">{props.title}</span>
          </summary>
          <div className="accordion__content">{props.content}</div>
        </details>
    </div>
  );
};

export default Accordion;
