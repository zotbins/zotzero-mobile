import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from 'expo-router';
import Colors from "@/constants/Colors";
import DotIndicator from '../../../components/DotIndicator';

const scannerFeature = () => {
  const router = useRouter();
  const totalPages = 4; // Update this to match the actual number of slides

  const goToNextPage = () => {
    router.push("/quizFeature"); // Navigate to the next slide
  };

  return (
    <View className="flex-1 bg-white px-5 py-12 justify-center items-center">
      <Image
        source={require("../../../assets/images/scanner-demo.png")}
        className="w-full h-auto max-w-md max-h-96 object-contain mb-5"
      />
      <Text className="text-center mb-5">
        Our app contains a scanner for easy waste detection! Click on the
        scanner icon to scan your trash.
      </Text>
      <DotIndicator currentPage={2} totalPages={totalPages} />
      <View className="flex-row justify-center items-center mt-5">
        <TouchableOpacity
          className="rounded-lg px-6 py-3 flex items-center justify-center"
          style={{ backgroundColor: Colors.tintColor }}
          onPress={goToNextPage}
        >
          <Text className="text-white">{'Next'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default scannerFeature;