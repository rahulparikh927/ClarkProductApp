import React, { memo, useRef, useState } from "react";
import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextLayoutEventData,
  TextLayoutLine,
  TextProps,
  TextStyle,
} from "react-native";
import { AppTheme } from "../theme";

interface Props extends Partial<TextProps> {
  text: string;
  style?: StyleProp<TextStyle>;
}

const COLLAPSED_NUM_LINES = 3;

export const ExpandableText = memo((props: Props) => {
  const [text, setText] = useState<string | undefined>(props.text);
  const initialized = useRef<boolean>(false);
  const buttonText = "Show More";
  const suffix = "...";

  const concatLinesToText = (_lines: TextLayoutLine[]) => {
    return _lines.slice(0, COLLAPSED_NUM_LINES).reduce((result, line) => {
      return result + line.text;
    }, "");
  };

  const freeSymbolsForButton = (_text: string) => {
    const numSymbolsToCut = buttonText.length + suffix.length + 4;
    return _text.slice(0, _text.length - numSymbolsToCut);
  };

  const decorateThirdLine = (_text: string) => {
    const croppedString = freeSymbolsForButton(_text);
    return `${croppedString}${suffix}`;
  };

  const onLayout = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    props?.onTextLayout?.(e);

    const { lines: _lines } = e.nativeEvent;

    if (!initialized.current && _lines.length > COLLAPSED_NUM_LINES) {
      const cutText = concatLinesToText(_lines);
      setText(decorateThirdLine(cutText));
    }

    initialized.current = true;
  };

  const onPress = () => setText(props?.text);

  return (
    <Text style={props.style} onTextLayout={onLayout as any}>
      {text}
      {text !== props.text && (
        <Text onPress={onPress} style={styles.showMoreText}>
          {" "}
          {buttonText}
        </Text>
      )}
    </Text>
  );
});

const styles = StyleSheet.create({
  showMoreText: {
    color: AppTheme.colors.textSecondary,
  },
});
