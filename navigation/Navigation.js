import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../components/auth/LoginScreen";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
