import React from "react";

function MainServiceCard({ icon, iconColor, title, description}) {
const Icon = icon;
return (
<div className="bg-main lg:w-4/5 hover:animate-bounce rounded-lg p-2 flex flex-row  my-3 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-900 shadow-lg shadow-green-500/50 dark:shadow-lg lg:mx-8 dark:shadow-green-800/80">
<div className="flex flex-col justify-center">
<h2 className="text-xl text-center text-black font-bold">{title}</h2>
</div>
<Icon className={`text-xl ml-auto my-auto  ${iconColor}`} />
</div>
);
}

export default MainServiceCard;