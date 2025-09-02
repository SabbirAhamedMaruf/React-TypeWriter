import { TbBold } from "react-icons/tb";
import { generalControllerTypes } from "../../../types/typewriterTypes";
import { cleanUpHTMLEditorDOM, getEditionSelectionRange } from "../../../utils/editor";

const BoldField = ({ value, onChange }: generalControllerTypes) => {
  const handleBoldFunctionality = () => {
    const { selection, range } = getEditionSelectionRange();
    if (!selection || !range || selection.toString().length === 0) return;

    const selectedText = selection.toString();
    let container = range.commonAncestorContainer as Node;

    console.log({ selection, range });

    if (container.nodeType === Node.TEXT_NODE) container = container.parentNode as Node;

    const isBoldWrapper = (el: HTMLElement | null): boolean => {
      if (!el) return false;
      const tag = el.tagName.toLowerCase();
      return (
        tag === "b" ||
        tag === "strong" ||
        el.style.fontWeight === "bold" ||
        window.getComputedStyle(el).fontWeight === "700"
      );
    };

    const boldWrapper = (container as HTMLElement)?.closest(
      "span[style*='font-weight:bold'], span[style*='font-weight: bold'], b, strong"
    ) as HTMLElement | null;

    if (boldWrapper) {
      const fullText = boldWrapper.textContent ?? "";

      if (fullText === selectedText) {
        // Unwrap entire span
        const frag = document.createDocumentFragment();
        while (boldWrapper.firstChild) frag.appendChild(boldWrapper.firstChild);
        boldWrapper.replaceWith(frag);
      } else {
        // Partial selection → split
        const startOffset = fullText.indexOf(selectedText);
        if (startOffset >= 0) {
          const beforeText = fullText.slice(0, startOffset);
          const middleText = selectedText;
          const afterText = fullText.slice(startOffset + selectedText.length);

          const frag = document.createDocumentFragment();

          if (beforeText) {
            const beforeSpan = document.createElement("span");
            beforeSpan.style.fontWeight = "bold";
            beforeSpan.style.display = "inline-block";
            beforeSpan.textContent = beforeText;
            frag.appendChild(beforeSpan);
          }

          frag.appendChild(document.createTextNode(middleText));

          if (afterText) {
            const afterSpan = document.createElement("span");
            afterSpan.style.fontWeight = "bold";
            afterSpan.style.display = "inline-block";
            afterSpan.textContent = afterText;
            frag.appendChild(afterSpan);
          }

          boldWrapper.replaceWith(frag);
        }
      }
    } else {
      // Wrap selection in bold
      const selectedContent = range.extractContents();
      const span = document.createElement("span");
      span.style.fontWeight = "bold";
      span.style.display = "inline-block";
      span.appendChild(selectedContent);
      range.insertNode(span);

      range.setStartAfter(span);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }

    // Cleanup editor DOM
    const editor = document.querySelector(".react-typewriter-editor") as HTMLElement;
    if (editor) cleanUpHTMLEditorDOM(editor, "span[style*='font-weight:bold'], b, strong");
  };

  return (
    <button
      type="button"
      onClick={handleBoldFunctionality}
      style={{
        maxHeight: "24px",
        maxWidth: "24px",
        cursor: "pointer",
        padding: "4px",
      }}
    >
      <TbBold />
    </button>
  );
};

export default BoldField;

// Fix needed

/**
 * first select some text for bold
 * then unbold on middle someting it will remove spacing
 *
 * fix nested span.
 *
 * fix pressing tab inside span will create list like pattern the bold text
 *
 * WORKING: Try to normalized the text and compare text with its parent element  also consider closeset span tag with style.
 * */
