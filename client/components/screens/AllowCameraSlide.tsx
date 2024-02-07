import { View, Text, Alert } from "react-native";
import AllowCameraSvg from "../../assets/allow-camera.svg";
import ButtonPrimary from "../scripts/ButtonPrimary";
import ButtonSecondary from "../scripts/ButtonSecondary";
import * as ImagePicker from "expo-image-picker";

export default function AllowCameraSlide({ nextPage }) {
  const allowCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status === "granted") {
      nextPage();
    } else {
      Alert.alert(
        "Permission Denied",
        "Please grant camera permission to use the camera in the settings.",
        [
          { text: "Ok", onPress: nextPage }, // pass nextPage as the onPress callback
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View className="flex-1 items-center justify-start m-5">
      <AllowCameraSvg width={275} height={391} />
      <View className="items-center justify-center m-8">
        <Text className="text-3xl color-primary font-lato m-2">
          Allow your camera
        </Text>
        <Text className="text-base font-lato color-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </View>
      <ButtonPrimary text={"Enable camera"} onPress={allowCamera} />
      <ButtonSecondary text={"Not now"} onPress={nextPage} />
    </View>
  );
}
