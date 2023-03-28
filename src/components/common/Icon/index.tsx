import React, {ComponentType} from "react";

interface IIConProps {
  IconComponent: ComponentType;
  activeColor?: string;
  className?: string;
}

const Icon: React.FC<IIConProps> = ({ IconComponent, className, activeColor }) => {
  // return <img src={iconSrc} alt="" className={`h-full w-6 ${className}`}/>
  return (
    <div className={`${className}`}>
      <IconComponent />
    </div>
  );
};

export default Icon;
