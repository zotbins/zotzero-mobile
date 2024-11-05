import {
  View,
  Text,
  StyleSheet,
  Pressable,
  StatusBar,
  Animated,
} from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { Link, Stack, useRouter } from "expo-router";
import data from "../../data/QuizData.js";
import { Ionicons } from "@expo/vector-icons";

const Quiz = () => {
  const router = useRouter();

  const questions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentSelected, setCurrentSelected] = useState<string | null>(null);
  const [answer, setAnswer] = useState<string | null>(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, questions.length],
    outputRange: ["0%", "100%"],
  });

  const displayProgress = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 20,
          borderRadius: 20,
          backgroundColor: "#00000020",
        }}
      >
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: Colors.tintColor,
            },
            {
              width: progressAnim,
            },
          ]}
        ></Animated.View>
      </View>
    );
  };

  const displayQuestion = () => {
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    return (
      <View style={{ paddingTop: 30, paddingBottom: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ color: Colors.black, fontSize: 20 }}>
            {currentQuestionIndex + 1}{" "}
          </Text>
          <Text style={{ color: Colors.black, fontSize: 20 }}>
            / {questions.length}
          </Text>
        </View>
        <Text style={{ color: Colors.black, fontSize: 30 }}>
          {questions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };

  const displayOptions = () => {
    return (
      <View>
        {questions[currentQuestionIndex]?.options.map((option) => (
          <Pressable
            key={option}
            disabled={isOptionsDisabled}
            style={{
              backgroundColor:
                option == answer
                  ? Colors.tintColor
                  : option == currentSelected
                  ? Colors.red
                  : Colors.blue,
              height: 100,

              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              marginVertical: 10,
            }}
            onPress={() => checkAnswer(option)}
          >
            <Text style={{ fontSize: 20, color: Colors.white }}>{option}</Text>
          </Pressable>
        ))}
      </View>
    );
  };

  const checkAnswer = (selected: string) => {
    let answer = questions[currentQuestionIndex]["answer"];
    setCurrentSelected(selected);
    setAnswer(answer);
    setIsOptionsDisabled(true);
    if (selected == answer) {
      setScore(score + 1);
    }
  };

  const showNextButton = () => {
    if (isOptionsDisabled) {
      return (
        <Pressable
          onPress={handleNext}
          style={{
            width: "100%",
            borderColor: Colors.grey,
            borderWidth: 2,
            backgroundColor: Colors.white,
            paddingHorizontal: 20,
            marginVertical: 10,
            height: 60,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ fontSize: 20, color: Colors.black, textAlign: "center" }}
          >
            {currentQuestionIndex == questions.length - 1
              ? "Show Results"
              : "Next Question"}
          </Text>
        </Pressable>
      );
    } else {
      return null;
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex == questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentSelected(null);
      setAnswer(null);
      setIsOptionsDisabled(false);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <Ionicons
              name="chevron-back"
              size={24}
              color={Colors.black}
              onPress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />
      <View style={styles.container}>
        {!showResults && displayProgress()}
        {!showResults && displayQuestion()}
        {!showResults && displayOptions()}
        {!showResults && showNextButton()}

        {showResults && (
          <View>
            <Text
              style={{ fontSize: 40, color: Colors.black, textAlign: "center" }}
            >
              Results
            </Text>
            <Text
              style={{ fontSize: 20, color: Colors.black, textAlign: "center" }}
            >
              {score} / {questions.length}
            </Text>
            <View style={{ paddingTop: 50 }}>
              <Link href="/home" asChild>
                <Pressable style={styles.button}>
                  <Text style={styles.text}>Back to Home</Text>
                </Pressable>
              </Link>
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  text: {
    color: Colors.black,
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
