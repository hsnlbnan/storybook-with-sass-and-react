import React from "react";
import styled from "../styles/components/radio.module.scss";

const Radio = ({
  valueName,
  value,
  disable,
  text,
  name,
  checked,

  multiple,
}) => {
  return (
    <>
      <label class={styled.radio}>
        <input type="radio" name={name} tabindex="1" value={valueName} />
        <span>{valueName}</span>
      </label>
    </>
  );
};
export default Radio;
