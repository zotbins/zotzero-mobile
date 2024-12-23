import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ScanResultsProps {
  image: string | null;
  setImage: (image: string | null) => void;
}

const ScanResults: React.FC<ScanResultsProps> = ({ image, setImage }) => {
  return (
    <View className=" flex-1 w-full h-12 items-center justify-center">
      <TouchableOpacity
        className=" p-3 rounded-lg top-10 left-0 absolute"
        onPress={() => setImage(null)}
      >
        <Ionicons name="chevron-back" size={40} color="black" />
      </TouchableOpacity>
      <View className="bg-blue p-5 rounded-lg items-center">
        <Text className="text-white text-3xl py-2">Water Bottle</Text>
        {image && <Image source={{ uri: image }} className="w-72 h-72" />}
        <Text className="text-white text-3xl py-2">
          This is a water bottle!
        </Text>
      </View>
      <TouchableOpacity
        className="bg-blue px-5 py-4 m-5 rounded-lg"
        onPress={() => router.back()}
      >
        <Text className="text-white">Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScanResults;
