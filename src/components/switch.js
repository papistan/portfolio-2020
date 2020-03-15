import React from "react"
import styled from "styled-components"

const Switch = styled.div`
  width: 40px;
  margin-right: 0;
  margin-top: 15px;
  height: 40px;
  border-radius: 50%;
  background: ${props =>
    props.lightMode ? "linear-gradient(145deg, #d3d5d1, #fafef8)" : "#121212"};
  box-shadow: ${props =>
    props.lightMode
      ? "7px 7px 14px #c7c9c5, -7px -7px 14px #ffffff"
      : "0px 0px 20px 10px #0ff"};

  &:hover {
    cursor: pointer;
    background: ${props =>
      props.lightMode
        ? "linear-gradient(145deg, #d3d5d1, #fafef8)"
        : "#121212"};
    box-shadow: ${props =>
      props.lightMode
        ? "inset 0 0 100px 100px rgba(255, 255, 255, 0.25)"
        : "0px 0px 20px 0px #0ff"};
  }

  &:active {
    background: ${props => (props.lightMode ? "#f9fff8" : "#121212")};
    box-shadow: ${props =>
      props.lightMode
        ? "inset 9px 9px 18px #cfd4ce, inset -9px -9px 18px #ffffff"
        : "0px 0px 0px 0px #0ff"};
  }

  &:after {
    content: ${props => (props.lightMode ? "'◑'" : "")};
    font-size: 27px;
    padding-left: 7px;
    padding-top: 2px;
  }
`

export default Switch
