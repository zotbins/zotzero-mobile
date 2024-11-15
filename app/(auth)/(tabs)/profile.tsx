import { View, Text, Button, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import auth from "@react-native-firebase/auth";
import storage from "@react-native-firebase/storage";
import * as ImagePicker from "expo-image-picker";
import firestore, { collection, getDocs } from "@react-native-firebase/firestore";
import PasswordChange from "@/components/PasswordChange";

const Profile = () => {
  const user = auth().currentUser;

  const [profilePic, setProfilePic] = useState<string>(user?.photoURL || "https://via.placeholder.com/250" );

  const [userDoc, setUserDoc] = useState<any>(null);

  const [showPasswordForm, setShowPasswordForm] = useState(false);

  useEffect(() => {
    const fetchUserDoc = async () => {
      const uid = user?.uid;
      if (!uid) {
        return;
      }

      try {
        const userDocRef = firestore().collection("users").doc(uid);
        const userDocSnap = await userDocRef.get();
        if (!userDocSnap.exists) {
          throw new Error("User document does not exist");
        }
        setUserDoc(userDocSnap.data());
      } catch (error) {
        console.error("Error fetching user document: ", error);
        Alert.alert("Error", "Failed to fetch user document");
      }
    };

    fetchUserDoc();
  }, [user]);



  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Sorry, we need camera roll permissions to add a profile picture!");
    }
  };

  const pickImage = async () => {
    requestPermission();

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0,
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
        <Text> USER: {user?.email}</Text>
        <Text> First name: {userDoc?.firstname} </Text>
        <Text> Last name: {userDoc?.lastname} </Text>
        <TouchableOpacity onPress={() => auth().signOut()} className="bg-blue-500 px-4 py-3 rounded-lg my-2">
          <Text className="text-white"> Sign Out </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setShowPasswordForm(!showPasswordForm)} className="bg-blue-500 px-4 py-3 rounded-lg my-2">
          <Text className="text-white text-center">
            {showPasswordForm ? "Cancel Password Change" : "Change Password"}
          </Text>
        </TouchableOpacity>
      
      {/* Conditionally render the PasswordChange form */}
      {showPasswordForm && <PasswordChange onComplete={() => setShowPasswordForm(false)} />}
      

      </View>
    </>
  );
};

export default Profile;

