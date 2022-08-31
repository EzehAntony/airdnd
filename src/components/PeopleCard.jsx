import React from "react";

import "./PeopleCard.css";

function PeopleCard({ data }) {
  return (
    <div className="pc">
      <img src={data?.img} alt="" />
      <p className="caption">{data.caption} </p>
      <h3 className="name">{data.name} </h3>
      <h5 className="place">{data.place}</h5>
    </div>
  );
}

export default PeopleCard;
