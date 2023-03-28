import { IIconComponentProps } from "models/IIcon";
import React from "react";

const Icon: React.FC<IIconComponentProps> = ({ IconComponent, className, activeColor }) => {
  return (
    <div className={`${className}`}>
      <IconComponent />
    </div>
  );
};

export default Icon;
