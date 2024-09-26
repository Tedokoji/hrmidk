import React from "react";
import Image from "next/image"
import "./Thumbnail.scss";
function Thumbnail(props) {
  return (
    <div className="thumbnail-wrapper" onClick={props.onClick}>
      <div className="thumbnail-content">
        <div className="thumbnail-content">
          <Image className="thumbnail-image" alt="icon" src={props.src}/>
          <div className="thumbnail-title">{props.title || "Sex With Biden"}</div>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
