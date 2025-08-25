const TypeWriter = () => {
  return (
    <div
      className="react-typewriter-wrapper"
      style={{
        margin: 0,
        padding: 0,
        border: "1px solid green",
      }}
    >
      <div
        className="react-typewriter-controllers"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></div>
      <div
        contentEditable={true} // editable div
        className="react-typewriter-editor"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
};

export default TypeWriter;
