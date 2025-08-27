import { ComponentType, SVGProps } from "react";
export type generalComponentTypes = {
  value?: string;
  highLightedText?: string;
  indentifier: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  onChange: (value: string) => void;
};
