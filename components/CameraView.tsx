import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Pressable, View } from "react-native";
import { Camera } from "react-native-vision-camera";

interface CameraViewProps {
  device: any;
  cameraVisible: boolean;
  setCamera: (ref: any) => void;
  takePicture: () => void;
}

const CameraView: React.FC<CameraViewProps> = ({
  device,
  cameraVisible,
  setCamera,
  takePicture,
}) => {
  return (
    <>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={cameraVisible}
        ref={(ref) => setCamera(ref)}
        photo={true}
      />

      <Pressable
        className=" p-3 rounded-lg top-10 left-0 absolute active:opacity-50"
        onPress={() => {
          router.back();
        }}
      >
        <Ionicons name="chevron-back" size={40} color="white" />
      </Pressable>

      <Pressable
        className=" p-3 rounded-lg bottom-12 absolute"
        onPress={takePicture}
      >
        <View className="border-4 border-white p-4 rounded-full">
          <View className="w-12 h-12 rounded-full" />
        </View>
      </Pressable>
    </>
  );
};

export default CameraView;
