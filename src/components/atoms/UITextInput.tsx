import React, { ReactNode, useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { AppTheme } from "../theme";

export type InputRendererProps = {
  inputRef: React.Ref<TextInput>;
} & TextInputProps;

export interface Props extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  renderSuffix?: () => ReactNode;
}

const UITextInput = ({
  containerStyle,
  renderSuffix = () => null,
  placeholderTextColor = AppTheme.colors.black,
  ...TextInputProps
}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        allowFontScaling={false}
        placeholderTextColor={placeholderTextColor}
        style={[styles.input]}
        {...TextInputProps}
      />
      {renderSuffix()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: AppTheme.units(2),
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderRadius: AppTheme.units(2),
    minHeight: AppTheme.units(8),
    borderWidth: AppTheme.units(0.1),
    fontSize: AppTheme.fontText.s,
    color: AppTheme.colors.black,
    paddingHorizontal: AppTheme.units(2),
    marginRight: AppTheme.units(2),
  },
});

export default UITextInput;
