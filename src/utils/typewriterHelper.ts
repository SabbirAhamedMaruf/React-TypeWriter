import { FormEvent } from "react";
import { processElementData } from "../core/hook/typewriterrules";
import {
  ElementTypes,
  useRenderElements,
} from "../core/hook/useRenderElements";
import { types } from "node:util";

// Helper function for editor process html strucutre into a html object schema from external source.
export const preprocessor = (value: string) => {
  const schema = value?.split("/>");
  console.log({ schema });
};

// Replaced editablediv text content into a paragraph element.
export const normalizeEditor = (editor: HTMLDivElement) => {
  Array.from(editor.childNodes)?.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
      const p = document.createElement("p");
      p.textContent = node.textContent;
      p.style.padding = "0px";
      p.style.margin = "0px";
      editor.replaceChild(p, node);
    }
  });
};

// Helper function of editor to process (Event | OnInput)
export const processEditorNodeSchema = (
  event: FormEvent<HTMLDivElement>
): ElementTypes[] => {
  const target = event.currentTarget;
  const childNodes = target.childNodes || [];
  return Array.from(childNodes).map((node) => processElementData(node));
};

// Helper function of selection text. (Event | OnMouseUp)
// TODO: Need to implemented text hover function
export const processSelectionText = () => {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    const selectedText = selection.toString();
  }
  return "";
};
