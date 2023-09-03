import React from "react";
import button from "../../../../styles/buttons.module.scss";

type ButtonProps = {
  onClick: () => void;
  showMore: boolean;
};

const MoreButton: React.FC<ButtonProps> = ({ onClick, showMore }) => {
  return (
    <button
      type="button"
      className={`${button.primaryButton}`}
      onClick={onClick}
    >
      {showMore ? "Show less -" : "Show more +"}
    </button>
  );
};

export default MoreButton;
