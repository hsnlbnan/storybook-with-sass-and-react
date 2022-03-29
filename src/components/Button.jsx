import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/components/button.module.scss";
import cn from "classnames";

const Button = ({
  label,
  design,
  outline,
  block,
  pill,
  disabled,
  width,
  height,
  fontWeight,
  ...props
}) => {
  return (
    <>
      <button
        className={cn(
          styles.default,
          {
            [styles.block]: block,
            [styles.pill]: pill,
            [styles.disabled]: disabled,
          },
          width ? styles[width + "-w"] : "",
          height ? styles[height + "-h"] : "",
          fontWeight ? styles[fontWeight] : "",
          design !== null &&
            (outline ? styles[design + "-outline"] : styles[design])
        )}
        {...props}
      >
        {label}
      </button>
    </>
  );
};

Button.propTypes = {
  design: PropTypes.oneOf([
    "brand",
    "danger",
    "dark",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ]),
  label: PropTypes.string,
  block: PropTypes.bool,
  pill: PropTypes.bool,
  disabled: PropTypes.bool,
  fontWeight: PropTypes.oneOf(["regular", "bold"]),
  outline: PropTypes.bool,
  width: PropTypes.oneOf(["sm", "md", "lg"]),
  height: PropTypes.oneOf(["sm", "md", "lg"]),
};

Button.defaultProps = {
  design: "primary",
  width: "lg",
  height: "lg",
};

export default Button;
