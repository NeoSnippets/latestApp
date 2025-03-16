import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import DiseaseCard from "@/components/Disease-card";

export default function DiseaseDetectionScreen() {
  const [image, setImage] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setResult(null);
      analyzeImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
      return;
    }
    
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setResult(null);
      analyzeImage(result.assets[0].uri);
    }
  };

  const analyzeImage = async (imageUri) => {
    setAnalyzing(true);
    
    // In a real app, this would send the image to an AI model
    // For now, we'll use our mock database to simulate AI detection
    setTimeout(() => {
      // Import the detectDisease function from our farm-data.ts
      const { detectDisease } = require("@/lib/farm-data");
      
      // Detect a random disease from our database
      const detectedDisease = detectDisease();
      
      setResult(detectedDisease);
      setAnalyzing(false);
    }, 2000);
  };

  const resetImage = () => {
    setImage(null);
    setResult(null);
  };

  const selectCropType = (cropType) => {
    // This would be used to filter diseases by crop type
    // In a real app, this would help the AI model focus on specific crops
    console.log(`Selected crop type: ${cropType}`);
    // You could store this in state and use it in the analyzeImage function
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Plant Disease Detection</Text>
        <Text style={styles.headerSubtitle}>Upload a photo of your affected plant to get an instant diagnosis</Text>
      </View>

      <View style={styles.cropSelection}>
        <Text style={styles.sectionTitle}>Select Crop Type (Optional)</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cropTypeScroll}>
          {["Tomato", "Potato", "Cucumber", "Pepper", "Corn", "Lettuce", "Grape"].map((crop) => (
            <TouchableOpacity 
              key={crop} 
              style={styles.cropTypeButton}
              onPress={() => selectCropType(crop)}
            >
              <Text style={styles.cropTypeText}>{crop}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.uploadSection}>
        {!image ? (
          <View style={styles.uploadOptions}>
            <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
              <Ionicons name="cloud-upload" size={24} color="#4CAF50" />
              <Text style={styles.uploadButtonText}>Upload Image</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.uploadButton} onPress={takePhoto}>
              <Ionicons name="camera" size={24} color="#4CAF50" />
              <Text style={styles.uploadButtonText}>Take Photo</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.imagePreviewContainer}>
            <Image source={{ uri: image }} style={styles.imagePreview} />
            <TouchableOpacity style={styles.resetButton} onPress={resetImage}>
              <Ionicons name="close" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {analyzing && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4CAF50" />
          <Text style={styles.loadingText}>Analyzing your plant...</Text>
        </View>
      )}

      {result && (
        <View style={styles.resultContainer}>
          <DiseaseCard disease={result} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 20,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  uploadSection: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  uploadOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  uploadButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    width: "45%",
  },
  uploadButtonText: {
    marginTop: 8,
    color: "#333",
    fontWeight: "500",
  },
  imagePreviewContainer: {
    position: "relative",
  },
  imagePreview: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  resetButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    padding: 5,
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    color: "#666",
    fontSize: 16,
  },
  resultContainer: {
    margin: 20,
  },
  cropSelection: {
    margin: 20,
    marginBottom: 0,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cropTypeScroll: {
    marginTop: 10,
  },
  cropTypeButton: {
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#4CAF50",
  },
  cropTypeText: {
    color: "#4CAF50",
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
});
