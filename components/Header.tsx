import { Image, StyleSheet, View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import auth from "@react-native-firebase/auth";

const Header = () => {
  const user = auth().currentUser;
  
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
          ZotZero
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginRight: 10, color: "#fc8803", fontSize: 14 }}>
            4
          </Text>
          <Image
            source={{
              uri: user?.photoURL || "https://via.placeholder.com/250",
            }}
            style={{ height: 50, width: 50, borderRadius: 50 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Header;
