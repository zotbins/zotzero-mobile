import { Stack, router } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

const Scan = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        <TouchableOpacity
          className="bg-blue px-5 py-4 rounded-lg"
          onPress={() => {
            router.push("/(auth)/camera");
          }}
        >
          <Text className="text-white">Scan Food Waste</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Scan;
