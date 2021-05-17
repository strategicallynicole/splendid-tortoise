import React from "react"; 
import PropTypes from "prop-types";
import BtnStyle from './btn.style'; 
import "./button.scss";


const Button = ({
    className,
    children,
  ...props

}) => {
  const addClasses = [''];
  if (className) {
    addClasses.push(className);
  }

  

  return (
    <BtnStyle 
      className={addClasses.join(" ")}
      {...props}
    >
    {children}
    </BtnStyle>
  )
};

Button.propTypes = {
    as: PropTypes.oneOf(["button", "a",]), //--
    upperCase: PropTypes.bool, //--
  };

export default Button;
