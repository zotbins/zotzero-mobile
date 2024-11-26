import CameraView from "@/components/CameraView";
import ScanResults from "@/components/ScanResults";
import { router, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView } from "react-native";
import { Camera, useCameraDevice } from "react-native-vision-camera";

const CameraScreen = () => {
  const [cameraVisible, setCameraVisible] = useState<boolean>(false);

  const [image, setImage] = useState<string | null>(null);

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const [camera, setCamera] = useState<Camera | null>(null);
  const device = useCameraDevice("back");

  const requestCameraPermission = async () => {
    try {
      const permission = await Camera.requestCameraPermission();

      if (permission === "granted") {
        setHasPermission(true);
        if (device) {
          setCameraVisible(true);
        }
      } else {
        setHasPermission(false);
      }
    } catch (error) {
      console.error("Camera permission error:", error);
      setHasPermission(false);
    }
  };

  const takePicture = async () => {
    try {
      if (!camera) return;

      const photo = await camera.takePhoto();
      const photoPath = `file://${photo.path}`;
      setImage(photoPath);
    } catch (error) {
      console.error("Take picture error:", error);
      Alert.alert("Camera Error", "Failed to take picture");
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  useEffect(() => {
    if (hasPermission === false || !device) {
      router.back();
      Alert.alert(
        "Camera Unavailable",
        "Please ensure camera permissions are granted and a camera is available.",
        [{ text: "OK" }]
      );
    }
  }, [hasPermission, device]);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        {hasPermission === null ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : !image ? (
          <CameraView
            device={device}
            cameraVisible={cameraVisible}
            setCamera={setCamera}
            takePicture={takePicture}
          />
        ) : (
          <ScanResults image={image} setImage={setImage} />
        )}
      </SafeAreaView>
    </>
  );
};

export default CameraScreen;
