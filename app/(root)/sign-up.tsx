import images from '@/constants/images';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { s } from '../styles'; // Import global styles

const App = () => {

  const handleLogin =() => {}; // it handle subbmition

  return (
    <SafeAreaView style={styles.container}>
     <ScrollView style={{height: '100%', }}>
            <Image source={images.onboarding } style={styles.image}/>
            
            <View style= {styles.contain}>
              <Text style={{color: s.black[200], fontFamily: "Rubik-Regular" , textTransform: 'uppercase'}}>Welcome To Restate</Text>

              <View style= {[styles.contain,{gap:-10}]}>

              <Text style={{color: s.black[300], fontFamily: "Rubik-Bold" ,  fontSize: 28, textAlign: 'center',}}>Lets's Get You Closer to  
                
                <Text style={{color: s.primary[300]}}> Your Ideal Home </Text> 
                
                </Text>         
              
              </View>
              <Text style={{color: s.black[200], fontFamily: "Rubik-SemiBold" ,}}>Login to ReState with Google</Text>
            </View>

              <TouchableOpacity onPress={handleLogin}>  {/* after subbmition call function*/}

              </TouchableOpacity>
     </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',  // equivalent to bg-white
    height: '100%', 
    justifyContent: 'center',
               // equivalent to h-full
    
  },
  contain: {
    flex: 1,                   // Full screen height
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
   
  },
  image: {
    width: '100%',             // Fill the width of its container
    height: '570',   
  },
});

export default App;
