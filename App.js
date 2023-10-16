import AppNavigator from './Navigators/AppNavigator/AppNavigator';
import { Provider } from "react-redux";
import { store } from './Store/Store';

export default function App() {
  return (
    <>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
    </>
  );
}
