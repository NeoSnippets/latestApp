import { View, Text, Image,StyleSheet, ScrollView, TouchableOpacity, FlatList, Button, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { Link, router, Stack, useLocalSearchParams } from 'expo-router'
import { s } from '../../styles'; // Import global styles
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import Search from '@/components/Search';
import { Card, FeacherCard } from '@/components/Card';
import Filter from '@/components/Filter';
import { useGlobalContext } from '@/lib/global-provider';
import seed from '@/lib/seed';
import { getLatestProperties, getProperties } from '@/lib/appwrite';
import { useAppwrite } from '@/lib/useAppwrite';
import NoResults from '@/components/NoResult';
//import Card from '@/components/Card'
import Comment from '@/components/Comment';
import { useRouter } from "expo-router"
import AnimatedProfile from "@/components/AnimatedProfile";




const index = () => {
  const router = useRouter()

  const {user}= useGlobalContext();
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const { data: latestProperties, loading: latestPropertiesLoading } =
    useAppwrite({
      fn: getLatestProperties,
    });

  const {
    data: properties,
    refetch,
    loading,
  } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    },
    skip: true,
  });

  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    });
  }, [params.filter, params.query]);
  
  const handleCardPress = (id: string) => router.push(`/property/${id}`);
  const handleAiPress =  () => {
    
    
  };

  return (
      <SafeAreaView style ={styles.container}>

        <FlatList
          data={properties}
          renderItem={({item}) => <Card item={item} onPress={()=> handleCardPress(item.$id)} />}
          keyExtractor={(item) => item.toString()}
          numColumns={2}
          contentContainerStyle={{paddingBottom: 0,}}
          columnWrapperStyle={{justifyContent: 'space-between', gap: 20,}}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            loading ? (
              <ActivityIndicator size="large" color="#3b82f6" style={{marginTop: 20}} />
            ) : (
              <NoResults />
            )
          }
          ListHeaderComponent={<><View style={{ padding: 1 }}>
            <View style={{
              flexDirection: 'row', alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Image source={{uri: user?.avatar}} style={styles.image} />

                <View style={{
                  flexDirection: 'column', alignItems: 'start',
                  justifyContent: 'space-between', marginTop: 10
                }}>
                  <Text style={{ fontFamily: 'Rubik-SemiBold', color: s.black[100], fontSize: 12 }}>
                    Good Morning
                  </Text>
                  <Text style={{ fontFamily: 'Rubik-SemiBold', color: s.black[300], fontSize: 18 }}>
                    {user?.name}
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} style={{ width: 20, height: 20, }}></Image>
              <TouchableOpacity onPress={() => router.push("../home")}>
              <View>
                  <Image source={images.aiImage} style={{ width: 50, height: 50, }}></Image>
                  <Text style={{alignItems:'center', position: 'absolute', top: 6, right: 8,fontFamily: 'Rubik-SemiBold',fontSize: 25, color:'#000000'}}>AI </Text>
              </View>
              </TouchableOpacity>
            </View>
            

          </View><ScrollView>
              <Search />

              <View style={{ marginTop: 12 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ fontFamily: 'Rubik-Bold', fontSize: 16 }}>Feactured</Text>
                  <TouchableOpacity>
                    <Text style={{ color: s.primary[300], fontFamily: 'Rubik-Bold', fontSize: 13 }}> See All</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {latestPropertiesLoading ? (
                <ActivityIndicator size="large" color='#3b82f6' />
              ) : !latestProperties || latestProperties.length === 0 ? (
                <NoResults />
              ) : (
               <FlatList
                    data={latestProperties}
                    renderItem={({item}) => <FeacherCard item={item} onPress={()=> handleCardPress(item.$id)} />}
                    keyExtractor={(item) => item.toString()}
                    horizontal
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    
                   />

                   )}

              


              <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ fontFamily: 'Rubik-Bold', fontSize: 16 }}>Our Recomondetion</Text>
                  <TouchableOpacity>
                    <Text style={{ color: s.primary[300], fontFamily: 'Rubik-Bold', fontSize: 13 }}> See All</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Filter />

             
             
            </ScrollView></>         
                    }
        />
        
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
    position: 'relative',

   
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
  animation: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
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