import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Welcome to ZotZero!</Text>
        <Text>
          This page will be displayed the first time the app is opened (ie.
          onboarding)
        </Text>

        <Link href="/login">
          <Text style={{ color: Colors.blue }}>Log In</Text>
        </Link>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.white,
    fontSize: 16,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: Colors.tintColor,
  },
});
