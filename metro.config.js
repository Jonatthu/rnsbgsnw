const path = require("path");

const withStorybook = require("@storybook/react-native/metro/withStorybook");
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

const withNativeWindConfig = withNativeWind(config, { input: "./global.css" });

const withStorybookConfig = withStorybook(withNativeWindConfig);

module.exports = withStorybookConfig;
