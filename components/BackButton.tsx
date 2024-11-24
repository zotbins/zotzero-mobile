import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const BackButton = () => {
  return (
    <TouchableOpacity
      className="bg-white rounded-full p-2"
      onPress={() => router.back()}
    >
      <Ionicons name="chevron-back" size={24} color={Colors.black} />
    </TouchableOpacity>
  );
};

export default BackButton;
