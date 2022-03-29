import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Sprite from "../assets/sprite.svg";
import "../styles/components/icon.scss";

const Icon = ({ id, name, size, fill, className, onClick, ...props }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    className={classNames(
      "c-icon__svg",
      size ? `c-icon--${size}` : "",
      fill ? `c-icon--${fill}` : "",
      className
    )}
    {...props}
    id={id}
  >
    <use href={Sprite + `#${name}`}></use>
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOf(["xxs", "xs", "sm", "md", "lg", "xl", "xxl"]),
  fill: PropTypes.string,
  className: PropTypes.string,
  bubble: PropTypes.bool,
};

export default Icon;
