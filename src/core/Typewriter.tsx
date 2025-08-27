import React, { useEffect, useMemo, useRef, useState } from "react";
import { typewriterPluginsGenerator } from "../utils/typewriterUIManager";
import { normalizeEditor } from "../utils/typewriterHelper";
import "./style/style.css";
import { ElementTypes } from "./hook/useRenderElements";

type TypeWriterProps = {
  value: string;
  plugins?: string[];
  onChange?: (value: string) => void;
};

export type selectionDataType = {
  selection: Selection | null;
  range: Range | undefined;
  selectedText: DocumentFragment | undefined;
};

const Typewriter = ({
  value,
  plugins = ["basic"],
  onChange = () => {},
}: TypeWriterProps) => {
  const [currentSelection, setCurrentSelection] =
    useState<selectionDataType | null>(null);

  const editorRef = useRef<HTMLDivElement>(null);

  // Generalized change handler
  const handleEditorChange = (editor: HTMLDivElement) => {
    normalizeEditor(editor);
    onChange(editor.innerHTML);
  };

  const pluginsBtns = useMemo(
    () => typewriterPluginsGenerator(plugins),
    [plugins]
  );

  return (
    <div className="react-typewriter-wrapper">
      <div className="react-typewriter-controllers-and-editor">
        {/* controllers */}
        <div className="react-typewriter-controllers">
          {pluginsBtns.map(({ key, icon, element: PluginComponent }) => (
            <PluginComponent
              key={key}
              indentifier={key}
              icon={icon}
              selectionData={currentSelection}
              onChange={() => {
                if (editorRef.current) handleEditorChange(editorRef.current);
              }}
            />
          ))}
        </div>

        {/* editor */}
        <div
          ref={editorRef}
          className="react-typewriter-editor"
          contentEditable
          suppressContentEditableWarning
          onMouseUp={() => {
            const selection = window.getSelection();
            const range = selection?.getRangeAt(0);
            const selectedText = range?.cloneContents();
            setCurrentSelection({ selection, range, selectedText });
            if (editorRef.current) handleEditorChange(editorRef.current);
          }}
          onInput={() => {
            if (editorRef.current) handleEditorChange(editorRef.current);
          }}
        />
      </div>
    </div>
  );
};

export default Typewriter;
