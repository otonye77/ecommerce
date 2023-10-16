import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Services/Services";
import { FlatList, Text, View } from "react-native";
import ProductItems from "../../Components/ProductItems/ProductItem";
import { Searchbar, Button, Menu, Divider, Provider } from 'react-native-paper';

const ProductsScreen = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("default"); 
  const [visible, setVisible] = useState(false); 
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

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
              <Button
                onPress={() => setVisible(true)}
              >
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
