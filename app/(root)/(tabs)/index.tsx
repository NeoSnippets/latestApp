import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const index = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap:2

      }}>
        

        <Text style={{fontSize: 40, fontWeight:'bold' }} >Whelcome</Text>
        <Link style={{ fontSize:20}} href='/explore'> Explore</Link>
        <Link style={{ fontSize:20}} href="/profile"> Profile</Link>
        <Link style={{ fontSize:20}} href="/sign-up"> SignUp</Link>

        
      
    </View>
  )
}

export default index