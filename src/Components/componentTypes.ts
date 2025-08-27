import { ComponentType, SVGProps } from "react";
import { selectionDataType } from "../core/Typewriter";
export type generalComponentTypes = {
  value?: string;
  selectionData?: selectionDataType | null;
  indentifier: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  onChange: (value: string) => void;
};
