import React from "react";
import { ControllerMappingProps } from "../../types/typewriterTypes";
import BoldField from "./components/BoldField";
import AlignmentField from "./components/AlignmentField";

const ControllerMapping = React.memo(
  ({ field_type, value, onChange }: ControllerMappingProps) => {
    switch (field_type) {
      case "bold_field":
        return <BoldField value={value} onChange={onChange} />;
      case "alignment_field":
        return <AlignmentField value={value} onChange={onChange} />;
      default:
        return null;
    }
  },
  (prevProps, nextProps) => {
    // Optional: custom comparison to prevent re-renders
    return prevProps.value === nextProps.value;
  }
);

export default ControllerMapping;
