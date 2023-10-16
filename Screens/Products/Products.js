import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Services/Services";
import { FlatList, Text, View } from "react-native";
import ProductItems from "../../Components/ProductItems/ProductItem";

const ProductsScreen = () => {
  const [data, setData] = useState([]);
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

  return (
    <View style={{ flex: 1, marginHorizontal: 10, marginVertical: 20 }}>
      {product.loading ? (
        <Text>Loading...</Text>
      ) : product.error ? (
        <Text>Error: Unable to fetch data</Text>
      ) : (
        <View style={{ flex: 1, paddingTop: 10 }}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductItems {...item} />}
          />
        </View>
      )}
    </View>
  );
};

export default ProductsScreen;
