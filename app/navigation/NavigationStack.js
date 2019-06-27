import {createStackNavigator, createAppContainer} from "react-navigation";

import Home from "app/screens/Home";

const RNApp = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {header: null, gesturesEnabled: false}
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(RNApp);
