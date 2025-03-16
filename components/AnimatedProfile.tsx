import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default function AnimatedProfile() {
  return (
    <View style={styles.container}>
      {/* Circular Animated Background */}
      <LottieView
        source={require("@/assets/videos/circle-bg.mp4")} // Replace with your Lottie animation file
        autoPlay
        loop
        style={styles.animation}
      />

      {/* AI Name in the Center */}
      <Text style={styles.aiName}>AI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#000",
  },
  animation: {
    position: "absolute",
    width: 120,
    height: 120,
  },
  aiName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
