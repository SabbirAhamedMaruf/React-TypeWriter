import { generalComponentTypes } from "./componentTypes";
import { selectionDataType } from "../core/Typewriter";

const ProcessBold = ({
  value = "",
  selectionData = null,
  indentifier = "",
  icon: Icon,
  onChange = () => {},
}: generalComponentTypes) => {
  const handleBoldProcessing = (
    selectionData: selectionDataType | null,
    style: Partial<CSSStyleDeclaration>
  ) => {
    if (!selectionData?.selection || !selectionData.range) return;
    const { selection, range, selectedText } = selectionData;
    if (!selectedText || !selectedText.hasChildNodes()) return;

    const span = document.createElement("span");
    Object.assign(span.style, style);
    span.appendChild(selectedText);

    // Replace the original range content with the styled span
    range.deleteContents(); // remove original selected content
    range.insertNode(span);

    // Move cursor after the new styled element
    range.setStartAfter(span);
    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);
    onChange(); // getting latest innerHTML
  };

  return (
    <div
      onClick={() =>
        handleBoldProcessing(selectionData, { fontWeight: "bold" })
      }
      className={`react-typewriter-${indentifier}`}
    >
      <Icon height={24} width={24} />
    </div>
  );
};

export default ProcessBold;
