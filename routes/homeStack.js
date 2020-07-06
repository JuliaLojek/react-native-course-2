import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const screens = {
  Home: {
    // whatever is here at the top will be shown by default
    screen: Home,
    navigationOptions: {
      title: "Game Reviewer",
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details",
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

const HomeStack = createStackNavigator(screens, defaultNavStyle);

export default createAppContainer(HomeStack);
