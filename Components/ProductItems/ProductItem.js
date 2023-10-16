import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const ProductItems = ({
  id,
  title,
  price,
  category,
  rating,
  image,
  description,
}) => {
  const navigation = useNavigation();
  const handleCardPress = () => {
    navigation.navigate("ProductDetails", {
      title,
      image,
      price,
      category,
      rating,
      description,
    });
  };
  return (
    <TouchableOpacity onPress={handleCardPress}>
      <Card style={{ marginBottom: 10 }}>
        <Card.Cover source={{ uri: image }} />
        <Card.Content>
          <Text variant="titleMedium">{title}</Text>
          <Text variant="bodyMedium">${price}</Text>
          <Text variant="bodyMedium">{category}</Text>
          <Text variant="bodyMedium">rating: {rating.rate}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default ProductItems;
