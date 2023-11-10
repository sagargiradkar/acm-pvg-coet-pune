import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-bl-none rounded-br-[30px] rounded-tl-[30px] rounded-tr-none",
};
const variants = {
  fill: {
    light_blue_500: "bg-light_blue-500 text-white-A700",
    white_A700: "bg-white-A700 text-black-900",
  },
};
const sizes = { xs: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["light_blue_500", "white_A700"]),
};

export default Button;
