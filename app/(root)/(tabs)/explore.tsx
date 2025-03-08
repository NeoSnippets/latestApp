import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import icons from "@/constants/icons";
import Search from "@/components/Search";
import { Card } from "@/components/Card";
import Filters from "@/components/Filter";
import NoResults from "@/components/NoResult";

import { getProperties } from "@/lib/appwrite";
import { useAppwrite } from "@/lib/useAppwrite";

const Explore = () => {
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const {
    data: properties,
    refetch,
    loading,
  } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
    },
    skip: true,
  });

  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
    });
  }, [params.filter, params.query]);

  const handleCardPress = (id: string) => router.push(`/property/${id}`);

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={properties}
        numColumns={2}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handleCardPress(item.$id)} />
        )}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator size="large" color="#3b82f6" style={styles.loader} />
          ) : (
            <NoResults />
          )
        }
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => router.back()}
                style={styles.backButton}
              >
                <Image source={icons.backArrow} style={styles.backArrow} />
              </TouchableOpacity>

              <Text style={styles.headerTitle}>Search for Your Ideal Home</Text>
              <Image source={icons.bell} style={styles.bellIcon} />
            </View>

            <Search />

            <View style={styles.filtersContainer}>
              <Filters />

              <Text style={styles.resultsText}>
                Found {properties?.length} Properties
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    paddingBottom: 32,
  },
  columnWrapper: {
    flexDirection: "row",
    gap: 15, // This adds space between columns
    paddingHorizontal: 20,
  },
  loader: {
    marginTop: 20,
  },
  headerContainer: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  backButton: {
    flexDirection: "row",
    backgroundColor: "#3b82f6", // Primary color (assumed)
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  backArrow: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: "Rubik-Medium",
    color: "#4b5563", // Color for text-black-300
    textAlign: "center",
    marginRight: 10,
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
  filtersContainer: {
    marginTop: 20,
  },
  resultsText: {
    fontSize: 20,
    fontFamily: "Rubik-Bold",
    color: "#4b5563", // Color for text-black-300
    marginTop: 20,
  },
});

export default Explore;
