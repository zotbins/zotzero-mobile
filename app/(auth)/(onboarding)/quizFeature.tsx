import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import {quizfeatureicon} from "../../../assets/images/quizfeatureicon.png"

const quizFeature = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}} className="bg-amber-50">
      <Text className="text-4xl font-bold text-lime-900 mx-10 mb-5">Quiz Feature</Text>
      <Text className="text-xl text-center text-lime-900 w-10/12 mx-8 mb-5 leading-8">
      Our ZotZero app features an engaging and interactive quiz feature to test your knowledge on sustainaility and recycling.
      </Text>

      <Image source={require('../../../assets/images/quizfeatureicon.png')} className="w-56 h-56 my-5"></Image>

      <Text className="text-xl text-lime-900 pl-2 mb-5 leading-8 mx-10 ">
      {'\n'}1.  Select the quiz tab to start the interactice quiz.
      {'\n'}2.  Answer a series of multiple-choice questions.
      {'\n'}3.  Get instant feedback and see your score at the end.
      </Text>

    </ScrollView>
  );
};

export default quizFeature;
