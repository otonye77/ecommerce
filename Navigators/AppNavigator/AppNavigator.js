import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "../../Screens/Products/Products";
import ProductDetails from "../../Screens/ProductDetails/ProductDetails";
import CartScreen from "../../Screens/Cart/Cart";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Products" component={ProductsScreen} />
                <Stack.Screen name="ProductDetails" component={ProductDetails}  />
                <Stack.Screen name="Cart" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator