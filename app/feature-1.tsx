import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from 'expo-router';
import Colors from "@/constants/Colors";
import DotIndicator from '../components/DotIndicator';


const feature1 = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      router.push('/end');
    }
  };

    return (
        <>
            <View className="flex-1 bg-white px-5 py-12 justify-center items-center">
            <Image
                source={require('../assets/images/scanner-demo.png')}
                className="w-full h-auto max-w-md max-h-96 object-contain mb-5"
            />
                <Text className="text-center mb-5">Our app contains a scanner for easy waste detection! Click on the scanner icon to scan your trash.</Text>
                <DotIndicator currentPage={1} totalPages={totalPages} />
                <View className="flex-row justify-center items-center mt-5">
                    <TouchableOpacity className="rounded-lg px-6 py-3 flex items-center justify-center" style={{backgroundColor:Colors.tintColor}} onPress={goToNextPage}>
                    <Text className="text-white">{'Next'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
export default feature1;