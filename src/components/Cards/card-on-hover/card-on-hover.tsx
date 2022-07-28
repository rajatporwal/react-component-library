import React from "react";

export interface CardOnHoverProps {
    name: string;
    description: string;
    readMoreUrl: string;
    cardTitle: string;
  }
  

const CardOnHover = (props: CardOnHoverProps) => {
    const { name, description, readMoreUrl, cardTitle } = props
  return (
    <div className="card-on-hover">
      <div className="face face1">
        <div className="content">
          <h2>{name}</h2>
          <p>{description}</p>
          <a href={readMoreUrl} target='_blank'>Read More</a>
        </div>
      </div>
      <div className="face face2">
        <h2>{cardTitle}</h2>
      </div>
    </div>
  );
};

export default CardOnHover;
