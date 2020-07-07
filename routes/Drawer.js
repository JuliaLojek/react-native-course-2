import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

const RootDrawerNavigator = createDrawerNavigator({
  // as in the stack, the first option is the default option to display
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
});

export default createAppContainer(RootDrawerNavigator);