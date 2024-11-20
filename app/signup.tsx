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
import { Link } from "expo-router";
import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";
import Colors from "@/constants/Colors";
import firestore from "@react-native-firebase/firestore";

const createUserDocument = async (uid: string, email: string) => {
  await firestore()
        .collection("users")
        .doc(uid)
        .set({
          email,
          uid,
          firstname: "FIRSTNAME",
          lastname: "LASTNAME",
        });
}

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await auth().createUserWithEmailAndPassword(email, password);

      if (response.additionalUserInfo?.isNewUser) {
        //Alert.alert("Success", "Check your email (setup email verification)!");
        const uid = response.user.uid;
        const email = response.user.email;
        if (uid && email) {
          await createUserDocument(uid, email);
        }
      } else {
        Alert.alert("Info", "This account already exists.");
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
      <View className="absolute bottom-12 left-8 z-10">
        <Link href="/feature-1">
          <View
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor:Colors.tintColor}}
          >
            <Text className="text-white text-3xl">?</Text>
          </View>
        </Link>
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
