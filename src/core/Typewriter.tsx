import React, { useMemo, useRef, useState } from "react";
import { typewriterPluginsGenerator } from "../utils/typewriterUIManager";
import { getEditorSelection, normalizeEditor } from "../utils/typewriterHelper";
import { selectionDataType, typewriterTypes } from "../types/typewriterTypes";
import "./style/style.css";

const Typewriter = ({ value, plugins = ["basic"], onChange = () => {} }: typewriterTypes) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [currentSelection, setCurrentSelection] = useState<selectionDataType | null>(null);

  console.log({ currentSelection });

  // Generalized change handler
  const handleEditorChange = (editor: HTMLDivElement) => {
    normalizeEditor(editor);
    onChange(editor.innerHTML);
  };

  //  Loading plugins
  const pluginsBtns = useMemo(() => typewriterPluginsGenerator(plugins), [plugins]);

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
                if (editorRef.current) onChange(editorRef.current.innerHTML);
                setCurrentSelection(null);
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
            setCurrentSelection(getEditorSelection());
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
