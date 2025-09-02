import React from "react";
import "../style/style.css";
import { controllers } from "./controller/controllerSchema";
import ControllerMapping from "./controller/ControllerMapping";
import { getEditionSelectionRange } from "../utils/editor";

const Typewriter = ({ onChange = (value: string) => {} }) => {
  const handleEdit = (e: InputEvent) => {
    const { anchorNode } = getEditionSelectionRange();
    if (!anchorNode) return;
    let currentAnchorNode = anchorNode;

    // If the anchor is an element, try to get the first text node inside
    if (currentAnchorNode.nodeType === Node.ELEMENT_NODE && currentAnchorNode.childNodes.length > 0) {
      currentAnchorNode = currentAnchorNode.childNodes[0];
    }
    if (currentAnchorNode.nodeType === Node.TEXT_NODE) {
      const textContent = currentAnchorNode.textContent || "";
      const parent = currentAnchorNode.parentNode as HTMLElement;

      // Wrap in <p> if parent is not <p>
      if (parent && parent.tagName.toLowerCase() !== "p" && textContent) {
        const p = document.createElement("p");
        p.style.padding = "0px";
        p.style.margin = "0px";
        p.textContent = textContent;
        parent.replaceChild(p, currentAnchorNode);

        // Move caret to end
        const range = document.createRange();
        range.setStart(p.firstChild || p, p.textContent?.length || 0);
        range.collapse(true);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
    }
  };

  return (
    <div className="react-typewriter-wrapper">
      <div className="react-typewriter-controllers-and-editor">
        <div className="react-typewriter-controllers">
          {/* mapping controller buttons */}
          {controllers?.map((controller, index) => {
            if (!controller?.field_type) return;
            return <ControllerMapping key={index} field_type={controller?.field_type} value={""} onChange={() => {}} />;
          })}
        </div>
        <div
          className="react-typewriter-editor"
          contentEditable
          suppressContentEditableWarning
          onBeforeInput={(e) => handleEdit(e?.nativeEvent as InputEvent)}
          onInput={(e) => {
            const target = e.currentTarget as HTMLElement;
            onChange(target.innerHTML);
          }}
        />
      </div>
    </div>
  );
};

export default Typewriter;
