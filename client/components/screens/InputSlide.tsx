import React, { useState } from "react";
import { View, Text, Alert, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AllowCameraSvg from "../../assets/allow-camera.svg";
import ButtonPrimary from "../scripts/ButtonPrimary";
import ButtonSecondary from "../scripts/ButtonSecondary";
import CameraIconSvg from "../../assets/camera-icon.svg";
import UploadIconSvg from "../../assets/upload-icon";

export default function InputSlide() {
  const [capturedImage, setCapturedImage] = useState(null);

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Please grant camera permission to use the camera."
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setCapturedImage(result.uri);
      // backend manipulation
    }
  };

  const openGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Please grant media library permission to access the gallery."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setCapturedImage(result.uri);
    }
  };

  return (
    <View className="flex-1 items-center justify-start m-5">
      <AllowCameraSvg width={275} height={391} />
      <View className="items-center justify-center m-8">
        <Text className="text-3xl color-primary font-lato m-2">
          Let's start!
        </Text>
        <Text className="text-base font-lato color-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </View>
      {capturedImage ? (
        <Image
          source={{ uri: capturedImage }}
          style={{ width: 200, height: 200 }}
        />
      ) : (
        <>
          <ButtonPrimary
            text={"Open camera"}
            icon={CameraIconSvg}
            onPress={openCamera}
          />
          <ButtonSecondary
            text={"Open gallery"}
            icon={UploadIconSvg}
            onPress={openGallery}
          />
        </>
      )}
    </View>
  );
}
