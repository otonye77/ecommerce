import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductDetails = ({ route }) => {
  const { title, price, category, rating, image } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.price}>Price: ${price}</Text>
      <Text style={styles.rating}>Rating: {rating.rate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: "green",
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
  },
});

export default ProductDetails;

