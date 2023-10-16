import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Services/Services";
import { FlatList, Text, View } from "react-native";
import ProductItems from "../../Components/ProductItems/ProductItem";
import { Searchbar } from 'react-native-paper';

const ProductsScreen = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
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
    return data.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }
 filterData();
  return (
    <View style={{ flex: 1, marginHorizontal: 10, marginVertical: 20 }}>
       <Searchbar
      placeholder="Search"
      onChangeText={(query) => setSearchQuery(query)}
      value={searchQuery}
    />
      {product.loading ? (
        <Text>Loading...</Text>
      ) : product.error ? (
        <Text>Error: Unable to fetch data</Text>
      ) : (
        <View style={{ flex: 1, paddingTop: 10 }}>
          <FlatList
            data={filterData()}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductItems {...item} />}
          />
        </View>
      )}
    </View>
  );
};

export default ProductsScreen;
