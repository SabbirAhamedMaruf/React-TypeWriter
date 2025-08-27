import { ComponentType, SVGProps } from "react";
import { generalComponentTypes } from "./componentTypes";

const ProcessColor = ({
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
export default ProcessColor;
