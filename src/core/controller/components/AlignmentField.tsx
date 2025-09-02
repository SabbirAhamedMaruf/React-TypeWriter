import { generalControllerTypes } from "../../../types/typewriterTypes";
import {
  MdFormatAlignCenter,
  MdFormatAlignJustify,
  MdFormatAlignRight,
  MdOutlineFormatAlignLeft,
} from "react-icons/md";

const alignmentOptions = [
  { key: "left", icon: MdOutlineFormatAlignLeft },
  { key: "center", icon: MdFormatAlignCenter },
  { key: "right", icon: MdFormatAlignRight },
  { key: "justify", icon: MdFormatAlignJustify },
];

const AlignmentField = ({ value, onChange }: generalControllerTypes) => {
  return (
    <div style={{ display: "flex", alignContent: "center" }}>
      {alignmentOptions?.map((alignmentOption) => {
        const { key, icon: Icon } = alignmentOption || {};
        return (
          <button
            key={key}
            type="button"
            style={{
              maxHeight: "24px",
              maxWidth: "24px",
              cursor: "pointer",
              padding: "4px",
            }}
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
};

export default AlignmentField;
