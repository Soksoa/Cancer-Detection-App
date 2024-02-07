import { Text, TouchableOpacity } from "react-native";

export default function ButtonSecondary({
  text,
  icon: IconComponent,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={{
        width: 195,
        height: 50,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#5EA8FF",
        justifyContent: "space-around",
        alignItems: "center",
        margin: 5,
        flexDirection: "row",
      }}
      onPress={onPress}
    >
      {IconComponent && <IconComponent width={24} height={24} />}
      <Text className="color-primary font-latobold text-base">{text}</Text>
    </TouchableOpacity>
  );
}
