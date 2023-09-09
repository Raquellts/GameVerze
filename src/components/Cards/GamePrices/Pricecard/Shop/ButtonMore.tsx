import React from "react";
import button from "../../../../../styles/buttons.module.scss";

type ButtonProps = {
  onClick: () => void;
  showMore: boolean;
};

const MoreButton: React.FC<ButtonProps> = ({ onClick, showMore }) => {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        className={`${button.primaryButton}`}
        onClick={onClick}
      >
        {showMore ? "Show less -" : "Show more +"}
      </button>
    </div>
  );
};

export default MoreButton;
