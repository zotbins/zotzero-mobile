import React from "react";
import ZotBinsMap from "@/components/ZotBinsMap";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Map = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <Ionicons
              name="chevron-back"
              size={24}
              color={Colors.black}
              onPress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />
      <ZotBinsMap />
    </View>
  );
};

export default Map;
