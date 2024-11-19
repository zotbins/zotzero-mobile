import React from 'react';
import { ScrollView, Text } from 'react-native';

const About = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100 p-5">
      <Text className="text-2xl font-bold text-center mb-4">About Us</Text>
      <Text className="text-base leading-6 mb-4 text-justify">
      ZotBins is an innovative smart waste bin system designed to optimize waste management 
      efficiency and promote sustainable practices. By collecting and analyzing data on waste 
      diversion rates—specifically, the proportion of incorrectly placed trash items relative 
      to the total waste volume (e.g. glass bottle in the trash bin instead of recycle bin)—we 
      aim to enhance campus-wide waste management practices.
      </Text>
      <Text className="text-base leading-6 text-justify">
        We are currently partnered with UCI Dining. Add more information.
      </Text>
    </ScrollView>
  );
};

export default About;
