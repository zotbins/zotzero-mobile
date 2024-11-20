import { View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";


export default function Layout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.white,
            position: "absolute",
            bottom: 20,
            justifyContent: "center",
            alignSelf: "center",
            height: 63,
            marginHorizontal: 10,
            paddingHorizontal: 0,
            paddingVertical: 8,
            paddingBottom: 8,
            borderRadius: 40,

            borderColor: Colors.white,
          },
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#999",
          tabBarActiveTintColor: Colors.white,
        }}
      >
        <Tabs.Screen
          name="about"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.white,
                }}
              >
                {/* <AntDesign name="about" size={18} color={color} /> */}
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="quizFeature"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.white,
                }}
              >
                {/* <AntDesign name="quizFeature" size={18} color={color} /> */}
              </View>
            ),
          }}
        />
      </Tabs>
      <StatusBar style="light" />
    </>
  );
}

// const AboutScreen = () => (
//   <View style={[styles.scene, { backgroundColor: Colors.white }]}>
//     <Text>About Page Content</Text>
//   </View>
// );

// const QuizFeatureScreen = () => (
//   <View style={[styles.scene, { backgroundColor: Colors.white }]}>
//     <Text>Quiz Feature Page Content</Text>
//   </View>
// );

// export default function Layout() {
//   const [index, setIndex] = useState(0);
//   const [routes] = useState([
//     { key: "about", title: "About" },
//     { key: "quizFeature", title: "Quiz" },
//   ]);

//   const renderScene = SceneMap({
//     about: AboutScreen,
//     quizFeature: QuizFeatureScreen,
//   });

//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={{ width: Dimensions.get("window").width }}
//       renderTabBar={(props) => (
//         <TabBar
//           {...props}
//           style={styles.tabBar}
//           indicatorStyle={styles.indicator}
//           renderLabel={({ route, focused }) => (
//             <Text style={[styles.label, focused && styles.focusedLabel]}>
//               {route.title}
//             </Text>
//           )}
//         />
//       )}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   scene: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   tabBar: {
//     backgroundColor: Colors.white,
//     elevation: 0,
//   },
//   indicator: {
//     backgroundColor: Colors.tintColor,
//     height: 3,
//   },
//   label: {
//     color: "#999",
//     fontSize: 14,
//   },
//   focusedLabel: {
//     color: Colors.tintColor,
//   },
// });