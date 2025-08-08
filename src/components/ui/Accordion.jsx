import React from "react";

const Accordion = ({
  Heading = "",
  collapseStatus = true,
  handleCollapse = () => {},
  children,
}) => {
  return (
    <div>
      <div  onClick={() => {
        handleCollapse();
      }}>{Heading}</div>
      {collapseStatus && children}
    </div>
  );
};

export default Accordion;
