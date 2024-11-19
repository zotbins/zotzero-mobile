import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Camera } from 'react-native-vision-camera'
import { Ionicons } from '@expo/vector-icons'

interface CameraViewProps {
  device: any;
  cameraVisible: boolean;
  setCamera: (ref: any) => void;
  takePicture: () => void;
  setCameraVisible: (visible: boolean) => void;
}

const CameraView: React.FC<CameraViewProps> = ({ device, cameraVisible, setCamera, takePicture, setCameraVisible }) => {
  return (
    <>
    <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={cameraVisible}
        ref={(ref) => setCamera(ref)}
        photo={true}
    />

    <TouchableOpacity className=" p-3 rounded-lg top-10 left-0 absolute" onPress={() => setCameraVisible(false)}>
        <Ionicons name="chevron-back" size={40} color="white" />
    </TouchableOpacity>

    <TouchableOpacity className=" p-3 rounded-lg bottom-24 absolute" onPress={takePicture}>
        <View className="border-4 border-white p-4 rounded-full">
        <View className="w-12 h-12 rounded-full" />
        </View>
    </TouchableOpacity>
    </>
  )
}

export default CameraView
