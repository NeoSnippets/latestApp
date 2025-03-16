import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import type { FarmingQuestion } from "../lib/farm-data"

interface QuestionCardProps {
  question: FarmingQuestion
  onPress: () => void
}

export default function QuestionCard({ question, onPress }: QuestionCardProps) {
  // Get category color
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

  // Get first 100 characters of answer for preview
  const answerPreview = question.answer.length > 100 ? question.answer.substring(0, 100) + "..." : question.answer

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(question.category) }]}>
          <Text style={styles.categoryText}>{question.category}</Text>
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Ionicons name="chatbubble-ellipses" size={18} color="#4CAF50" style={styles.questionIcon} />
        <Text style={styles.questionText}>{question.question}</Text>
      </View>

      <Text style={styles.answerPreview}>{answerPreview}</Text>

      <View style={styles.footer}>
        <Text style={styles.readMoreText}>Read full answer</Text>
        <Ionicons name="chevron-forward" size={16} color="#4CAF50" />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 12,
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  questionIcon: {
    marginRight: 8,
    marginTop: 2,
  },
  questionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    lineHeight: 22,
  },
  answerPreview: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  readMoreText: {
    fontSize: 14,
    color: "#4CAF50",
    fontWeight: "500",
    marginRight: 4,
  },
})

