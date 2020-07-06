import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const screens = {
  Home: {   // whatever is here at the top will be shown by default
    screen: Home,
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
