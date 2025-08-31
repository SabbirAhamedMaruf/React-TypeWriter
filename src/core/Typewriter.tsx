import React, { useMemo, useRef, useState } from "react";
import "../style/style.css";

const Typewriter = () => {
  return (
    <div className="react-typewriter-wrapper">
      <div className="react-typewriter-controllers-and-editor">
        {/* controllers */}
        <div className="react-typewriter-controllers"></div>

        {/* editor */}
        <div className="react-typewriter-editor" contentEditable suppressContentEditableWarning />
      </div>
    </div>
  );
};

export default Typewriter;
