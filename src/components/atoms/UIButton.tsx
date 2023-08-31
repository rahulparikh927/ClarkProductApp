import React, { ReactNode } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import { AppTheme } from "../theme";

const variantColors = {
  primary: {
    backgroundColor: AppTheme.colors.black,
    borderColor: AppTheme.colors.black,
    labelColor: AppTheme.colors.background,
  },
};

export type ButtonVariant = keyof typeof variantColors;

type Props = {
  label?: ReactNode;
  variant?: ButtonVariant;
  onPress?: () => void;
  fill?: boolean;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

const UIButton = ({
  label,
  onPress,
  containerStyle,
  variant = "primary",
  style,
  fill,
}: Props) => {
  const { labelColor, ...variantStyle } = variantColors[variant];
  const labelStyle: TextStyle = {
    color: labelColor,
    fontSize: AppTheme.fontText.s,
  };
  const containerStyles = [
    styles.container,
    fill && styles.fill,
    containerStyle,
    variantStyle,
  ];

  return (
    <Pressable onPress={onPress} style={containerStyles}>
      <Text style={[labelStyle, style]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: AppTheme.metrics.radius,
    borderWidth: 1,
    borderColor: "transparent",
  },
  label: {
    textAlign: "center",
  },
  fill: { flex: 1 },
});

export default UIButton;
