import React from "react";
import { Link } from "react-router-dom";
import "./showlist.css";

function ShowList({ newdata }) {
  const showdata =
    newdata &&
    newdata.map((show, index) => {
      return (
        <Link to={`/singlepost/${show.slug}`} key={index} className="showdata">
          <img src={show.image.key_0.url} />
          <h3> {show.title} </h3>
          <p> {show.description} </p>
          <div className="header"></div>
        </Link>
      );
    });
  return <div className="wrapperdata">{showdata}</div>;
}

export default ShowList;
