import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ProductModel } from "../../model/product.model";
import { NavigationProp, RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigators";
import { AppTheme, DEVICE_WIDTH } from "../../components/theme";
import { ExpandableText } from "../../components/molecules/ExpandableText";
import { formatCurrency } from "../../helpers/format";
import Spacer from "../../components/atoms/Spacer";

export const PRODUCT_MEDIA_RATIO = 1 / 1.135;
export const PRODUCT_MEDIA_WIDTH = DEVICE_WIDTH - AppTheme.unitsEven(2) * 2;
export const PRODUCT_MEDIA_HEIGHT = PRODUCT_MEDIA_WIDTH / PRODUCT_MEDIA_RATIO;

const ProductDetail = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, "ProductDetail">>();
  const product = params.product;

  return (
    <View style={[styles.container]}>
      <View style={[styles.imageContainer]}>
        <Image
          style={[StyleSheet.absoluteFill, styles.productImage]}
          resizeMode="cover"
          source={{ uri: product.image }}
        />
      </View>
      <Spacer />
      <Text selectable={true} style={styles.productTitle}>
        {product.title}
      </Text>
      <Spacer size={2} />
      <Text selectable={true} style={styles.productPrice}>
        {formatCurrency(product.price)}
      </Text>
      <Spacer />
      <ExpandableText
        text={product.description}
        style={styles.productDescription}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: AppTheme.units(4),
    marginHorizontal: AppTheme.unitsEven(2),
  },
  imageContainer: {
    backgroundColor: AppTheme.colors.surface,
    borderRadius: AppTheme.metrics.radius,
    height: PRODUCT_MEDIA_HEIGHT,
  },
  productImage: {
    padding: AppTheme.units(2),
  },
  productTitle: {
    fontSize: AppTheme.fontText.m,
    lineHeight: AppTheme.fontText.l,
    color: AppTheme.colors.textLight,
  },
  productPrice: {
    fontSize: AppTheme.fontText.m,
    lineHeight: AppTheme.fontText.l,
    color: AppTheme.colors.textLight,
  },
  productDescription: {
    fontSize: AppTheme.fontText.s,
    lineHeight: AppTheme.fontText.m,
    color: AppTheme.colors.textLight,
  },
});

export default ProductDetail;
