import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import auth from "@react-native-firebase/auth";

const Profile = () => {
  const user = auth().currentUser;
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.text}>Profile</Text>
        <Text>USER: {user?.email}</Text>
        <Button title="Sign Out" onPress={() => auth().signOut()} />
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.black,
  },
});
