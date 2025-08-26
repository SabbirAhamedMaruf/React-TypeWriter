type logTypes = "warn" | "error" | "log";
export const typrWriterLogger = (
  message?: string,
  logType: logTypes = "log"
) => {
  switch (logType) {
    case "error":
      console.error(`Log: REACT-TYPEWRITER => ${message}`);
      break;
    case "warn":
      console.warn(`Log: REACT-TYPEWRITER => ${message}`);
      break;
    default:
      console.log(`Log: REACT-TYPEWRITER => ${message}`);
      break;
  }
};
