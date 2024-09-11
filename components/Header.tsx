import { Image, StyleSheet, View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import CustomText from "./CustomText";
import { usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: 70,
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", color: Colors.black, fontSize: 16 }}>
          ZotBins
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginRight: 10, color: "#fc8803", fontSize: 14 }}>
            4
          </Text>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1500610/pexels-photo-1500610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            }}
            style={{ height: 50, width: 50, borderRadius: 50 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Header;
