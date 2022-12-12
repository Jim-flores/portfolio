import React from "react";
import { RotatingLines } from "react-loader-spinner";
type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="h-screen w-screen absolute bg-[#ffffff1f] items-center text-center scrollbar-none flex flex-col">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loader;
