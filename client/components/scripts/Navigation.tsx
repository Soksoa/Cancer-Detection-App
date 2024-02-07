import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SlideShow from "../screens/SlideShow";

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name=" " component={SlideShow} />
    </Stack.Navigator>
  );
}
