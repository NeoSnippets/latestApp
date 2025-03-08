import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import images from "@/constants/images";

const NoResults = () => {
  return (
    <View style={styles.container}>
      <Image
        source={images.noResult}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.heading}>No Result</Text>
      <Text style={styles.subheading}>We could not find any result</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: "92%", // Equivalent to w-11/12
    height: 320, // Equivalent to h-80
  },
  heading: {
    fontSize: 24, // Equivalent to text-2xl
    fontFamily: "Rubik-Bold", // Assuming Rubik-Bold is properly linked in your project
    color: "#333333", // Equivalent to text-black-300 (light black/grey color)
    marginTop: 20,
  },
  subheading: {
    fontSize: 14, // Equivalent to text-base
    color: "#666666", // Equivalent to text-black-100 (lighter black/grey color)
    marginTop: 10,
  },
});

export default NoResults;
