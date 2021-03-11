import React from "react";
import { useSelector } from "react-redux";

const MemeWrapper = () => {
  const text = useSelector((store) => store.text);
  const src = useSelector((store) => store.src);
  return (
    <div className="relative">
      <img
        className="border-2 border-black mx-20 my-2 mx-auto min-w-lg max-w-lg"
        src={src}
      ></img>
      <p className="absolute text-white font-black text-8xl left-0 right-0 top-0">
        {text}
      </p>
    </div>
  );
};

export default MemeWrapper;
