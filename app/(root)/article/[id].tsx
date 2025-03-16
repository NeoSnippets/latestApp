import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
  StyleSheet,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import icons from "@/constants/icons";
import images from "@/constants/images";
import { technologies } from "@/constants/data";

import { useAppwrite } from "@/lib/useAppwrite";
import { getArticleById } from "@/lib/appwrite";
  
const FarmingArticle = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const windowHeight = Dimensions.get("window").height;
  
  // Fetching article data from Appwrite database
  const { data: article, loading, error } = useAppwrite({
    fn: getArticleById,
    params: {
      id: id!,
    },
  });

  // Loading state
  if (loading || !article) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Error state
  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Error loading article: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        style={{ marginBottom: 50 }}
      >
        {/* Cover Image section */}
        <View style={[styles.imageContainer, { height: windowHeight / 2 }]}>
          <Image source={{ uri: article.image }} style={styles.fullSizeImage} resizeMode="cover" />
          <View style={[styles.headerContainer, { top: Platform.OS === "android" ? 70 : 20 }]}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Image source={icons.backArrow} style={styles.backArrow} />
              </TouchableOpacity>
              <View style={styles.headerIcons}>
                <TouchableOpacity style={styles.shareButton}>
                  <Image source={icons.send} style={styles.iconSize} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bookmarkButton}>
                  <Image source={icons.heart} style={styles.iconSize} tintColor="#4CAF50" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Article details */}
        <View style={styles.articleDetails}>
          {/* Tags */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagsContainer}>
            {article.type && article.type.map((tag, index) => (
              <View key={index} style={styles.tagItem}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Title and meta */}
          <Text style={styles.articleTitle}>{article.name}</Text>
          <View style={styles.articleMeta}>
            <Text style={styles.dateText}>
              {article.date || "No date provided"}
            </Text>
          </View>

          {/* Author Information */}
          {article.agents && (
            <View style={styles.authorSection}>
              <View style={styles.authorInfo}>
                <View style={styles.authorInfoLeft}>
                  <Image 
                    source={{ uri: article.agents.avatar }} 
                    style={styles.authorAvatar} 
                    defaultSource={require("@/assets/placeholder.png")} // Make sure you have a placeholder image
                  />
                  <View style={styles.authorDetails}>
                    <Text style={styles.authorName}>{article.agents.name}</Text>
                    <Text style={styles.authorEmail}>{article.agents.email}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.followButton}>
                  <Text style={styles.followButtonText}>Follow</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Introduction */}
          <View style={styles.contentSection}>
            <Text style={styles.description}>{article.description}</Text>
          </View>

          {/* Farm Stats */}
          <ScrollView horizontal>
            <View style={styles.farmStats}>
              <View style={styles.statItem}>
                <View style={styles.statIconContainer}>
                  <Image source={icons.area} style={styles.iconSize} />
                </View>
                <Text style={styles.statText}>{article.Farm_size || "N/A"}</Text>
                <Text style={styles.statLabel}>Farm Size</Text>
              </View>
              <View style={styles.statItem}>
                <View style={styles.statIconContainer}>
                  <Image source={icons.bed} style={styles.iconSize} />
                </View>
                <Text style={styles.statText}>{article.crop_yield || "N/A"}</Text>
                <Text style={styles.statLabel}>Crop Yield</Text>
              </View>
              <View style={styles.statItem}>
                <View style={styles.statIconContainer}>
                  <Image source={icons.bath} style={styles.iconSize} />
                </View>
                <Text style={styles.statText}>{article.organic || "N/A"}</Text>
                <Text style={styles.statLabel}>Organic</Text>
              </View>
            </View>
          </ScrollView>

          {/* Content Sections */}
          {article.title.map((section, index) => (
            <View>
            {article?.text.map((section2, index) => (
            <View key={index} style={styles.contentSection}>
              <Text style={styles.sectionTitle}>{section}</Text>
              <Text style={styles.sectionText}>{section2}</Text>
            </View>
             ))}
             </View>
          ))}

          {/* Farming Technologies */}
          <View style={styles.technologiesSection}>
            <Text style={styles.sectionTitle}>Technology in Farming</Text>
            <View style={styles.technologiesList}>
              {article.technologies && article.technologies.length > 0 && 
                article.technologies.map((item, index) => {
                  const technology = technologies.find(
                    (tech) => tech.title === item
                  );
                  return (
                    <View key={index} style={styles.technologyItem}>
                      <View style={styles.technologyIconContainer}>
                        <Image
                          source={technology ? technology.icon : icons.info}
                          style={styles.technologyIcon}
                        />
                      </View>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.technologyText}
                      >
                        {item}
                      </Text>
                    </View>
                  );
                })
              }
            </View>
          </View>

          {/* Gallery */}
          <View style={styles.gallerySection}>
            <Text style={styles.sectionTitle}>Farm Gallery</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {article.gallery && article.gallery.map((imageUrl, index) => (
                <Image 
                  key={index} 
                  source={{ uri: imageUrl }} 
                  style={styles.galleryImage} 
                  defaultSource={require("@/assets/placeholder.png")} // Make sure you have a placeholder image
                />
              ))}
            </ScrollView>
          </View>

          {/* Location */}
          <View style={styles.locationSection}>
            <Text style={styles.sectionTitle}>Farm Location</Text>
            <View style={styles.locationInfo}>
              <Image source={icons.location} style={styles.locationIcon} />
              <Text style={styles.locationText}>{article.location || "Location not specified"}</Text>
            </View>
            <Image source={images.map} style={styles.mapImage} />
          </View>

          {/* Conclusion */}
          <View style={styles.contentSection}>
            <Text style={styles.sectionTitle}>Conclusion</Text>
            <Text style={styles.sectionText}>
              {article.conclusion || 
                "Farming is a rewarding journey that requires persistence and smart decision-making. By sharing my experience, I hope to inspire others to embrace agriculture with confidence and innovation. Happy farming!"}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Share Section */}
      <View style={styles.shareSection}>
        <View style={styles.shareSectionContent}>
          <TouchableOpacity style={styles.commentButton}>
            <Image source={icons.chat} style={styles.iconSize} />
            <Text style={styles.commentButtonText}>Comments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareArticleButton}>
            <Text style={styles.shareButtonText}>Share Article</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  scrollViewContent: {
    paddingBottom: 32,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
  },
  fullSizeImage: {
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    position: "absolute",
    left: 7,
    right: 7,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    flexDirection: "row",
    backgroundColor: "#4CAF50",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  backArrow: {
    width: 20,
    height: 20,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  shareButton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bookmarkButton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconSize: {
    width: 20,
    height: 20,
  },
  articleDetails: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  tagsContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  tagItem: {
    backgroundColor: "#E8F5E9",
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  tagText: {
    color: "#4CAF50",
    fontSize: 12,
    fontWeight: "bold",
  },
  articleTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212121",
  },
  articleMeta: {
    marginTop: 8,
  },
  dateText: {
    fontSize: 14,
    color: "#757575",
  },
  authorSection: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingTop: 20,
  },
  authorInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  authorInfoLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  authorDetails: {
    marginLeft: 15,
  },
  authorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212121",
  },
  authorEmail: {
    fontSize: 14,
    color: "#757575",
  },
  followButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  followButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  contentSection: {
    marginTop: 25,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#424242",
  },
  farmStats: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
  },
  statItem: {
    alignItems: "center",
    backgroundColor: "#E8F5E9",
    borderRadius: 12,
    padding: 15,
    marginRight: 15,
    width: 120,
  },
  statIconContainer: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
    marginBottom: 8,
  },
  statText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
    marginTop: 5,
  },
  statLabel: {
    fontSize: 14,
    color: "#757575",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#424242",
  },
  technologiesSection: {
    marginTop: 25,
  },
  technologiesList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  technologyItem: {
    width: "30%",
    alignItems: "center",
    marginBottom: 20,
  },
  technologyIconContainer: {
    backgroundColor: "#E8F5E9",
    borderRadius: 50,
    padding: 12,
    marginBottom: 8,
  },
  technologyIcon: {
    width: 24,
    height: 24,
    tintColor: "#4CAF50",
  },
  technologyText: {
    fontSize: 12,
    color: "#424242",
    textAlign: "center",
  },
  gallerySection: {
    marginTop: 25,
  },
  galleryList: {
    gap: 10,
  },
  galleryImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  locationSection: {
    marginTop: 25,
  },
  locationInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  locationIcon: {
    width: 24,
    height: 24,
    tintColor: "#4CAF50",
  },
  locationText: {
    fontSize: 16,
    color: "#424242",
    marginLeft: 10,
  },
  mapImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  shareSection: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  shareSectionContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  commentButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  commentButtonText: {
    marginLeft: 8,
    color: "#4CAF50",
    fontWeight: "bold",
  },
  shareArticleButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  shareButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default FarmingArticle;