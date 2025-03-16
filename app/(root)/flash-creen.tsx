import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Video from "react-native-video";

const { width, height } = Dimensions.get("window");

const ArticleScreen = () => {
  return (
    <View style={styles.container}>
      {/* Content Section */}
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>Article Title</Text>
        <Text style={styles.sectionText}>This is the article text...</Text>
      </View>

      {/* Video Player in the Corner */}
      <Video
        source={{ uri: "@/assets/video/circle-bg.mp4" }} // Replace with your video URL or local file
        style={styles.video}
        repeat // Loops the video automatically
        resizeMode="cover"
        muted={false}
        playInBackground={false} // Prevents playing in background
        playWhenInactive={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  contentSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#212121",
  },
  sectionText: {
    fontSize: 16,
    color: "#424242",
    marginTop: 8,
  },
  video: {
    position: "absolute",
    bottom: 20, // Adjust position from bottom
    right: 20,  // Adjust position from right
    width: width * 0.3, // 30% of screen width
    height: height * 0.2, // 20% of screen height
    borderRadius: 10,
  },
});

export default ArticleScreen;
