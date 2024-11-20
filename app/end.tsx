import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from 'expo-router';
import Colors from "@/constants/Colors";
import DotIndicator from '../components/DotIndicator';

const end = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      router.push('/signup');
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      router.push('/feature-1');
    }
  };
  return (
    <>
        <View className="flex-1 bg-white px-5 py-12 justify-center items-center">
            <Text className="text-black text-3xl mb-5 text-center">Get Started with Sustainability today!</Text>
                <View className="flex-row justify-center items-center mt-5">
                <TouchableOpacity className="rounded-lg px-6 py-3 flex items-center justify-center" style={{backgroundColor:Colors.tintColor}} onPress={goToNextPage}>
                <Text className="text-white">{'Sign up'}</Text>
                </TouchableOpacity>
                </View>
        </View>
    </>
)
}

export default end;