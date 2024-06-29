import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "./screens/HomeScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import ChooseCompetitionScreen from "./screens/ChooseCompetitionScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Competition"
          component={ChooseCompetitionScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

let AppEntryPoint = App;

if (
  Constants.expoConfig.extra.storybookEnabled === "true"
) {
  AppEntryPoint = require("./.storybook").default;
}

export default AppEntryPoint;
