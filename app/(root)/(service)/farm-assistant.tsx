"use client"

import { useState, useRef, useEffect } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

// Mock function for voice recognition since we can't use actual voice recognition in this environment
const mockStartVoiceRecognition = () => {
  return new Promise((resolve) => {
    // Simulate voice recognition delay
    setTimeout(() => {
      // Return a mock transcription
      resolve("How do I deal with aphids on my tomato plants?")
    }, 2000)
  })
}

export default function FarmAssistantScreen() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your farming assistant. How can I help you today?",
      sender: "assistant",
    },
  ])
  const [inputText, setInputText] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const scrollViewRef = useRef()

  useEffect(() => {
    // Scroll to bottom when messages change
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true })
    }
  }, [messages])

  const handleSend = async () => {
    if (inputText.trim() === "") return

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: "user",
    }

    setMessages((prevMessages) => [...prevMessages, userMessage])
    setInputText("")
    setIsLoading(true)

    try {
      // In a real app, this would use the AI SDK to get a response
      const response = await mockGenerateResponse(inputText)

      const assistantMessage = {
        id: messages.length + 2,
        text: response,
        sender: "assistant",
      }

      setMessages((prevMessages) => [...prevMessages, assistantMessage])
    } catch (error) {
      console.error("Error generating response:", error)

      const errorMessage = {
        id: messages.length + 2,
        text: "Sorry, I couldn't process your request. Please try again.",
        sender: "assistant",
      }

      setMessages((prevMessages) => [...prevMessages, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleVoiceInput = async () => {
    setIsRecording(true)

    try {
      // In a real app, this would use actual voice recognition
      const transcription = await mockStartVoiceRecognition()
      setInputText(transcription)
    } catch (error) {
      console.error("Voice recognition error:", error)
    } finally {
      setIsRecording(false)
    }
  }

  // Replace the mockGenerateResponse function with this enhanced version
  const mockGenerateResponse = async (prompt) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Import the generateResponse function from our farm-data.ts
    const { generateResponse, searchQuestions } = require("@/lib/farm-data")

    // Use our enhanced response generator
    return generateResponse(prompt)
  }

  // Add this function after the mockGenerateResponse function
  const getSuggestedQuestions = () => {
    // In a real app, these would be personalized based on user history or context
    return [
      "How do I deal with tomato hornworms?",
      "What's causing my cucumber leaves to turn yellow?",
      "How do I improve my soil quality?",
      "When is the best time to plant tomatoes?",
      "How do I start a compost pile?",
    ]
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Farm Assistant</Text>
          <Text style={styles.headerSubtitle}>Ask me anything about farming</Text>
        </View>

        <View style={styles.suggestedQuestions}>
          <Text style={styles.suggestedTitle}>Common Questions</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {getSuggestedQuestions().map((question, index) => (
              <TouchableOpacity key={index} style={styles.questionChip} onPress={() => setInputText(question)}>
                <Text style={styles.questionChipText}>{question}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <ScrollView ref={scrollViewRef} style={styles.messagesContainer} contentContainerStyle={styles.messagesContent}>
          {messages.map((message) => (
            <View
              key={message.id}
              style={[styles.messageBubble, message.sender === "user" ? styles.userMessage : styles.assistantMessage]}
            >
              <Text style={styles.messageText}>{message.text}</Text>
            </View>
          ))}

          {isLoading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#4CAF50" />
              <Text style={styles.loadingText}>Thinking...</Text>
            </View>
          )}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type your farming question..."
            multiline
          />

          <TouchableOpacity
            style={[styles.iconButton, isRecording && styles.recordingButton]}
            onPress={handleVoiceInput}
            disabled={isLoading}
          >
            {isRecording ? (
              <Ionicons name="mic-off" size={20} color="#fff" />
            ) : (
              <Ionicons name="mic" size={20} color="#fff" />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.iconButton, !inputText && styles.disabledButton]}
            onPress={handleSend}
            disabled={!inputText || isLoading}
          >
            <Ionicons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
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
  messagesContainer: {
    flex: 1,
    padding: 15,
  },
  messagesContent: {
    paddingBottom: 10,
  },
  messageBubble: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 18,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#E8F5E9",
    borderBottomRightRadius: 5,
  },
  assistantMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderBottomLeftRadius: 5,
  },
  messageText: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 18,
    marginBottom: 10,
  },
  loadingText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#666",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxHeight: 100,
    fontSize: 15,
  },
  iconButton: {
    backgroundColor: "#4CAF50",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  recordingButton: {
    backgroundColor: "#F44336",
  },
  disabledButton: {
    backgroundColor: "#A5D6A7",
  },
  suggestedQuestions: {
    backgroundColor: "#fff",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  suggestedTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 10,
  },
  questionChip: {
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 5,
  },
  questionChipText: {
    color: "#4CAF50",
    fontSize: 12,
  },
})

