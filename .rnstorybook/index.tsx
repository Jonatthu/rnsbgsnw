import AsyncStorage from "@react-native-async-storage/async-storage";
import { view } from "./storybook.requires";
import { Platform } from "react-native";

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: (key: string) => {
      if (Platform.OS === "web") {
        if (typeof localStorage === "undefined") {
          return Promise.resolve("");
        }
        return Promise.resolve(localStorage.getItem(key));
      }
      return AsyncStorage.getItem(key);
    },
    setItem: (key: string, value: string) => {
      if (Platform.OS === "web") {
        return Promise.resolve(localStorage.setItem(key, value));
      }
      return AsyncStorage.setItem(key, value);
    },
  },
});

export default StorybookUIRoot;
