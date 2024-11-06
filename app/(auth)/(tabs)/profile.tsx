import { View, Text, Button } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import auth from "@react-native-firebase/auth";

const Profile = () => {
  const user = auth().currentUser;
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View 
        className="bg-white flex-1 justify-center items-center">
        <Text className="text-black">Profile</Text>
        <Text>USER: {user?.email}</Text>
        <Button title="Sign Out" onPress={() => auth().signOut()} />
      </View>
    </>
  );
};

export default Profile;

