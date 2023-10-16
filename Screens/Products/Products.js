import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Services/Services";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import ProductItems from "../../Components/ProductItems/ProductItem";
import { Searchbar, Button, Menu, Divider, Provider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ProductsScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("default");
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    dispatch(fetchData.products());
  };

  useEffect(() => {
    if (!product.loading && !product.error) {
      setData(product.data);
    }
  }, [product]);

  const filterData = () => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const sortProducts = () => {
    let sortedData = [...filterData()];

    if (sortType === "priceLowToHigh") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (sortType === "priceHighToLow") {
      sortedData.sort((a, b) => b.price - a.price);
    }
    return sortedData;
  };

  return (
    <Provider>
      <View style={{ flex: 1, marginHorizontal: 10, marginVertical: 20 }}>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 80,
            right: 20,
            backgroundColor: "#EEE7F5",
            borderRadius: 50,
            width: 60,
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
          }}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={{ color: "black" }}>Go to cart</Text>
        </TouchableOpacity>
        <Searchbar
          placeholder="Search"
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
        />

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Sort By: </Text>
          <Menu
            visible={visible}
            onDismiss={() => setVisible(false)}
            anchor={
              <Button onPress={() => setVisible(true)}>
                {sortType === "default"
                  ? "Default"
                  : sortType === "priceLowToHigh"
                  ? "Price Low to High"
                  : sortType === "priceHighToLow"
                  ? "Price High to Low"
                  : "Default"}
              </Button>
            }
          >
            <Menu.Item
              onPress={() => {
                setSortType("default");
                setVisible(false);
              }}
              title="Default"
            />
            <Divider />
            <Menu.Item
              onPress={() => {
                setSortType("priceLowToHigh");
                setVisible(false);
              }}
              title="Price Low to High"
            />
            <Divider />
            <Menu.Item
              onPress={() => {
                setSortType("priceHighToLow");
                setVisible(false);
              }}
              title="Price High to Low"
            />
          </Menu>
        </View>
        {product.loading ? (
          <Text>Loading...</Text>
        ) : product.error ? (
          <Text>Error: Unable to fetch data</Text>
        ) : (
          <View style={{ flex: 1, paddingTop: 10 }}>
            <FlatList
              data={sortProducts()}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ProductItems {...item} />}
            />
          </View>
        )}
      </View>
    </Provider>
  );
};

export default ProductsScreen;
