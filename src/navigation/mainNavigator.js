import React  from "react";
import PageA from "../components/pageA";
import PageB from "../components/pageB";
import { StackNavigator } from "react-navigation";


export default AppNavigator = StackNavigator({
    Page_A: { screen: PageA },
    Page_B: { screen: PageB },
});
