import React from "react";
import { ScrollView, Text, Image, View } from "react-native";

const OnboardingQuizFeature = () => {
  return (
    <View className="flex-1 bg-amber-50 pt-16">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text className="text-4xl font-bold text-lime-900 mx-10 mt-12 mb-5 ">
          Quiz Feature
        </Text>
        <Text className="text-2xl text-center text-lime-900 w-10/12 mx-8 mb-5 leading-10">
          Our ZotZero app features an engaging and interactive quiz feature to
          test your knowledge on sustainaility and recycling.
        </Text>

        <Image
          source={require("../../assets/images/quizfeatureicon.png")}
          className="w-56 h-56 my-5"
        ></Image>

        <Text className="text-2xl text-lime-900 pl-2 mb-5 leading-10 mx-10 ">
          {"\n"}1. Select the quiz tab to start the interactive quiz.
          {"\n"}2. Answer a series of multiple-choice questions.
          {"\n"}3. Get instant feedback and see your score at the end.
        </Text>

        <Image
          source={require("../../assets/images/leaderboard_icon.png")}
          className="w-40 h-36 my-5"
        ></Image>

        <Text className="text-2xl text-center text-lime-900 w-10/12 mx-8 my-5 leading-10">
          Play the quiz daily to earn rewards such as free meal swipes! You can
          also battle with your friends on the ZotZero Leaderboard!
        </Text>
      </ScrollView>
    </View>
  );
};

export default OnboardingQuizFeature;
