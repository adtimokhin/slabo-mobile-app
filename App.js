import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import QuestDescriptionScreen from "./screens/QuestDescriptionScreen";
import DescriptionScreen from "./screens/DescriptionScreen";
import LoadingScreen from "./screens/LoadingScreen";
import CongratulationsScreen from "./screens/CongratulationsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Loading" component={LoadingScreen}/>
        <Stack.Screen name="Home" component={QuestDescriptionScreen} />
        <Stack.Screen name="Description" component={DescriptionScreen} />
        <Stack.Screen name="Congrats" component={CongratulationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
