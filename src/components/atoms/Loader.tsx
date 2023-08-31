import React from "react";
import { Text, View } from "react-native";

type Props = {
  text: string;
};

const Loader = ({ text }: Props) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default Loader;
