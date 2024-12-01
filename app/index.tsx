import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import ZotbinsLogo from "../assets/images/zotbins_logo.png";
import "../global.css";

const Home = () => {
  const router = useRouter();

  const goToOnboarding = () => {
    router.push("/onboarding");
  };

  const goToLogin = () => {
    router.push("/login");
  };

  return (
    <View className="flex-1 bg-white px-5 py-12 justify-center items-center">
      <Image
        source={ZotbinsLogo}
        resizeMode="contain"
        className="w-2/5 h-2/5"
      />
      <Text className="text-black text-3xl mb-5">Welcome to ZotZero!</Text>

      <View className="items-center justify-center w-full">
        {/* Onboarding Slides */}
        <Pressable
          className="rounded-lg px-6 py-3 flex items-center justify-center mb-3 active:opacity-50"
          style={{ backgroundColor: Colors.tintColor }}
          onPress={goToOnboarding}
        >
          <Text className="text-white">I'm a New User!</Text>
        </Pressable>

        {/* Login */}
        <Pressable
          className="rounded-lg px-6 py-3 flex items-center justify-center active:opacity-50"
          style={{ backgroundColor: Colors.blue }}
          onPress={goToLogin}
        >
          <Text className="text-white">Log In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
