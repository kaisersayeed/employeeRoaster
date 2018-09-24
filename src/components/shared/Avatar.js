import React from "react";

const Avatar = props => {
  return props.imgSrc ? (
    <img src={props.imgSrc} />
  ) : null;
};
export default Avatar;
