import { selectionDataType } from "../types/typewriterTypes";

// Helper function for editor process html strucutre into a html object schema from external source.
export const preprocessor = (value: string) => {
  const schema = value?.split("/>");
  console.log({ schema });
};

export const getEditorSelection = (): selectionDataType => {
  const selection: Selection | null = window.getSelection();
  if (!selection || selection.rangeCount === 0) return { selection: null, range: undefined, selectedText: undefined };
  const range: Range | undefined = selection?.getRangeAt(0);
  const selectedText: DocumentFragment | undefined = range?.extractContents();
  return { selection, range, selectedText };
};

export const createHTMLElement = () => {};

// Replaced editablediv text content into a paragraph element.
export const normalizeEditor = (editor: HTMLDivElement) => {
  Array.from(editor.childNodes)?.forEach((node) => {
    const { nodeName, nodeType, textContent, TEXT_NODE: textNode, ELEMENT_NODE } = node || {};
    // normalized text into wrapped paragraph element
    if (nodeType === textNode && textContent?.trim()) {
      const p = document.createElement("p");
      p.textContent = textContent;
      p.style.padding = "0px";
      p.style.margin = "0px";
      editor.replaceChild(p, node);
    }
  });
};
