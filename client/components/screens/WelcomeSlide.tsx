import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WelcomeSvg from "../../assets/welcome.svg";
import ButtonPrimary from "../scripts/ButtonPrimary";

export default function WelcomeSlide({ nextPage }) {
  return (
    <View className="flex-1 items-center justify-start m-5">
      <WelcomeSvg width={275} />
      <View className="items-center justify-center m-8">
        <Text className="text-3xl color-primary font-lato m-2">
          Welcome to CDA!
        </Text>
        <Text className="text-base font-lato color-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </View>
      <ButtonPrimary text={"Get started!"} onPress={nextPage} />
    </View>
  );
}
