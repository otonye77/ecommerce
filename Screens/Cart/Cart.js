import React from "react";
import { View, Text, FlatList, Button, Image, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Store/CartSlice";

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImage} source={{ uri: item.image }} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>Price: ${item.price}</Text>
      </View>
      <Button
        title="Remove"
        onPress={() => handleRemoveFromCart(item.id)}
        color="#ff5733"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Your Cart: {cartItems.length}</Text>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyCart}>Your cart is empty.</Text>
      )}
      <Text style={styles.total}>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
    color: "black",
  },
  emptyCart: {
    fontSize: 18,
    textAlign: "center",
  },
  total: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    alignSelf: "flex-end",
    color: "black",
  },
});

export default CartScreen;
