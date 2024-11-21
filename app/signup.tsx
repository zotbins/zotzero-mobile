import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Link, useRouter } from "expo-router";
import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";
import Colors from "@/constants/Colors";
import firestore from "@react-native-firebase/firestore";

const createUserDocument = async (
  uid: string,
  email: string,
  firstname: string,
  lastname: string
) => {
  await firestore().collection("users").doc(uid).set({
    email,
    uid,
    firstname,
    lastname,
  });
};

const Signup = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // should be more robust in the future
  const validatePassword = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "New passwords don't match");
      return false;
    } else if (password.length < 6 || confirmPassword.length < 6) {
      Alert.alert("Error", "New password must be at least 6 characters long");
      return false;
    } else {
      return true;
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      if (validatePassword()) {
        const response = await auth().createUserWithEmailAndPassword(
          email,
          password
        );

        if (response.additionalUserInfo?.isNewUser) {
          const uid = response.user.uid;
          const email = response.user.email;
          if (uid && email) {
            await createUserDocument(uid, email, firstName, lastName);
          }
        } else {
          Alert.alert("Info", "This account already exists.");
        }
      }
    } catch (e: any) {
      const err = e as FirebaseError;
      Alert.alert("Registration failed", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="First Name"
        />
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Last Name"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Password"
        />
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          placeholder="Confirm Password"
        />
        {loading ? (
          <ActivityIndicator size={"small"} style={{ margin: 28 }} />
        ) : (
          <>
            <Pressable style={styles.button} onPress={signUp}>
              <Text style={styles.text}>Sign Up</Text>
            </Pressable>
            <View style={styles.link}>
              <Link href="/login">
                <Text style={{ color: Colors.blue }}>
                  I already have an account
                </Text>
              </Link>
            </View>
          </>
        )}
      </KeyboardAvoidingView>
      <View className="absolute bottom-12 left-5 z-10">
        <Pressable
          className="bg-tintColor w-12 h-12 rounded-full justify-center items-center"
          onPress={() => router.push("/onboarding")}
        >
          <Text className="text-white text-3xl">?</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  text: {
    color: Colors.white,
    fontSize: 16,
  },
  link: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: Colors.tintColor,
    marginTop: 5,
  },
});
