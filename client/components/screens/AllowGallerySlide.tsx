import { View, Text, TouchableOpacity, Pressable } from "react-native";
import AllowGallerySvg from "../../assets/allow-gallery.svg";
import ButtonPrimary from "../scripts/ButtonPrimary";
import ButtonSecondary from "../scripts/ButtonSecondary";
import { requestMediaLibraryPermissionsAsync } from "expo-image-picker";
import { Alert } from "react-native";

export default function AllowGallerySlide({ nextPage }) {
  const allowGallery = async () => {
    const { status } = await requestMediaLibraryPermissionsAsync();

    if (status === "granted") {
      nextPage();
    } else {
      Alert.alert(
        "Permission Denied",
        "Please grant media library permission to use the library in the settings.",
        [
          { text: "Ok", onPress: nextPage }, // pass nextPage as the onPress callback
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View className="flex-1 items-center justify-start m-5">
      <AllowGallerySvg width={275} height={391} />
      <View className="items-center justify-center m-8">
        <Text className="text-3xl color-primary font-lato m-2">
          Allow your gallery
        </Text>
        <Text className="text-base font-lato color-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </View>
      <ButtonPrimary text={"Enable gallery"} onPress={allowGallery} />
      <ButtonSecondary text={"Not now"} onPress={nextPage} />
    </View>
  );
}
