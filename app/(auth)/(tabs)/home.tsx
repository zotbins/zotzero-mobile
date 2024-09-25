import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Link, Stack } from "expo-router";
import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={styles.container}>
        <Link href="/quiz" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Daily Quiz</Text>
          </Pressable>
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
