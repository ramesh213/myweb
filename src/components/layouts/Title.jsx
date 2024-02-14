import React from "react";

const Layouts = ({title, desc}) => {
  return (
    <div className="flex flex-col gap-3 font-titleFont mb-8">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        {" "}
        {title}
      </h3>
      <h1 className="text-4xl font-bold text-gray-300 capitalize">{desc}</h1>
    </div>
  );
};

export default Layouts;
