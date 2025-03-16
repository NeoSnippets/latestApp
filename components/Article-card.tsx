import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native"
import { router } from "expo-router"
import { Models } from "react-native-appwrite"

// Define the article type for TypeScript
type ArticleCardProps = {
  article: {
    id: string
    title: string
    coverImage: string
    date: string
    readTime: string
    description: string
    author: {
      name: string
      avatar: string
    }
    tags: string[]
  }
}
interface Props{
  item: Models.Document;
  onPress?: () => void;
}

const ArticleCard = ({ item, onPress }: Props) => {
  // Navigate to article details when card is pressed
  

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9} onPress={onPress}>
      {/* Article Image */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />

        {/* Tag overlay */}
        {item.type && item.type.length > 0 && (
          <View style={styles.tagContainer}>
            <Text style={styles.tagText}>{item.type[0]}</Text>
          </View>
        )}
      </View>

      {/* Article Content */}
      <View style={styles.contentContainer}>
        {/* Title */}
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {item.name}
        </Text>

        {/* Author info */}
        <View style={styles.authorContainer}>
          <Image source={{ uri: item.agents.avatar }} style={styles.authorAvatar} />
          <View>
            <Text style={styles.authorName}>{item.agents.name}</Text>
            <Text style={styles.dateText}>
              {item.date} • 
            </Text>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    position: "relative",
    height: 180,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  tagContainer: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "#4CAF50",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 50,
  },
  tagText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 12,
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  authorAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  authorName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#424242",
  },
  dateText: {
    fontSize: 12,
    color: "#757575",
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: "#616161",
  },
})

export default ArticleCard

