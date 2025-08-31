import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import "../style/style.css";

const Typewriter = ({ onChange = (value: string) => {} }) => {
  const handleEdit = (e: InputEvent) => {
    const selection = window.getSelection();
    if (!selection || !selection.anchorNode) return;
    let anchorNode = selection.anchorNode;
    // If the anchor is an element, try to get the first text node inside
    if (anchorNode.nodeType === Node.ELEMENT_NODE && anchorNode.childNodes.length > 0) {
      anchorNode = anchorNode.childNodes[0];
    }
    if (anchorNode.nodeType === Node.TEXT_NODE) {
      const textContent = anchorNode.textContent || "";
      const parent = anchorNode.parentNode as HTMLElement;

      // Wrap in <p> if parent is not <p>
      if (parent && parent.tagName.toLowerCase() !== "p" && textContent) {
        const p = document.createElement("p");
        p.setAttribute("data-id", uuidV4());
        p.style.padding = "0px";
        p.style.margin = "0px";
        p.textContent = textContent;
        parent.replaceChild(p, anchorNode);

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
        <div className="react-typewriter-controllers"></div>
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
