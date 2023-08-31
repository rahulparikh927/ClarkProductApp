import React, { useCallback, useMemo, useState } from "react";
import {
  Button,
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { useProducts } from "../../hooks/api/useProducts";
import ProductCard from "../../components/organisms/ProductCard";
import { ProductModel } from "../../model/product.model";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppTheme } from "../../components/theme";
import Loader from "../../components/atoms/Loader";
import UITextInput from "../../components/atoms/UITextInput";

const Number_Of_Columns = 2;
const Product_Per_Page = 8;

const ProductList = () => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [refreshing, setIsRefreshing] = useState(false);
  const { bottom, top } = useSafeAreaInsets();
  const {
    data: productList,
    refetch: productListRefetch,
    isLoading: isProductListLoading,
  } = useProducts({
    limit: page * Product_Per_Page,
  });
  const cellWidth = Math.floor(100 / Number_Of_Columns) + "%";
  const cellStyle = useMemo(
    () => [{ width: cellWidth, padding: AppTheme.unitsEven(1.5) }],
    [cellWidth]
  ) as StyleProp<ViewStyle>;

  const renderProductList = useCallback(
    ({ item }: ListRenderItemInfo<ProductModel>) => {
      return (
        <View style={cellStyle}>
          <ProductCard product={item} />
        </View>
      );
    },
    []
  );

  const keyExtractor = useCallback(
    (item: ProductModel) => item.id.toString(),
    []
  );

  const containerStyle = useMemo(() => {
    return {
      paddingBottom: top + bottom,
      marginTop: AppTheme.units(2),
    };
  }, [top, bottom]);

  const loadMoreProducts = () => {
    setPage(page + 1);
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    productListRefetch();
  };

  return (
    <View style={[styles.container]}>
      <UITextInput
        placeholder="Search Product"
        onChangeText={setSearchText}
        value={searchText}
        containerStyle={styles.searchBar}
      />
      <FlatList
        data={productList?.filter(
          (product) =>
            product.title.includes(searchText) ||
            product.description.includes(searchText)
        )}
        renderItem={renderProductList}
        keyExtractor={keyExtractor}
        contentContainerStyle={containerStyle}
        numColumns={Number_Of_Columns}
        ListEmptyComponent={
          isProductListLoading ? (
            <Loader text="Loading..." />
          ) : (
            <Loader text="Not found" />
          )
        }
        onEndReached={loadMoreProducts}
        onEndReachedThreshold={4}
        onRefresh={() => onRefresh}
        refreshing={refreshing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppTheme.colors.surface,
    paddingHorizontal: AppTheme.unitsEven(3),
  },
  searchBar: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default ProductList;
