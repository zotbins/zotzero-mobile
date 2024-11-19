import React from 'react';
import { ScrollView, Text } from 'react-native';

const quizFeature = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100 p-5">
      <Text className="text-2xl font-bold text-center mb-4">Quiz Feature</Text>
      <Text className="text-base leading-6 mb-4 text-justify">
        Our app features an engaging and interactive quiz feature to test your knowledge on sustainaility and recycling.
      </Text>
      <Text className="text-base leading-6 mb-4 text-justify">
        Here's how it works:
        {'\n'}1. Select the quiz tab to start the interactice quiz.
        {'\n'}2. Answer a series of multiple-choice questions.
        {'\n'}3. Get instant feedback and see your score at the end.
      </Text>
      <Text className="text-base leading-6 text-justify">
        Stay tuned for updates, as we plan to add more quiz categories and advanced features like progress tracking and rewards.
      </Text>
    </ScrollView>
  );
};

export default quizFeature;
