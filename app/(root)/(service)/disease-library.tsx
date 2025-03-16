"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import { plantDiseases } from "@/lib/farm-data"
import DiseaseCard from "@/components/Disease-card"

export default function DiseaseLibraryScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null)
  const [selectedSeverity, setSelectedSeverity] = useState<string | null>(null)

  // Get unique crop types from all diseases
  const cropTypes = Array.from(new Set(plantDiseases.flatMap((disease) => disease.crops))).sort()

  // Filter diseases based on search query and filters
  const filteredDiseases = plantDiseases.filter((disease) => {
    // Search query filter
    const matchesSearch =
      searchQuery === "" ||
      disease.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      disease.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      disease.crops.some((crop) => crop.toLowerCase().includes(searchQuery.toLowerCase()))

    // Crop filter
    const matchesCrop = selectedCrop === null || disease.crops.some((crop) => crop === selectedCrop)

    // Severity filter
    const matchesSeverity = selectedSeverity === null || disease.severity === selectedSeverity

    return matchesSearch && matchesCrop && matchesSeverity
  })

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Plant Disease Library</Text>
        <Text style={styles.headerSubtitle}>Browse common plant diseases, their symptoms, and treatments</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search diseases, crops, or symptoms..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <View style={styles.filtersContainer}>
        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>Filter by Crop</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={[styles.filterChip, selectedCrop === null && styles.activeFilterChip]}
              onPress={() => setSelectedCrop(null)}
            >
              <Text style={[styles.filterChipText, selectedCrop === null && styles.activeFilterChipText]}>
                All Crops
              </Text>
            </TouchableOpacity>
            {cropTypes.map((crop) => (
              <TouchableOpacity
                key={crop}
                style={[styles.filterChip, selectedCrop === crop && styles.activeFilterChip]}
                onPress={() => setSelectedCrop(crop)}
              >
                <Text style={[styles.filterChipText, selectedCrop === crop && styles.activeFilterChipText]}>
                  {crop}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>Filter by Severity</Text>
          <View style={styles.severityFilters}>
            <TouchableOpacity
              style={[styles.filterChip, selectedSeverity === null && styles.activeFilterChip]}
              onPress={() => setSelectedSeverity(null)}
            >
              <Text style={[styles.filterChipText, selectedSeverity === null && styles.activeFilterChipText]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterChip,
                styles.lowSeverityChip,
                selectedSeverity === "low" && styles.activeLowSeverityChip,
              ]}
              onPress={() => setSelectedSeverity("low")}
            >
              <Text style={[styles.filterChipText, selectedSeverity === "low" && styles.activeFilterChipText]}>
                Low
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterChip,
                styles.mediumSeverityChip,
                selectedSeverity === "medium" && styles.activeMediumSeverityChip,
              ]}
              onPress={() => setSelectedSeverity("medium")}
            >
              <Text style={[styles.filterChipText, selectedSeverity === "medium" && styles.activeFilterChipText]}>
                Medium
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterChip,
                styles.highSeverityChip,
                selectedSeverity === "high" && styles.activeHighSeverityChip,
              ]}
              onPress={() => setSelectedSeverity("high")}
            >
              <Text style={[styles.filterChipText, selectedSeverity === "high" && styles.activeFilterChipText]}>
                High
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.resultsContainer}>
        <Text style={styles.resultsCount}>
          {filteredDiseases.length} {filteredDiseases.length === 1 ? "disease" : "diseases"} found
        </Text>
        {filteredDiseases.map((disease) => (
          <DiseaseCard key={disease.id} disease={disease} />
        ))}
        {filteredDiseases.length === 0 && (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>No diseases found matching your criteria</Text>
            <TouchableOpacity
              style={styles.resetButton}
              onPress={() => {
                setSearchQuery("")
                setSelectedCrop(null)
                setSelectedSeverity(null)
              }}
            >
              <Text style={styles.resetButtonText}>Reset Filters</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  )
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
  searchContainer: {
    padding: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 15,
  },
  filtersContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  filterSection: {
    marginBottom: 15,
  },
  filterTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 10,
  },
  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: "#f0f0f0",
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  filterChipText: {
    fontSize: 13,
    color: "#555",
  },
  activeFilterChip: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  activeFilterChipText: {
    color: "#fff",
    fontWeight: "500",
  },
  severityFilters: {
    flexDirection: "row",
  },
  lowSeverityChip: {
    borderColor: "#4CAF50",
  },
  mediumSeverityChip: {
    borderColor: "#FF9800",
  },
  highSeverityChip: {
    borderColor: "#F44336",
  },
  activeLowSeverityChip: {
    backgroundColor: "#4CAF50",
  },
  activeMediumSeverityChip: {
    backgroundColor: "#FF9800",
  },
  activeHighSeverityChip: {
    backgroundColor: "#F44336",
  },
  resultsContainer: {
    padding: 15,
  },
  resultsCount: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
  },
  noResultsContainer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  noResultsText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 15,
  },
  resetButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  resetButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
})

