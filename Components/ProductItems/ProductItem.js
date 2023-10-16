import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Store/CartSlice";

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
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, image }));
  };
  console.log(cart);
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
      <Card style={{ marginBottom: 30 }}>
        <Card.Cover source={{ uri: image }} />
        <Card.Content>
          <Text variant="titleMedium">{title}</Text>
          <Text variant="bodyMedium">${price}</Text>
          <Text variant="bodyMedium">{category}</Text>
          <Text variant="bodyMedium">rating: {rating.rate}</Text>
        </Card.Content>
        <Button onPress={handleAddToCart}>Add to Cart</Button>
      </Card>
    </TouchableOpacity>
  );
};

export default ProductItems;
