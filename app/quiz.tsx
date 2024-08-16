import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import Header from "@/components/Header";

export default function Quiz() {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={styles.container}>
        <Text style={styles.text}>QUIZ PAGE</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  text: {
    color: Colors.white,
  },
});
