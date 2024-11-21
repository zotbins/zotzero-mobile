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
    <View className="flex-1 bg-white px-5 py-12 justify-center items-center">
      <Text className="text-black text-3xl mb-5 text-center">
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