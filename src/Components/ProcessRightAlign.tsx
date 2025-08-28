import { ComponentType, SVGProps } from "react";
import { generalComponentTypes } from "../types/typewriterTypes";

const ProcessRightAlign = ({
  value = "",
  selectionData = null,
  indentifier = "",
  icon: Icon,
}: generalComponentTypes) => {
  return (
    <div className={`react-typewriter-${indentifier}`}>
      <Icon height={"24px"} width={"24px"} />
    </div>
  );
};
export default ProcessRightAlign;
