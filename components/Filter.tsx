import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { s } from '@/app/styles'; // Import global styles

import { categories } from "@/constants/data";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );

  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("All");
      router.setParams({ filter: "All" });
      return;
    }

    setSelectedCategory(category);
    router.setParams({ filter: category });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          onPress={() => handleCategoryPress(item.category)}
          key={index}
          style={[
            styles.button,
            selectedCategory === item.category
              ? styles.selectedButton
              : styles.unselectedButton,
          ]}
        >
          <Text
            style={[
              styles.text,
              selectedCategory === item.category
                ? styles.selectedText
                : styles.unselectedText,
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 12, // mt-3
    marginBottom: 8, // mb-2
  },
  button: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: 16, // mr-4
    paddingHorizontal: 16, // px-4
    paddingVertical: 8, // py-2
    borderRadius: 9999, // rounded-full
  },
  selectedButton: {
    backgroundColor: s.primary[300], // bg-primary-300
  },
  unselectedButton: {
    backgroundColor: s.primary[100], // bg-primary-100
    borderWidth: 1,
    borderColor: s.primary[200], // border-primary-200
  },
  text: {
    fontSize: 14, // text-sm
  },
  selectedText: {
    color: "white", // text-white
    fontFamily: "Rubik-Bold", // Assuming Rubik-Bold is available
    marginTop: 2, // mt-0.5
  },
  unselectedText: {
    color: s.black[300], // text-black-300
    fontFamily: "Rubik", // Assuming Rubik is available
  },
});

export default Filters;
