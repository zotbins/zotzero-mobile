import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import auth from "@react-native-firebase/auth";
import storage from "@react-native-firebase/storage";
import * as ImagePicker from "expo-image-picker";

const Profile = () => {
  const user = auth().currentUser;

  const [profilePic, setProfilePic] = useState<string>(user?.photoURL || "https://via.placeholder.com/250" );


  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need access to your photos to change your profile picture!");
    }
  };

  
  const pickImage = async () => {
    requestPermission();

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      const selectedImageUri = result.assets[0].uri;
      const uid = user?.uid;

      if (!uid) {
        return;
      }

      const storageRef = storage().ref(`zotzero-user-profile-pics/${uid}`);
      const uploadTask = storageRef.putFile(selectedImageUri);

      uploadTask.on("state_changed", () => {}, 
        (error) => {
          console.error(error);
        }, 
        async () => {
          const downloadURL = await storageRef.getDownloadURL();
          user?.updateProfile({ photoURL: downloadURL });
          setProfilePic(downloadURL)
        }
      );
    }
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View 
        className="bg-white flex-1 justify-center items-center">
        <Text className="text-black">Profile</Text>
        <Image 
          source={{ uri: profilePic }} 
          className="w-24 h-24 rounded-full"
        />
        <TouchableOpacity onPress={pickImage} className="bg-blue-500 px-4 py-3 rounded-lg my-2">
          <Text className="text-white"> Change Profile Picture </Text>
        </TouchableOpacity>
        <Text>USER: {user?.email}</Text>
        <TouchableOpacity onPress={() => auth().signOut()} className="bg-blue-500 px-4 py-3 rounded-lg my-2">
          <Text className="text-white"> Sign Out </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Profile;

