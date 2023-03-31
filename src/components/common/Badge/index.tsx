import React from "react";

export interface BadgeProps {
    text: string;
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({text, className}) => {
  return (
      <p className={`flex flex-col justify-center h-[calc(100%-1.5rem)] min-h-[60%] items-center w-max px-4 rounded-full font-inter text-sm ${className}`}>
        {text}
      </p>
  );
};

export default Badge;
