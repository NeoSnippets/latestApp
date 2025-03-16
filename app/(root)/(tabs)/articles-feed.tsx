
import { View, Text, Image,StyleSheet, ScrollView, TouchableOpacity, FlatList, Button, ActivityIndicator, Platform } from 'react-native'

import React, { useEffect } from 'react'
import { Link, Stack, useLocalSearchParams } from 'expo-router'
import { s } from '../../styles'; // Import global styles
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';

import Search from '@/components/Search';
import { Card, FeacherCard } from '@/components/Card';
import FilterArticle from '@/components/Filter';
import { useGlobalContext } from '@/lib/global-provider';
import seed from '@/lib/seed';
import { getLatestArticle, getArticle } from '@/lib/appwrite';
import { useAppwrite } from '@/lib/useAppwrite';
import NoResults from '@/components/NoResult';
//import Card from '@/components/Card'
import Comment from '@/components/Comment';
import { useRouter } from "expo-router"
import AnimatedProfile from "@/components/AnimatedProfile";
import { useState } from "react"

import { router } from "expo-router"
import ArticleCard from "@/components/Article-card"
import icons from "@/constants/icons"

const ArticlesFeed = () => {
  

  //fecth from database
  const router = useRouter()

  const {user}= useGlobalContext();
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const { data: latestArticles, loading: latestArticlesLoading } =
    useAppwrite({
      fn: getLatestArticle,
    });

  const {
    data: articles,
    refetch,
    loading,
  } = useAppwrite({
    fn: getArticle,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    },
    skip: true,
  });

  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    });
  }, [params.filter, params.query]);
  
  const handleCardPress = (id: string) => router.push(`/article/${id}`);
  

  // Sample categories for the tabs

  // Sample articles data
 

  // Filter articles based on active tab


  return (
    <View style={styles.container}>
      <FlatList
          data={articles}
          renderItem={({item}) => <ArticleCard item={item} onPress={()=> handleCardPress(item.$id)} />}
          keyExtractor={(item) => item.toString()}
          numColumns={2}
          contentContainerStyle={{paddingBottom: 0,}}
          columnWrapperStyle={{justifyContent: 'space-between', gap: 20,}}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            loading ? (
              <ActivityIndicator size="large" color="#3b82f6" style={{marginTop: 20}} />
            ) : (
              <NoResults />
            )
          }
          ListHeaderComponent={
      
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Farming Articles</Text>
          <TouchableOpacity style={styles.profileButton}>
            <Image source={{ uri: "/placeholder.svg?height=100&width=100" }} style={styles.profileImage} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
            <Search />
            <FilterArticle />
      </View>
          
     
      
          } />
          
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "white",
    paddingTop: Platform.OS === "ios" ? 50 : 40,
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212121",
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 50,
    paddingHorizontal: 15,
    height: 45,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: "#9E9E9E",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#212121",
  },
  categoriesContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "white",
  },
  categoryTab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 50,
    marginRight: 10,
    backgroundColor: "#F5F5F5",
  },
  activeTab: {
    backgroundColor: "#4CAF50",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#616161",
  },
  activeCategoryText: {
    color: "white",
    fontWeight: "bold",
  },
  articlesContainer: {
    padding: 16,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  fabIcon: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
})

export default ArticlesFeed

