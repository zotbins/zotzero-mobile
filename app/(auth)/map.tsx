import React from "react";
import ZotBinsMap from "@/components/ZotBinsMap";
import { View } from "react-native";
import { Stack } from "expo-router";
import BackButton from "@/components/BackButton";

const Map = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTransparent: true,
          headerLeft: () => <BackButton />,
          headerTitle: "",
        }}
      />
      <ZotBinsMap />
    </View>
  );
};

export default Map;
