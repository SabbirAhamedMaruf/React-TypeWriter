import { useEffect, useMemo, useRef, useState } from "react";
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

const Typewriter = ({
  value,
  plugins = ["basic"],
  onChange,
}: TypeWriterProps) => {
  // general states
  const [currentValue, setCurrentValue] = useState<ElementTypes[]>([
    { elementType: "", id: "", content: "", style: {}, childNodes: [] },
  ]);
  const [highLightedText, setHighLightedText] = useState("");

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

  console.log({ value, highLightedText, plugins });

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
              highLightedText={highLightedText}
              onChange={setCurrentValue}
            />
          ))}
        </div>
        {/* editors */}
        <div
          className="react-typewriter-editor"
          contentEditable
          suppressContentEditableWarning
          onMouseUp={() => setHighLightedText(processSelectionText())}
          onInput={(e) => {
            const currentEditor = e.currentTarget;
            normalizeEditor(currentEditor);
            processEditorNodeSchema(e);
          }}
        >
          {currentValue?.map((node) => useRenderElements(node))}
        </div>
      </div>
    </div>
  );
};

export default Typewriter;
