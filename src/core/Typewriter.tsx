import TypewriterButton from "../Components/Shared/TypewriterButton";
import { typewriterPluginsGenerator } from "../utils/typewriterUIManager";
import "./style/style.css";

type TypeWriterProps = {
  plugins?: string[];
  onChange?: (value: string) => void;
};

const Typewriter = ({
  plugins = ["basic"],
  onChange = () => {},
}: TypeWriterProps) => {
  const pluginsBtns = typewriterPluginsGenerator(plugins) || [];

  return (
    <div className="react-typewriter-wrapper">
      {/* typewriter controller and editor */}
      <div className="react-typewriter-controllers-and-editor">
        <div className="react-typewriter-controllers">
          {pluginsBtns.map((plugin, index) => (
            <TypewriterButton key={plugin.key ?? index} icon={plugin.icon} />
          ))}
        </div>
        <div
          className="react-typewriter-editor"
          contentEditable
          suppressContentEditableWarning
          onInput={(e) => {
            onChange?.((e.target as HTMLElement).innerText);
          }}
        />
      </div>
    </div>
  );
};
export default Typewriter;
