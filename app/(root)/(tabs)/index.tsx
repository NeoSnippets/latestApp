import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { s } from '../../styles'; // Import global styles


const index = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap:2

      }}>
        
        <Text style={{fontSize: 40, color: s.primary[300], fontFamily: 'Rubik-ExtraBold',  textAlign: 'center'} } >Hello !, My Name is Nayan </Text>

        <Text style={[s.heading,{fontSize: 30,textAlign: 'center'} ]} >Whelcome To My Android App</Text>
      
        <Link style={{ fontSize:20, fontFamily: 'Rubik-SemiBold' , color: s.danger}} href="/sign-up"> SignUp</Link>

        
      
    </View>
  )
}

export default index