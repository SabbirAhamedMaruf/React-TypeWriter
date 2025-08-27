import React, { useEffect, useMemo, useState } from "react";
import { typewriterPluginsGenerator } from "../utils/typewriterUIManager";
import {
  normalizeEditor,
  preprocessor,
  processEditorNodeSchema,
  processSelectionText,
} from "../utils/typewriterHelper";
import "./style/style.css";
import { ElementTypes, useRenderElements } from "./hook/useRenderElements";

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
  // general states
  const [currentValue, setCurrentValue] = useState<ElementTypes[]>([
    { elementType: "", id: "", content: "", style: {}, childNodes: [] },
  ]);

  const [currentSelection, setCurrentSelection] =
    useState<selectionDataType | null>(null);

  // getting editor plugins
  const pluginsBtns = useMemo(
    () => typewriterPluginsGenerator(plugins),
    [plugins]
  );

  // Main trigger
  useEffect(() => {
    if (typeof value === "string" && value) {
      const processedEidtorHtmlSchema = preprocessor(value);
    }
  }, [value]);

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
              value={value}
              selectionData={currentSelection}
              onChange={setCurrentValue}
            />
          ))}
        </div>
        {/* editors */}
        <div
          className="react-typewriter-editor"
          contentEditable
          suppressContentEditableWarning
          onMouseUp={(e) => {
            // getting editor selection data.
            const selection = window.getSelection();
            const range = selection?.getRangeAt(0);
            const selectedText = range?.cloneContents();
            // setting editor selection data for styling
            setCurrentSelection({ selection, range, selectedText });
          }}
          onInput={(e) => {
            const currentEditor = e.currentTarget;
            normalizeEditor(currentEditor);
            // const data = processEditorNodeSchema(e);
            const editorInnerHTML = currentEditor.innerHTML;
            onChange(editorInnerHTML);
          }}
        />
      </div>
    </div>
  );
};

export default Typewriter;
