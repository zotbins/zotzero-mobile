import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e: any) {
      const err = e as FirebaseError;
      alert("Registration failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
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
            <Pressable style={styles.button} onPress={signIn}>
              <Text style={styles.text}>Login</Text>
            </Pressable>
            <View style={styles.link}>
              <Link href="/signup">
                <Text style={{ color: Colors.blue }}>
                  I don't have an account
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

export default Login;

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
