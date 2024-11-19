import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from "react-native";
import React, {useRef, useState} from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Stack } from "expo-router";
import { Camera, useCameraDevice } from "react-native-vision-camera";
import { Ionicons } from "@expo/vector-icons";
import CameraView from "@/components/CameraView";
import ScanResults from "@/components/ScanResults";

const Scan = () => {
  const [cameraVisible, setCameraVisible] = useState(false);
  const device = useCameraDevice('back');
  const [camera, setCamera] = useState<Camera | null>(null);
  const [image, setImage] = useState<string | null>(null);


  const requestCameraPermission = async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission === 'granted') {
      setCameraVisible(true);
    } else {
      alert("Camera permission is required to scan");
    }
  };

  const takePicture = async () => {
    console.log("Taking picture");
    if (camera) {
      const photo = await camera.takePhoto();
      const photoPath = `file://${photo.path}`;
      setImage(photoPath);
    }
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        {!cameraVisible ? (
          <>
            <TouchableOpacity className="bg-blue-500 px-5 py-4 rounded-lg" onPress={requestCameraPermission}>
              <Text className="text-white">Scan Food Waste</Text>
            </TouchableOpacity>
          </>
        ) : (
          device != null ? (

          !image ? (
            <CameraView device={device} cameraVisible={cameraVisible} setCamera={setCamera} takePicture={takePicture} setCameraVisible={setCameraVisible} />
          ) : (
            <ScanResults image={image} setImage={setImage}/>
          )
          ) : (
            <Text className="text-black">No physical camera detected.</Text>
          )
        )}
      </SafeAreaView>
    </>
  );
};

export default Scan;