import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import MainScreen from "./screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Score from "./screens/Score";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
        <StatusBar style="auto" />    
        <Stack.Navigator screenOptions={{
          headerShown : false
        }}>
          <Stack.Screen name='Main' component={MainScreen} />
          <Stack.Screen name='Score' component={Score} />
        </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
