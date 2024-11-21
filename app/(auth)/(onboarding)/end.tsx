import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from 'expo-router';
import Colors from "@/constants/Colors";

const End = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <View className="flex-1 px-5 justify-center items-center bg-amber-50">
      <Text className="text-4xl font-bold text-lime-900 text-center mb-5">
        Get Started with Sustainability today!
      </Text>
      <TouchableOpacity
        className="rounded-lg px-6 py-3 flex items-center justify-center"
        style={{ backgroundColor: Colors.tintColor }}
        onPress={handleSignUp}
      >
        <Text className="text-white">Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default End;