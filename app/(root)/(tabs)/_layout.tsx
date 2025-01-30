import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { StyleSheet } from 'react-native';
import icons from "@/constants/icons";
import {s} from '../../styles'

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
}) => (
  <View style={styles.container}>
    <Image
      source={icon}
      tintColor={focused ? "#0061FF" : "#666876"}
      resizeMode="contain"
      style={{width:20, height:20}}
    />
    <Text
      style={[
        styles.textcontainer,
        focused ? styles.focused : styles.notFocused,
      ]}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Explore" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};


const styles = StyleSheet.create({
  container: {
     // equivalent to "flex-1"
    marginTop: 12, // equivalent to "mt-3" (12px for marginTop)
    flexDirection: 'column', // equivalent to "flex-col"
    alignItems: 'center', // equivalent to "items-center"
  },
  textcontainer: {
    fontSize: 12, // equivalent to text-xs (12px)
    width: '100%', // equivalent to w-full
    textAlign: 'center', // equivalent to text-center
    marginTop: 4, // equivalent to mt-1 (4px)
  },
  focused: {
    color:  s.primary[300], // equivalent to text-primary-300 (replace with your actual color)
    fontFamily: 'Rubik-Medium', // equivalent to font-rubik-medium
  },
  notFocused: {
    color:  s.black[200], // equivalent to text-black-200 (replace with your actual color)
    fontFamily: 'Rubik', // equivalent to font-rubik
  },
});

export default TabsLayout;