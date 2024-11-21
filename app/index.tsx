import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import ZotbinsLogo from "../assets/images/zotbins_logo.svg";
import "../global.css";

const Home = () => {
  const router = useRouter();

  const goToOnboarding = () => {
    router.push("/(auth)/(onboarding)/about");
  };

  const goToLogin = () => {
    router.push("/login");
  };

  return (
    <View className="flex-1 bg-white px-5 py-12 justify-center items-center">
      <Text className="text-black text-3xl mb-5">Welcome to ZotZero!</Text>

      <View className="items-center justify-center w-full">
        {/* Onboarding Slides */}
        <TouchableOpacity
          className="rounded-lg px-6 py-3 flex items-center justify-center mb-3"
          style={{ backgroundColor: Colors.tintColor }}
          onPress={goToOnboarding}
        >
          <Text className="text-white">I'm a New User!</Text>
        </TouchableOpacity>

        {/* Login */}
        <TouchableOpacity
          className="rounded-lg px-6 py-3 flex items-center justify-center"
          style={{ backgroundColor: Colors.blue }}
          onPress={goToLogin}
        >
          <Text className="text-white">Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
