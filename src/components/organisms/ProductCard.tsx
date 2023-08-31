import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ProductModel } from "../../model/product.model";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigators";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { formatCurrency } from "../../helpers/format";
import { AppTheme } from "../theme";
import Spacer from "../atoms/Spacer";

type Props = {
  product: ProductModel;
};

const ProductCard = ({ product }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPress = () => {
    navigation.navigate("ProductDetail", {
      product,
    });
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={[styles.cover, styles.ratioStyle]}>
        <Image
          style={StyleSheet.absoluteFill}
          resizeMode="contain"
          source={{ uri: product.image }}
        />
      </View>
      <View>
        <Spacer size={2} />
        <Text numberOfLines={2} style={styles.productTitle}>
          {product.title}
        </Text>
        <Spacer size={1} />
        <Text style={styles.productPrice}>{formatCurrency(product.price)}</Text>
        <Spacer size={1} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppTheme.colors.white,
    borderRadius: AppTheme.metrics.radius,
    paddingVertical: AppTheme.units(1),
    paddingHorizontal: AppTheme.units(1),
  },
  cover: {
    width: "100%",
  },
  ratioStyle: {
    aspectRatio: 1.2,
  },
  productTitle: {
    fontSize: AppTheme.fontText.s,
    lineHeight: AppTheme.fontText.s,
    color: AppTheme.colors.textLight,
  },
  productPrice: {
    fontSize: AppTheme.fontText.s,
    lineHeight: AppTheme.fontText.s,
    color: AppTheme.colors.textLight,
  },
});

export default ProductCard;
