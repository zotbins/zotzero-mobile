import React from "react";
import { ScrollView, View, Dimensions } from "react-native";
import About from "./about";
import Quiz from "./quizFeature";
import Scanner from "./scannerFeature";
import End from "./end";

const screenWidth = Dimensions.get("window").width;

export default function Layout() {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      className="flex-1"
    >
      <View style={{ width: screenWidth }} className="flex-1">
        <About />
      </View>
      <View style={{ width: screenWidth }} className="flex-1">
        <Quiz />
      </View>
      <View style={{ width: screenWidth }} className="flex-1">
        <Scanner />
      </View>
      <View style={{ width: screenWidth }} className="flex-1">
        <End />
      </View>
    </ScrollView>
  );
}