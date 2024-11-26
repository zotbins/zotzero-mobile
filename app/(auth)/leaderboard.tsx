import React, { useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import firestore from "@react-native-firebase/firestore";
import { currentUserUid } from "../_layout";
import BackButton from "@/components/BackButton";

interface LeaderboardUser {
  rank: number;
  points: number;
  username: string;
}

const Leaderboard = () => {
  const router = useRouter();

  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([]);
  const [userScore, setUserScore] = useState<number>(0);
  const [userRank, setUserRank] = useState<number>(0);
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const leaderboardQuery = firestore()
          .collection("scores")
          .orderBy("score", "desc");

        const querySnapshot = await leaderboardQuery.get();
        const leaderboard: LeaderboardUser[] = [];

        querySnapshot.forEach((doc) => {
          let name = doc.data().username;
          if (doc.data().uid == currentUserUid) {
            setUserScore(doc.data().score);
            setUserRank(leaderboard.length + 1);
          }
          leaderboard.push({
            rank: leaderboard.length + 1,
            username: name,
            points: doc.data().score,
          });
        });

        setLeaderboardData(leaderboard.slice(0, 10));
      } catch (error) {
        console.error("Error fetching leaderboard data: ", error);
      }
    };

    fetchLeaderboard();
  }, []);

  const currentUser = { rank: userRank, username: "You", points: userScore };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="pt-24">
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTransparent: true,
          headerLeft: () => <BackButton />,
          headerTitle: "",
        }}
      />
      <View className="flex flex-col items-center p-4">
      <Text className="text-xl bg-primary p-2 mb-4">
        Rank {currentUser.rank} - {currentUser.username} - {currentUser.points}{" "}
        Points
      </Text>
      <Text className="text-2xl font-semibold mb-2">All Rankings</Text>
      {leaderboardData.map((user) =>
        user.rank == userRank ? (
          <Text className="text-lg text-center mb-2 bg-tintColor" key={user.rank}>
            Rank {userRank} - {"You"} - {userScore} Points
          </Text>
        ) : (
          <Text className="text-lg text-center mb-2 text-black" key={user.rank}>
            Rank {user.rank} - {user.username} - {user.points} Points
          </Text>
        )
      )}
      </View>
    </ScrollView>
  );
};

export default Leaderboard;
