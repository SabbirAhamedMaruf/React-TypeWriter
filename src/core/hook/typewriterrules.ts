import { v4 as uuid } from "uuid";
import { ElementTypes } from "./useRenderElements";

export const processElementData = (node: Node): ElementTypes => {
  const { nodeType, nodeName, textContent, childNodes } = node;
  const id = uuid();
  if (nodeType === Node.TEXT_NODE) {
    return {
      elementType: "span",
      id,
      content: textContent,
      style: {},
    };
  }

  const type = nodeName.toLowerCase();
  // processing nested childnodes
  const children: ElementTypes[] = Array.from(childNodes || []).map((c) =>
    processElementData(c)
  );

  switch (type) {
    case "p":
      return {
        elementType: "p",
        id,
        content: textContent,
        style: {},
        childNodes: children,
      };
    case "ul":
      return { elementType: "ul", id, style: {}, childNodes: children };
    case "ol":
      return { elementType: "ol", id, style: {}, childNodes: children };
    case "li":
      return {
        elementType: "li",
        id,
        content: textContent,
        style: {},
        childNodes: children,
      };
    case "img":
      return {
        elementType: "img",
        id,
        content: (node as HTMLImageElement).src,
        style: {},
      };
    case "span":
      return {
        elementType: "span",
        id,
        content: textContent,
        style: {},
        childNodes: children,
      };
    default:
      return {
        elementType: type,
        id,
        content: textContent,
        style: {},
        childNodes: children,
      };
  }
};
