import { View, Text, Image,StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { s } from '../../styles'; // Import global styles
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import Search from '@/components/Search';
import { Card, FeacherCard } from '@/components/Card';
//import Card from '@/components/Card'




const index = () => {
  return (
      <SafeAreaView style ={styles.container}>
        <View style={{padding: 1 }}>
          <View style={{flexDirection: 'row', alignItems: 'center',
              justifyContent: 'space-between' }}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10}} >
                  <Image source={images.avatar2} style={styles.image} />
                
                <View style={{ flexDirection: 'column', alignItems: 'start',
              justifyContent: 'space-between', marginTop:10 }}>
                <Text style={{ fontFamily: 'Rubik-SemiBold', color: s.black[100], fontSize:12}}>
                  Good Morning
                </Text>
                <Text style={{ fontFamily: 'Rubik-SemiBold', color: s.black[300], fontSize:18}}>
                  Nayan
                </Text>
              </View>              
            </View>
            <Image source={icons.bell} style={{width: 20, height: 20,}}></Image>
            </View>

        </View>
          <Search/>

        <ScrollView>
          <View style={{marginTop:12}}>
            <View style={{ flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
              <Text style={{ fontFamily: 'Rubik-Bold', fontSize: 16}}>Feactured</Text>
              <TouchableOpacity>
                <Text style={{color: s.primary[300], fontFamily: 'Rubik-Bold', fontSize: 13}}> See All</Text>
              </TouchableOpacity>
            </View>            
          </View>
          <View>
            
            </View>
           
            <FeacherCard/>
           

                 
          

            <Card/>
            </ScrollView>
          
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Equivalent to bg-white
    height: '100%', // Equivalent to h-full
    padding: 15, 
    paddingBottom: 15, 

   
  },
  contain: {
    flex: 1,
     flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  image: {
    width: '45', // Fill the width of its container
    height: '45', // Fixed height for the image
    borderRadius: 9999
  },
  line:{
    flex: 1,
     justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      
  },
  border:{
    width: '100%',
    height: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 2, 
    borderColor: '#B9D4FA', 
    borderWidth: 0.3
  }
 
  
});

export default index;