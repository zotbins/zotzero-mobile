import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { useRouter } from 'expo-router';
import ZotbinsLogo from '../assets/images/zotbins_logo.svg';
import "../global.css"

const Home = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      router.push('/feature-1');
    }
  };

    return (
      <View className="flex-1 bg-white px-5 py-12 justify-center items-center">
        <Text className="text-black text-3xl mb-5">Welcome to Zotbins!</Text>
        
        <View className="items-center justify-center w-full">
          <TouchableOpacity className="rounded-lg px-6 py-3 flex items-center justify-center" style={{backgroundColor:Colors.tintColor}} onPress={goToNextPage}>
            <Text className="text-white">
              Learn more
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default Home;