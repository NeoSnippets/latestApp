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
        
        <Text style={{fontSize: 50, color: s.primary[300], fontFamily: 'Rubik-ExtraBold'} } >Hello !</Text>

        <Text style={[s.heading,{fontSize: 50} ]} >Whelcome</Text>
        <Link style={{ fontSize:20}} href='/explore'> Explor</Link>
        <Link style={{ fontSize:20}} href="/profile"> Profile</Link>
        <Link style={{ fontSize:20}} href="/sign-up"> SignUp</Link>

        
      
    </View>
  )
}

export default index