import React from "react";

function ServiceCard({ icon, iconColor, title, description, description1, description2 }) {
  const Icon = icon;
  return (
    <div className="bg-green-900 leading-3 mx-auto my-10 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-900 shadow-lg shadow-green-500/50 dark:shadow-lg lg:mx-8 dark:shadow-green-800/80 w-4/5 lg:w-2/5 rounded-lg pt-6">
      <Icon className={`text-3xl  mx-auto flex ${iconColor} mb-4`} />
      <h2 className="text-xl text-center text-main font-bold mb-2">{title}</h2>
      <p className="font-first ml-4 text-left text-white">-{description}</p>
      <p className="font-first ml-4 text-left text-white">-{description1}</p>
      <p className="font-first ml-4 text-left text-white">-{description2}</p>
    </div>
  );
}

export default ServiceCard;
