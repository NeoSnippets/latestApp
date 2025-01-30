import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { s } from '../../styles'; // Import global styles
import { SafeAreaView } from 'react-native-safe-area-context';
//import ImageSourcePropType from 'react-native'
import icons from '@/constants/icons';
//import images from '@/constants/images';
import {settings} from '@/constants/data'
import {logout} from '@/lib/appwrite';
import {useGlobalContext} from "@/lib/global-provider";
import { useRouter } from 'expo-router';
import SettingsIteam from '@/components/SettingsIteam'



// interface SettingsIteamProps{
//   icon:ImageSourcePropType;
//   title: String;
//   onPress: () => void;
//   textStyle: any;

// }

const profile = () => {


//   const SettingsIteam = ({ icon, title, onPress, textStyle, showArrow = true}: SettingsItemProps)=>{
//     return(
//       <TouchableOpacity onPress={onPress} style={styles.contain}>
//           <View style={{flex:1, flexDirection:'row', alignItems:'center', gap:12}}>
//             <Image source={icon} style={styles.image}></Image>
//             {textStyle? <Text style={{ fontFamily:'Rubik-Medium', fontSize:16, color: s.danger}}  >{title}</Text>
//             : <Text style={[{fontFamily:'Rubik-Medium', fontSize:16,color: s.black[300]}]}  >{title}</Text>
// }
//           </View>
//           {showArrow && <Image source={icons.rightArrow} style={{width: 10, height:20,}} />}
//       </TouchableOpacity>
//   )
// }

  const router = useRouter(); // Use router for navigation

  const {user, refetch}= useGlobalContext();
  const handleLogout = async() =>{
    console.log("Presss LogOut button ")
    const result =await logout();

    if(result){
      console.log("Logout Succesfull");
      refetch(); // revalidet current login user then vw naviget on signin page
      router.push('../sign-up')
    } else {
      console.log("Logout Error");
    }
    
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{padding:26 , gap:7}}>
              <View style={styles.contain}>
                <Text style={{fontFamily: 'Rubik-Bold', fontSize: 16}}>Profile</Text>

                <Image source={icons.bell} style={{width: 20, height: 20,}}></Image>

                </View>
                <View style={{flexDirection:'row', justifyContent:'center', flex:1,marginTop: 20,position:'relative'}}>

                  <View style={{flexDirection:'column', alignItems:'center', flex:1, marginTop: 20, position:'relative'}}>

                        <Image source={{uri: user?.avatar}} style={{width:125, height:125  ,borderRadius: 9999}}></Image>
                        <TouchableOpacity style={{position:'absolute', bottom:48, right:81}}>
                          <Image source={icons.edit} style={{width:25, height:25}}/>
                        </TouchableOpacity>
                        
                        <Text style={{fontFamily: 'Rubik-Bold', fontSize: 20,textAlign: 'center',}}>{ user?.name}</Text>
                  </View>
                </View>
                <View style={{flex: 1, flexDirection: 'column', marginTop: 20,gap:20}}>
                    < SettingsIteam icon={icons.calendar} title="My Booking"  />
                    < SettingsIteam icon={icons.wallet} title="Payment"  />

                </View>
                {/*divider */}
                <View style={{paddingTop: 14,}}><View style={styles.line}><View style={styles.border}/></View></View>

                <View style={{flex: 1, flexDirection: 'column', marginTop: 20,gap:20, borderRadius: 9999, borderColor: s.primary[200]}}>
                    {settings.slice(2).map((item, index)=>(
                      < SettingsIteam key={index}{...item}/>
                    ))}
                </View>
                <View style={{paddingBottom:10}}></View>
                
                <View style={{flex: 1, flexDirection: 'column', marginTop: 20,gap:20}}>
                 < SettingsIteam icon={icons.logout} title="Logout" textStyle='hello' onPress={handleLogout} showArrow={false} />
                </View>
                <View style={{flex: 1, flexDirection: 'column', marginTop: 20,paddingBottom: 50,}}>
                 
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
    paddingBottom: 15, 
   
  },
  contain: {
    flex: 1,
     flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  image: {
    width: '30', // Fill the width of its container
    height: '30', // Fixed height for the image
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


export default profile