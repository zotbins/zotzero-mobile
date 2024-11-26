import auth from "@react-native-firebase/auth";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ZotBinsLogo from "../assets/images/zotbins_logo.png";

const Header = () => {
  const user = auth().currentUser;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row justify-between items-center h-[70] px-5">
        <Image
          source={ZotBinsLogo}
          resizeMode="contain"
          className="h-10 w-10"
        />

        <View className="flex-row items-center">
          <Text className="mr-2 text-[#fc8803] text-sm">21</Text>
          <Image
            source={{
              uri: user?.photoURL || "https://via.placeholder.com/250",
            }}
            className="h-12 w-12 rounded-full"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Header;
