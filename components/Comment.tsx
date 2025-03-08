import { View, Text, Image, StyleSheet } from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { Models } from "react-native-appwrite";

interface Props {
  item: Models.Document;
}

const Comment = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: item.avatar }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{item.name}</Text>
      </View>

      <Text style={styles.review}>{item.review}</Text>

      <View style={styles.footer}>
        <View style={styles.likes}>
          <Image
            source={icons.heart}
            style={styles.heartIcon}
            tintColor={"#0061FF"}
          />
          <Text style={styles.likesCount}>120</Text>
        </View>
        <Text style={styles.date}>{new Date(item.$createdAt).toDateString()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  name: {
    fontSize: 16,
    color: "#1F2937", // Text color (black-300)
    fontFamily: "Rubik-Bold",
    marginLeft: 10,
  },
  review: {
    fontSize: 14,
    color: "#6B7280", // Text color (black-200)
    fontFamily: "Rubik",
    marginTop: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 16,
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
  },
  heartIcon: {
    width: 16,
    height: 16,
  },
  likesCount: {
    fontSize: 12,
    color: "#4B5563", // Text color (black-300)
    fontFamily: "Rubik-Medium",
    marginLeft: 6,
  },
  date: {
    fontSize: 12,
    color: "#D1D5DB", // Text color (black-100)
    fontFamily: "Rubik",
  },
});

export default Comment;
