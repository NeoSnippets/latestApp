import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { s } from '../../styles'; // Import global styles
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
import images from '@/constants/images';

const profile = () => {

  const handleLogout = async() =>{
    console.log("Presss LogOut button ")
    
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{padding:32 , gap:7}}>
              <View style={styles.contain}>
                <Text style={{fontFamily: 'Rubik-Bold', fontSize: 16}}>Profile</Text>

                <Image source={icons.bell} style={{width: 20, height: 20,}}></Image>

                </View>
                <View style={{flexDirection:'row', justifyContent:'center', flex:1,marginTop: 20,position:'relative'}}>
                  <View style={{flexDirection:'column', alignItems:'center', flex:1, marginTop: 20, position:'relative'}}>
                    <Image source={images.avatar} style={{width:125, height:125  ,borderRadius: 9999}}></Image>
                    <TouchableOpacity style={{position:'absolute', bottom:48, right:102}}>
                      <Image source={icons.edit} style={{width:25, height:25}}/>
                    </TouchableOpacity>
                    
                    <Text style={{fontFamily: 'Rubik-Bold', fontSize: 20}}>Nayan Kawalkar </Text>
                  </View>
                </View>
            </ScrollView>
           
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Equivalent to bg-white
    height: '100%', // Equivalent to h-full
   
  },
  contain: {
    flex: 1,
     flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  image: {
    width: '100%', // Fill the width of its container
    height: 480, // Fixed height for the image
  },
  welcomeText: {
    color: s.black[200],
    fontFamily: "Rubik-Regular",
    textTransform: 'uppercase',
  },
  heading: {
    color: s.black[300],
    fontFamily: "Rubik-Bold",
    fontSize: 28,
    textAlign: 'center',
  },
  highlightedText: {
    color: s.primary[300],
  },
  loginPrompt: {
    color: s.black[200],
    fontFamily: "Rubik-SemiBold",
  },
  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#666876', // Approximation of zinc-300
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.0,
    shadowRadius: 10,
    elevation: 4, // Required for shadows on Android
    borderRadius: 9999, // Full border radius
    width: '96%',
    height: 50,
    paddingVertical: 16,
    marginTop: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  googleIcon: {
    width: 31,
    height: 32,
  },
  buttonText: {
    color: s.black[200],
    fontFamily: "Rubik-Medium",
    fontSize: 16,
    textAlign: 'center',
  },
});


export default profile