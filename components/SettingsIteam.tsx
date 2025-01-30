import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { s } from '@/app/styles'; // Import global styles
import { SafeAreaView } from 'react-native-safe-area-context';
import {ImageSourcePropType} from 'react-native'
import icons from '@/constants/icons';
//import images from '@/constants/images';

interface SettingsIteamProps {
    icon: ImageSourcePropType;
    title: String;
    onPress?: () => void;
    textStyle: any;
  
  }
const SettingsIteam = ({ icon, title, onPress, textStyle, showArrow = true}: SettingsIteamProps)=>{

  
    return(
          <TouchableOpacity onPress={onPress} style={styles.container}>
              <View style={styles.contain}>
                <Image source={icon} style={styles.image}></Image>
                {textStyle? <Text style={styles.text}  >{title}</Text>
                : <Text style={styles.textDanger}  >{title}</Text>
              }
              </View>
              {showArrow && <Image source={icons.rightArrow} style={{width: 10, height:20,}} />}
          </TouchableOpacity>
      )

  
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
     flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  contain:{
    flex:1,
    flexDirection:'row', 
    alignItems:'center', 
    gap:12
  },
  text:{
    fontFamily:'Rubik-Medium', 
    fontSize:16, 
    color: s.danger
  },
  textDnager:{
    fontFamily:'Rubik-Medium', 
    fontSize:16,
    color: s.black[300]},
  image: {
    width: 30, // Fill the width of its container
    height: 30, // Fixed height for the image
  },
 
 
 
  
});

export default SettingsIteam;