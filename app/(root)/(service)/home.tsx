import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: "https://img.freepik.com/premium-photo/farmer-with-hologram-farm-field-digital-farming-concept-ai-generated_889761-2131.jpg?w=2000" }} 
          style={styles.logo} 
        />
        <Text style={styles.title}>Digital Farm Assistant</Text>
      </View>
      
      <Text style={styles.subtitle}>AI-Powered Farming Solutions</Text>
      
      <View style={styles.featuresContainer}>
        <TouchableOpacity 
          style={styles.featureCard}
          onPress={() => router.push("/disease-detection")}
        >
          <Image 
            source={{ uri: "https://th.bing.com/th/id/OIP.ti991NFAUnj7xTsxVKufsAHaEK?rs=1&pid=ImgDetMain" }} 
            style={styles.featureImage} 
          />
          <Text style={styles.featureTitle}>Plant Disease Detection</Text>
          <Text style={styles.featureDescription}>
            Upload photos of affected plants and get instant diagnosis and treatment recommendations
          </Text>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Try Now</Text>
            <Ionicons name="arrow-forward" size={16} color="#fff" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.featureCard}
          onPress={() => router.push("/farm-assistant")}
        >
          <Image 
            source={{ uri: "https://www.bizzbuzz.news/h-upload/2021/10/26/1377533-basf-1.webp" }} 
            style={styles.featureImage} 
          />
          <Text style={styles.featureTitle}>Farm Assistant Chatbot</Text>
          <Text style={styles.featureDescription}>
            Chat with our AI assistant using text or voice to get farming advice and solutions
          </Text>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Try Now</Text>
            <Ionicons name="arrow-forward" size={16} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#4CAF50",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginVertical: 15,
  },
  featuresContainer: {
    padding: 15,
  },
  featureCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  featureImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 15,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    marginRight: 5,
  },
});
