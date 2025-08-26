import { typrWriterLogger } from "./typewriterLogger";
import {
  typeWriterPluginsMapping,
  pluginsItemTypes,
} from "../plugins/pluginsListMapping";

export const typewriterPluginsGenerator = (
  plguinsList: string[] = ["basic"]
) => {
  let currentPlugins: string[] = [];
  // fallback for empty plugins
  if (!plguinsList?.length) {
    typrWriterLogger("plugins list is empty. loading basic plugins", "warn");
    currentPlugins = ["basic"];
  } else if (!plguinsList?.includes("basic")) {
    currentPlugins = ["basic", ...plguinsList];
  } else {
    currentPlugins = plguinsList;
  }
  // getting all plugins
  const allPluginsData = Object.entries(typeWriterPluginsMapping).reduce<
    pluginsItemTypes[]
  >((acc, [key, value]) => {
    if (currentPlugins.includes(key) && value?.length > 0) {
      acc.push(...value);
    }
    return acc;
  }, []);
  return allPluginsData;
};
