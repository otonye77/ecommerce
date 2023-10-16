# Documentation for the Ecommerce Listing Application
# Project Setup
1. Commence by installing React Native along with the essential dependencies using  expo-cli.
2. Organize your project's directory structure and initialize a Git repository.
3. Incorporate Redux Toolkit and React Redux libraries into your project.

# Component Hierarchy

# Navigation
StackAppNavigator: The central navigator for facilitating seamless transitions between screens.

# Screens
1. ProductScreen: This screen displays categories, product listings, and the shopping cart.
2. ProductDetailsScreen: This screen provides comprehensive details about a selected product.
3. CartScreen: Here, you can find a list of selected products ready for purchase.

# State Management with Redux Toolkit
# Store
1. Establish a Redux store using configureStore from Redux Toolkit.
2. Encompass the entire application with the React Redux provider to access data as needed.
3. Register the reducers.
4. Employ useSelector and useDispatch to initiate and manage state, both of which are furnished by Redux.

# Data Slices
1. productSlice: This slice oversees the list of products and their associated details.
2. cartSlice: Responsible for managing applied filters in the product listings cart.

# Overview
For those interested in using this project, follow these steps to set it up:
1. Clone the repository.
2. Ensure that Node.js is installed on your device. 
3. Execute "npm install" in the project's root directory.
4. Start the application with "npx expo start."
5. You can now navigate through the screens

