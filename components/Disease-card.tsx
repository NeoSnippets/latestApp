import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import type { PlantDisease } from "../lib/farm-data";

interface DiseaseCardProps {
  disease: PlantDisease;
}

export default function DiseaseCard({ disease }: DiseaseCardProps) {
  // Determine severity color
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return '#F44336';
      case 'medium':
        return '#FF9800';
      case 'low':
        return '#4CAF50';
      default:
        return '#4CAF50';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.diseaseName}>{disease.name}</Text>
        <View style={[styles.severityBadge, { backgroundColor: getSeverityColor(disease.severity) }]}>
          <Ionicons name="warning" size={12} color="#fff" />
          <Text style={styles.severityText}>
            {disease.severity.charAt(0).toUpperCase() + disease.severity.slice(1)} Severity
          </Text>
        </View>
      </View>

      <View style={styles.cropsList}>
        <Text style={styles.cropsLabel}>Affects: </Text>
        <Text style={styles.cropsText}>{disease.crops.join(", ")}</Text>
      </View>

      <View style={styles.imageContainer}>
        {disease.images && disease.images.length > 0 ? (
          <Image source={{ uri: disease.images[0] }} style={styles.image} />
        ) : (
          <Image source={{ uri: "https://via.placeholder.com/200" }} style={styles.image} />
        )}
        <View style={styles.confidenceBadge}>
          <Text style={styles.confidenceText}>{disease.confidence}% Confidence</Text>
        </View>
      </View>

      <Text style={styles.description}>{disease.description}</Text>

      <View style={styles.symptomsContainer}>
        <Text style={styles.sectionTitle}>Symptoms</Text>
        {disease.symptoms.map((symptom, index) => (
          <View key={index} style={styles.symptomItem}>
            <View style={styles.bulletPoint} />
            <Text style={styles.symptomText}>{symptom}</Text>
          </View>
        ))}
      </View>

      <View style={styles.treatmentContainer}>
        <Text style={styles.sectionTitle}>Treatment</Text>
        {disease.treatment.map((item, index) => (
          <View key={index} style={styles.treatmentItem}>
            <Ionicons name="checkmark" size={16} color="#4CAF50" />
            <Text style={styles.treatmentText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.preventionContainer}>
        <Text style={styles.sectionTitle}>Prevention</Text>
        {disease.preventionTips.map((tip, index) => (
          <View key={index} style={styles.preventionItem}>
            <View style={styles.bulletPoint} />
            <Text style={styles.preventionText}>{tip}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  diseaseName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  severityBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  severityText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 4,
  },
  cropsList: {
    flexDirection: "row",
    marginBottom: 12,
  },
  cropsLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
  cropsText: {
    fontSize: 14,
    color: "#555",
  },
  imageContainer: {
    position: "relative",
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  confidenceBadge: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "rgba(76, 175, 80, 0.8)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  confidenceText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  description: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
    marginBottom: 15,
  },
  symptomsContainer: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  symptomItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#FF9800",
    marginTop: 7,
    marginRight: 8,
  },
  symptomText: {
    flex: 1,
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  treatmentContainer: {
    marginBottom: 15,
  },
  treatmentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  treatmentText: {
    flex: 1,
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
    marginLeft: 8,
  },
  preventionContainer: {
    marginBottom: 10,
  },
  preventionItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  preventionText: {
    flex: 1,
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
});
