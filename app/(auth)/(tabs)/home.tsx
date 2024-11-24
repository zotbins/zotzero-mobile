import {
  Platform,
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
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
        <Link href="/leaderboard" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Leaderboard</Text>
          </Pressable>
        </Link>
        <Link href="/map" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Map</Text>
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
  map: {
    marginTop: 50,
    borderRadius: 4,
    width: "100%",
    height: "60%",
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
    marginBottom: 10,
  },
});
