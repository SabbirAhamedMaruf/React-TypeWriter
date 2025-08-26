import { ComponentType, SVGProps } from "react";
import { TypeWriterAssets } from "../assets/asset";

export type pluginsItemTypes = {
  key: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const typeWriterPluginsMapping: Record<string, pluginsItemTypes[]> = {
  basic: [
    { key: "bold", icon: TypeWriterAssets.boldLogo },
    { key: "italic", icon: TypeWriterAssets.italicLogo },
    { key: "underline", icon: TypeWriterAssets.underlineLogo },
    { key: "underline-dashed", icon: TypeWriterAssets.underlineDashedLogo },
    { key: "underline-wavy", icon: TypeWriterAssets.underlineWavyLogo },
    { key: "line-spacing", icon: TypeWriterAssets.lineSpacingLogo },
    { key: "align-left", icon: TypeWriterAssets.alignLeftLogo },
    { key: "align-center", icon: TypeWriterAssets.alignCenterLogo },
    { key: "align-right", icon: TypeWriterAssets.alignRightLogo },
    { key: "color-fill", icon: TypeWriterAssets.colorFillLogo },
    { key: "link", icon: TypeWriterAssets.linkLogo },
    { key: "remove-link", icon: TypeWriterAssets.removeLinkLogo },
    { key: "number-list", icon: TypeWriterAssets.numberListLogo },
    { key: "bullet-list", icon: TypeWriterAssets.bulletListLogo },
    { key: "remove-list", icon: TypeWriterAssets.removeListLogo },
  ],
};
