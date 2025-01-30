// styles.js
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // for Android shadow
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
   fontFamily: {
    rubik: "Rubik-Regular",
    rubikBold: "Rubik-Bold",
    rubikExtraBold: "Rubik-ExtraBold",
    rubikMedium: "Rubik-Medium",
    rubikSemiBold: "Rubik-SemiBold",
    rubikLight: "Rubik-Light",
  },
  
  //colors
    primary: {
      100: "#0061FF0A",
      200: "#0061FF1A",
      300: "#0061FF",
    },
    accent: {
      100: "#FBFBFD",
    },
    black: { 
      default: "#000000",
      100: "#8C8E98",
      200: "#666876",
      300: "#191D31",
    },
    danger: "#F75555",
  
});
