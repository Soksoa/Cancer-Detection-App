import { Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

//Use StyleSheet because NativeWind won't work properly with LinearGradient, TouchableOpacity or a View component inside them

export default function ButtonPrimary({ text, icon: IconComponent, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={["#5EA8FF", "#42C5FD"]}
        style={{
          width: 195,
          height: 50,
          borderRadius: 10,
          justifyContent: "space-around",
          alignItems: "center",
          margin: 5,
          flexDirection: "row",
        }}
      >
        {IconComponent && <IconComponent width={24} height={24} />}
        <Text className="color-white font-latobold text-base">{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
