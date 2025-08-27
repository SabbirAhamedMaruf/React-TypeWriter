import { ComponentType, SVGProps } from "react";
import { TypeWriterAssets } from "../assets/asset";
import ProcessBold from "../Components/ProcessBold";
import ProcessItalic from "../Components/ProcessItalic";
import ProcessUnderline from "../Components/ProcessUnderline";
import ProcessLeftAlign from "../Components/ProcessLeftAlign";
import ProcessCenterAlign from "../Components/ProcessCenterAlign";
import ProcessRightAlign from "../Components/ProcessRightAlign";
import ProcessColor from "../Components/ProcessColor";
import ProcessLink from "../Components/ProcessLink";
import { LineSpacingLogo } from "../assets/TypewriterIcons";

export type pluginsItemTypes = {
  key: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  element: ComponentType<any>;
};

export const typeWriterPluginsMapping: Record<string, pluginsItemTypes[]> = {
  basic: [
    { key: "bold", icon: TypeWriterAssets.boldLogo, element: ProcessBold },
    {
      key: "italic",
      icon: TypeWriterAssets.italicLogo,
      element: ProcessItalic,
    },
    {
      key: "underline",
      icon: TypeWriterAssets.underlineLogo,
      element: ProcessUnderline,
    },
    // { key: "underline-dashed", icon: TypeWriterAssets.underlineDashedLogo, element: },
    // { key: "underline-wavy", icon: TypeWriterAssets.underlineWavyLogo, element: },
    {
      key: "line-spacing",
      icon: TypeWriterAssets.lineSpacingLogo,
      element: LineSpacingLogo,
    },
    {
      key: "align-left",
      icon: TypeWriterAssets.alignLeftLogo,
      element: ProcessLeftAlign,
    },
    {
      key: "align-center",
      icon: TypeWriterAssets.alignCenterLogo,
      element: ProcessCenterAlign,
    },
    {
      key: "align-right",
      icon: TypeWriterAssets.alignRightLogo,
      element: ProcessRightAlign,
    },
    {
      key: "color-fill",
      icon: TypeWriterAssets.colorFillLogo,
      element: ProcessColor,
    },
    { key: "link", icon: TypeWriterAssets.linkLogo, element: ProcessLink },
    // { key: "remove-link", icon: TypeWriterAssets.removeLinkLogo, element: },
    // { key: "number-list", icon: TypeWriterAssets.numberListLogo, element: },
    // { key: "bullet-list", icon: TypeWriterAssets.bulletListLogo, element: },
    // { key: "remove-list", icon: TypeWriterAssets.removeListLogo, element: },
  ],
};
