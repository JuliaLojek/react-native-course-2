import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/About";
import NavHeader from "./NavHeader";

const screens = {
  About: {
    // whatever is here at the top will be shown by default
    screen: About,
    navigationOptions: ({ navigation }) => {
      // instead of an object, we pass a function which returns an object (to pass a navigation object to the header component)
      return {
        // title only accepts a string, header accepts a function which returns a component
        header: () => (
          <NavHeader navigation={navigation} title="About the app" />
        ),
      };
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
