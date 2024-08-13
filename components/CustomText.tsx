import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import Colors from "@/constants/Colors";

export default function CustomText({ children }: { children: string }) {
  return (
    <View>
      <Text style={{ color: Colors.white, fontSize: 16 }}>{children}</Text>
    </View>
  );
}
