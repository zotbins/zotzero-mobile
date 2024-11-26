import { View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <>
      <Tabs 
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.white,
            position: "absolute",
            bottom: 20,
            justifyContent: "center",
            alignSelf: "center",
            height: 63,
            marginHorizontal: 10,
            paddingHorizontal: 0,
            paddingVertical: 8,
            paddingBottom: 8,
            borderRadius: 40,

            borderColor: Colors.white,
          },
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#999",
          tabBarActiveTintColor: Colors.white,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
              className={`p-3 rounded-[30px] ${focused ? "bg-tintColor" : "bg-white"}`}
              >
                <AntDesign name="home" size={18} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="scan"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
              className={`p-3 rounded-[30px] ${focused ? "bg-tintColor" : "bg-white"}`}
              >
                <AntDesign name="scan1" size={18} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
              className={`p-3 rounded-[30px] ${focused ? "bg-tintColor" : "bg-white"}`}
              >
                <AntDesign name="user" size={18} color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
      <StatusBar style="light" />
    </>
  );
}
