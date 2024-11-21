import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from "react-native";
import React, {useRef, useState} from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Stack, router } from "expo-router";


const Scan = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        <TouchableOpacity className="bg-blue-500 px-5 py-4 rounded-lg" onPress={()=> {router.push("/(auth)/camera")}}>
          <Text className="text-white">Scan Food Waste</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Scan;