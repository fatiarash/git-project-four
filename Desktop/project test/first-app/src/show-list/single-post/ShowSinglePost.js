import React from "react";
import "./single.css";

function ShowSinglePost({ singledata }) {
  const date = new Date(singledata && singledata.published_at);
  let publish = singledata && new Intl.DateTimeFormat("fa-IR").format(date);

  const showSingledata = singledata && (
    <div className="showsingle" key={singledata.id}>
      <img src={singledata.image.key_0.url} />
      <h1> {singledata.title} </h1>
      <p dangerouslySetInnerHTML={{ __html: singledata.content }}></p>
      <span>تاریخ انتشار مقاله : {publish} </span>
    </div>
  );
  return <div className="wrappersingle">{showSingledata}</div>;
}

export default ShowSinglePost;
