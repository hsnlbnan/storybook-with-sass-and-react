import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/components/checkbox.module.scss";
function Checkbox({ value, placeholder, checked, disable }) {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" defaultChecked={checked} disabled={disable} />
      {placeholder ? placeholder : ""}
    </label>
  );
}

Checkbox.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disable: PropTypes.bool,
};

Checkbox.defaultpropTypes = {
  disable: false,
};
export default Checkbox;
