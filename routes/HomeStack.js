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

// since it's not the main navigation anymore, now the drawe navigation will be wrapped in
// createAppContainer to be displayed by default:
// export default createAppContainer(HomeStack);

// now we export HomeStack and AboutStack in the other file:
export default HomeStack;
