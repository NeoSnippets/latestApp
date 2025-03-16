"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import { farmingQuestions, findQuestionById, findRelatedQuestions } from "@/lib/farm-data"
import QuestionCard from "@/components/Question-card"

export default function KnowledgeBaseScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null)
  const [modalVisible, setModalVisible] = useState(false)

  // Get unique categories
  const categories = Array.from(new Set(farmingQuestions.map((q) => q.category))).sort()

  // Filter questions based on search query and category
  const filteredQuestions = farmingQuestions.filter((question) => {
    // Search query filter
    const matchesSearch =
      searchQuery === "" ||
      question.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      question.answer.toLowerCase().includes(searchQuery.toLowerCase())

    // Category filter
    const matchesCategory = selectedCategory === null || question.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Get the selected question details
  const questionDetails = selectedQuestion ? findQuestionById(selectedQuestion) : null

  // Get related questions
  const relatedQuestions = selectedQuestion ? findRelatedQuestions(selectedQuestion) : []

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Farming Knowledge Base</Text>
        <Text style={styles.headerSubtitle}>Find answers to common farming questions</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search questions or keywords..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesTitle}>Browse by Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.categoryChip, selectedCategory === null && styles.activeCategoryChip]}
            onPress={() => setSelectedCategory(null)}
          >
            <Text style={[styles.categoryChipText, selectedCategory === null && styles.activeCategoryChipText]}>
              All Categories
            </Text>
          </TouchableOpacity>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[styles.categoryChip, selectedCategory === category && styles.activeCategoryChip]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[styles.categoryChipText, selectedCategory === category && styles.activeCategoryChipText]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.questionsContainer}>
        <Text style={styles.resultsCount}>
          {filteredQuestions.length} {filteredQuestions.length === 1 ? "question" : "questions"} found
        </Text>
        {filteredQuestions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            onPress={() => {
              setSelectedQuestion(question.id)
              setModalVisible(true)
            }}
          />
        ))}
        {filteredQuestions.length === 0 && (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>No questions found matching your criteria</Text>
            <TouchableOpacity
              style={styles.resetButton}
              onPress={() => {
                setSearchQuery("")
                setSelectedCategory(null)
              }}
            >
              <Text style={styles.resetButtonText}>Reset Filters</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Question Details Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>

            {questionDetails && (
              <ScrollView style={styles.modalScrollView}>
                <View
                  style={[styles.modalCategoryBadge, { backgroundColor: getCategoryColor(questionDetails.category) }]}
                >
                  <Text style={styles.modalCategoryText}>{questionDetails.category}</Text>
                </View>

                <Text style={styles.modalQuestionText}>{questionDetails.question}</Text>

                <Text style={styles.modalAnswerText}>{questionDetails.answer}</Text>

                {relatedQuestions.length > 0 && (
                  <View style={styles.relatedQuestionsContainer}>
                    <Text style={styles.relatedQuestionsTitle}>Related Questions</Text>
                    {relatedQuestions.map((question) => (
                      <TouchableOpacity
                        key={question.id}
                        style={styles.relatedQuestionItem}
                        onPress={() => {
                          setSelectedQuestion(question.id)
                        }}
                      >
                        <Text style={styles.relatedQuestionText}>{question.question}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  )
}

// Helper function to get category color
const getCategoryColor = (category: string) => {
  switch (category) {
    case "Pest Management":
      return "#F44336"
    case "Irrigation":
      return "#2196F3"
    case "Soil & Fertilization":
      return "#8BC34A"
    case "Planting & Harvesting":
      return "#FF9800"
    case "Disease Management":
      return "#9C27B0"
    default:
      return "#4CAF50"
  }
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
  categoriesContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  categoriesTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 10,
  },
  categoryChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: "#f0f0f0",
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  categoryChipText: {
    fontSize: 13,
    color: "#555",
  },
  activeCategoryChip: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  activeCategoryChipText: {
    color: "#fff",
    fontWeight: "500",
  },
  questionsContainer: {
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    height: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },
  modalHeader: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    alignItems: "flex-end",
  },
  closeButton: {
    padding: 5,
  },
  modalScrollView: {
    padding: 20,
  },
  modalCategoryBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 15,
  },
  modalCategoryText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  modalQuestionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    lineHeight: 28,
  },
  modalAnswerText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginBottom: 25,
  },
  relatedQuestionsContainer: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 20,
  },
  relatedQuestionsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  relatedQuestionItem: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  relatedQuestionText: {
    fontSize: 14,
    color: "#333",
  },
})

