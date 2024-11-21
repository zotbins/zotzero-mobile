import React, { useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import firestore from "@react-native-firebase/firestore";
import { currentUserUid } from "../_layout";

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
          .collection('scores')
          .orderBy('score', 'desc');

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
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <Ionicons
              name="chevron-back"
              size={24}
              color={Colors.black}
              onPress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />
      <Text style={styles.userRank}>
        Rank {currentUser.rank} - {currentUser.username} - {currentUser.points}{" "}
        Points
      </Text>
      <Text style={styles.subheading}>All Rankings</Text>
      {leaderboardData.map((user) =>
        user.rank == userRank ? (
          <Text style={styles.userRank} key={user.rank}>
            Rank {userRank} - {"You"} - {userScore} Points
          </Text>
        ) : (
          <Text style={styles.rankText} key={user.rank}>
            Rank {user.rank} - {user.username} - {user.points} Points
          </Text>
        )
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subheading: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  rankContainer: {
    marginBottom: 15,
  },
  rankText: {
    fontSize: 18,
    color: Colors.black,
    textAlign: "center",
  },
  userRank: {
    fontSize: 18,
    backgroundColor: Colors.tintColor,
  },
});

export default Leaderboard;
