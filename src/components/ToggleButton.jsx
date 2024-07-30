import React from "react";

const ToggleButton = ({ isToggled, toggle }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className={`${
          isToggled ? "bg-secondary" : "bg-tartiary"
        } relative inline-flex w-16 h-8 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none`}
        onClick={toggle}
      >
        <span
          className={`${
            isToggled ? "translate-x-7" : "translate-x-1"
          } inline-block h-6 w-8 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
        />
      </button>
    </div>
  );
};

export default ToggleButton;
