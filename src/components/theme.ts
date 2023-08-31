import { DefaultTheme } from "@react-navigation/native";
import { Dimensions, PixelRatio } from "react-native";

export const DEVICE_WIDTH = Dimensions.get("screen").width;
export const DEVICE_HEIGHT = Dimensions.get("screen").height;
export const DEVICE_RESOLUTION_X =
  PixelRatio.getPixelSizeForLayoutSize(DEVICE_WIDTH);
export const DEVICE_RESOLUTION_Y =
  PixelRatio.getPixelSizeForLayoutSize(DEVICE_HEIGHT);

const diagonal = Math.sqrt(
  Math.pow(DEVICE_WIDTH, 2) + Math.pow(DEVICE_HEIGHT, 2)
);

const getByScreenSize = <T>(big: T, small: T): T =>
  diagonal <= 800 ? small : big;

export const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    surface: "#f6f6f6",
    background: "#ffffff",
    dark: "#111111",
    black: "#000000",
    white: "#ffffff",
    link: "#8ab4f8",
    primary: "#83A2BE",
    primarySecondary: "#F4F6F9",
    text: "#181725",
    textLight: "#2E2E2E",
    textSecondary: "rgba(0,0,0,0.5)",
    textSecondary1: "#474747",
    separator: "#c0c0c0",
    separatorLight: "#efefef",
    transparent: "transparent",
  },

  unit: getByScreenSize(5, 4), // Grid size: 5px
  unitEven: getByScreenSize(4, 3),
  units: (n: number) => AppTheme.unit * n,
  unitsEven: (n: number) => AppTheme.unitEven * n,

  metrics: {
    radius: 10,
    radiusLarge: 20,
    radiusMedium: 8,
    radiusSmall: 5,
  },

  fontText: {
    xl: getByScreenSize(18, 16),
    l: getByScreenSize(17, 15),
    m: getByScreenSize(16, 14),
    s: getByScreenSize(15, 13),
  },

  getByScreenSize,
};
