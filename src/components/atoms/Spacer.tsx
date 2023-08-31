import React from "react";
import { View, ViewStyle } from "react-native";
import { AppTheme } from "../theme";

type Props = {
  horizontal?: boolean;
  fill?: boolean | number;
  size?: number;
  fillColor?: string;
  border?: boolean;
};

const Spacer = ({ fill, size = 4, horizontal, fillColor, border }: Props) => {
  const style: ViewStyle = {
    [horizontal ? "width" : "height"]: AppTheme.unitsEven(size),
    flex: typeof fill === "number" ? fill : fill ? 1 : undefined,
    backgroundColor: fillColor,
    borderWidth: border ? 1 : 0,
  };

  return <View style={style} />;
};

export default Spacer;
