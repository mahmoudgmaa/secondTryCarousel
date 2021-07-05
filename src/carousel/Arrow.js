import React from "react";
import classnames from "classnames";
import Button from "./style/Button";
import { cssPrefix } from "./utils/helpers";
import Button from "./style/Button";

const directionIcons = {
  left: "❮",
  right: "❯",
  up: "❮",
  down: "❯",
};

const rotateStyle = (direction) => {
  let rotate = {};
  if (direction === "up" || direction === "down") {
    rotate.transform = "rotate(90deg)";
  }
  return rotate;
};

const Arrow = ({ direction, onClick, icons, style, ...rest }) => {
  const arrows = { ...directionIcons, ...icons };
  const styleObj = {
    ...rotateStyle(direction),
  };
  return (
    <Button
      className={classnames(
        cssPrefix("arrow"),
        cssPrefix("arrow") + "-" + direction
      )}
      style={styleObj}
      tabIndex={0}
      onClick={onClick}
      {...rest}
    >
      {arrows[direction]}
    </Button>
  );
};

export default Arrow;
