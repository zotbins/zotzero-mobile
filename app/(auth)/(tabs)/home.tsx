import {
  Platform,
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Link, Stack } from "expo-router";
import Header from "@/components/Header";
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
} from "react-native-maps";
import { markers } from "../../../assets/markers.js";

const INITIAL_REGION = {
  latitude: 33.646044797114584,
  longitude: -117.84272383250185,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const Home = () => {
  // update marker type
  const onMarkerSelected = (marker: any) => {
    // Update later to show bin status
    Alert.alert(marker.name);
  };

  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={styles.container}>
        <Link href="/quiz" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Daily Quiz</Text>
          </Pressable>
        </Link>
        <MapView
          style={styles.map}
          initialRegion={INITIAL_REGION}
          showsUserLocation
          showsMyLocationButton
          // Later, add this line to switch to Google Maps (ios + android compatible):
          provider={
            Platform.OS === "android" ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
          }
        >
          {markers.map((marker) => (
            <Marker
              key={marker.name}
              coordinate={marker}
              onPress={() => onMarkerSelected(marker)}
            />
          ))}
        </MapView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  map: {
    marginTop: 50,
    borderRadius: 4,
    width: "100%",
    height: "60%",
  },
  text: {
    color: Colors.white,
    fontSize: 16,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: Colors.tintColor,
  },
});
