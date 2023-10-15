import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "../../Screens/Products/Products";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Products" component={ProductsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator