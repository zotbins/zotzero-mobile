import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';

const About = () => {
  return (
    <View className="flex-1 bg-amber-50">
      <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text className="text-4xl font-bold text-lime-900 text-center mt-12 mb-5">Welcome to ZotZero!</Text>

        <Text className="text-2xl text-center text-lime-900 w-10/12 mb-5 leading-10">
        ZotZero is an app managed by the ZotBins team where users can participate and learn more about sustainability practices.
        </Text>

        <Image source={require('../../../assets/images/recycle_icon.png')} className="w-36 h-32 my-2"></Image>

        <Text className="text-4xl font-bold text-lime-900 text-center mt-12 mb-5">What is a Zot Bin?</Text>
        
        <Text className="text-2xl text-center text-lime-900 w-10/12 mb-5 leading-10">
        A Zot Bin is an innovative smart waste bin system designed to optimize waste management 
        efficiency.
        </Text>

        <Text className="text-4xl font-bold text-lime-900 text-center mt-12 mb-5">About the Team</Text>
        
        <Text className="text-2xl text-center text-lime-900 w-10/12 mb-5 leading-10">
        Learn more at zotbins.org.
        </Text>


        <Image source={require('../../../assets/images/zotbins_logo.png')} className="w-36 h-56 my-2"></Image>

        <Text className="text-4xl font-bold text-lime-900 mt-10 mb-5">Partners</Text>

        <Text className="text-2xl text-center text-lime-900 w-3/4 mb-5 leading-10">
        ZotBins is affiliated with UCI Dining and other organizations to help make the campus greener.
        </Text>

        <Image source={require('../../../assets/images/uci_dining.jpeg')} className="w-36 h-36 my-2"></Image>
      </ScrollView>
    </View>
  );
};

export default About;
