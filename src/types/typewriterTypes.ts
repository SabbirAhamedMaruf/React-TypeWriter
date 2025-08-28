import { ComponentType, SVGProps } from "react";

// Editor Core Types
export type typewriterTypes = {
  value: string;
  plugins?: string[];
  onChange?: (value: string) => void;
};

export type selectionDataType = {
  selection: Selection | null;
  range: Range | undefined;
  selectedText: DocumentFragment | undefined;
};

// Editor Controller Types
export type generalComponentTypes = {
  value?: string;
  selectionData?: selectionDataType | null;
  indentifier: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  onChange: () => void;
};

// Editor Plugins Types
export type pluginsItemTypes = {
  key: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  element: ComponentType<any>;
};
