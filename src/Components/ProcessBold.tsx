import { generalComponentTypes } from "./componentTypes";
import { typrWriterLogger } from "../utils/typewriterLogger";
const ProcessBold = ({
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
export default ProcessBold;
