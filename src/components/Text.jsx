import React from "react";

const sizeClasses = {
  txtInterMedium50Gray900b5: "font-inter font-medium",
  txtInterLight24: "font-inter font-light",
  txtInterMedium50: "font-inter font-medium",
  txtInterSemiBold36: "font-inter font-semibold",
  txtInterMedium21: "font-inter font-medium",
  txtInterMedium27: "font-inter font-medium",
  txtInterMedium21WhiteA700: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Text ;
