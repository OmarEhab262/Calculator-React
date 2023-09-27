import React from "react";

const Operation = (props) => {
  const handleButtonClick = () => {
    props.onClick(props.name); // Call the onClick handler provided by App component
  };

  return (
    <div>
      <div
        className=" bg-purple-700 flex justify-center items-center font-medium text-white rounded-md h-[80px] text-[30px] cursor-pointer hover:opacity-[.7] ease-in duration-300"
        onClick={handleButtonClick}
      >
        {props.name}
      </div>
    </div>
  );
};

export default Operation;
