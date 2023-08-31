import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProductList from "../screens/ProductList";
import ProductDetail from "../screens/ProductDetail";
import { ProductModel } from "../model/product.model";

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: ProductModel };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{ title: "Product List" }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ title: "Product Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
