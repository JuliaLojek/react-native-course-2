import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import NavHeader from "./NavHeader";

const screens = {
  Home: {
    // whatever is here at the top will be shown by default
    screen: Home,
    navigationOptions: ({ navigation }) => {
      // instead of an object, we pass a function which returns an object (to pass a navigation object to the header component)
      return {
        // title only accepts a string, header accepts a function which returns a component
        header: () => (
          <NavHeader navigation={navigation} title="Game Reviewer" />
        ),
      };
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
      backgroundColor: "#ddd",
    },
    headerTitleAlign: "center",
  },
};

const HomeStack = createStackNavigator(screens, defaultNavStyle);

// since it's not the main navigation anymore, now the drawe navigation will be wrapped in
// createAppContainer to be displayed by default:
// export default createAppContainer(HomeStack);

// now we export HomeStack and AboutStack in the other file:
export default HomeStack;
