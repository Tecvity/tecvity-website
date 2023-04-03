import React from "react";

const ExpertCard = ({
  title,
  description,
  image,
  altText,
  icon,
  iconColor,
}) => {
  return (
    <div className="bg-main text-center rounded-lg mx-8 lg:mx- my-2 lg:my-8 overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="flex items-center mb-2">
          {icon && <div className="flex items-center mx-auto justify-center w-1/2 lg:w-1/3">{icon}</div>}
        </div>
          <div className="font-bold text-black text-xl">{title}</div>
        <p className="text-green-900 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ExpertCard;
