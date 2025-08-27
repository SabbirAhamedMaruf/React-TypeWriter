import { ComponentType, SVGProps } from "react";
import { generalComponentTypes } from "./componentTypes";
const ProcessCenterAlign = ({
  value = "",
  highLightedText = "",
  indentifier = "",
  icon: Icon,
}: generalComponentTypes) => {
  return (
    <div className={`react-typewriter-${indentifier}`}>
      <Icon height={"24px"} width={"24px"} />
    </div>
  );
};
export default ProcessCenterAlign;
