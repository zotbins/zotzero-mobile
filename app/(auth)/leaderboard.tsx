import React from "react";
import { Text } from "react-native";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";

const Leaderboard = () => {
    const router = useRouter();

    // leaderboard data with the current user (hardcoded for now, will be changed to grab data from firebase)
    const leaderboardData = [
        { rank: 1, name: "You", points: 1500 },
        { rank: 2, name: "Test_User_1", points: 1400 },
        { rank: 3, name: "Test_User_2", points: 1300 },
        { rank: 4, name: "Test_User_3", points: 1200 },
        { rank: 5, name: "Test_User_4", points: 1100 },
        { rank: 6, name: "Test_User_5", points: 1000 },
        { rank: 7, name: "Test_User_6", points: 900 },
        { rank: 8, name: "Test_User_7", points: 800 },
        { rank: 9, name: "Test_User_8", points: 700 },
        { rank: 10, name: "Test_User_9", points: 600 },
    ];

    const currentUser = leaderboardData[0];

    return (
        <>
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
            <Text>Leaderboard</Text>
            <Text>
                Rank {currentUser.rank} - {currentUser.name} - {currentUser.points} Points
            </Text>
            <Text>All Rankings</Text>
            {leaderboardData.map((user) => (
                <Text key={user.rank}>
                    Rank {user.rank} - {user.name} - {user.points} Points
                </Text>
            ))}
        </>
    );
};

export default Leaderboard;
