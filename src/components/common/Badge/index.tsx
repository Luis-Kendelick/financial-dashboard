import React from "react";

export interface BadgeProps {
    text: string;
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({text, className}) => {
  return (
      <p className={`flex flex-col justify-center items-center h-8 w-max px-4 rounded-full font-inter text-sm ${className}`}>
        {text}
      </p>
  );
};

export default Badge;
