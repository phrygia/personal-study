import React from "react";
import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-dats";
import CategoryGridTile from "../components/CategoryGridTile";

export const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const { title, color, id } = itemData.item;
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: id,
      });
    };

    return (
      <CategoryGridTile title={title} color={color} onPress={pressHandler} />
    );
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};
