import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Stack } from "expo-router";
import { Camera, useCameraDevice } from "react-native-vision-camera";

const Scan = () => {
  const [cameraVisible, setCameraVisible] = useState(false);
  const device = useCameraDevice('back');

  const requestCameraPermission = async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission === 'granted') {
      setCameraVisible(true);
    } else {
      alert("Camera permission is required to scan");
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        {!cameraVisible ? (
          <>
            <TouchableOpacity style={styles.button} onPress={requestCameraPermission}>
              <Text style={styles.buttonText}>Scan Food Waste</Text>
            </TouchableOpacity>
          </>
        ) : (
          device != null ? (
            <Camera
              style={StyleSheet.absoluteFill}
              device={device}
              isActive={cameraVisible}
            />
          ) : (
            <Text style={styles.text}>No physical camera detected.</Text>
          )
        )}
      </View>
    </>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.black,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
});
