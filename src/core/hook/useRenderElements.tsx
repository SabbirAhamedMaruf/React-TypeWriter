// Typewriter.tsx
import React, { FormEvent, useState, useRef } from "react";
import { v4 as uuid } from "uuid";

export type ElementTypes = {
  elementType: string;
  id: string;
  style?: React.CSSProperties;
  content?: string | null;
  childNodes?: ElementTypes[];
};

// Helper hook to render html element based on value schema.
export const useRenderElements = (node: ElementTypes): React.ReactNode => {
  const { elementType, id, style = {}, content = "", childNodes = [] } = node;

  switch (elementType) {
    case "p":
      return (
        <p key={id} style={style}>
          {content}
          {childNodes.map(useRenderElements)}
        </p>
      );
    case "ul":
      return (
        <ul key={id} style={style}>
          {childNodes.map(useRenderElements)}
        </ul>
      );
    case "ol":
      return (
        <ol key={id} style={style}>
          {childNodes.map(useRenderElements)}
        </ol>
      );
    case "li":
      return (
        <li key={id} style={style}>
          {content}
          {childNodes.map(useRenderElements)}
        </li>
      );
    case "img":
      return <img key={id} src={content ?? ""} style={style} alt="" />;
    case "span":
      return (
        <span key={id} style={style}>
          {content}
          {childNodes.map(useRenderElements)}
        </span>
      );
    default:
      break;
  }
};
