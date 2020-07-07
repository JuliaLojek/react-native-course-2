import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/About";

const screens = {
  About: {
    // whatever is here at the top will be shown by default
    screen: About,
    navigationOptions: {
      title: "About the app",
    },
  },
};

const defaultNavStyle = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#1e368d",
    },
    headerTintColor: "#fff",
    headerTitleAlign: "center",
  },
};

const AboutStack = createStackNavigator(screens, defaultNavStyle);

export default AboutStack;
