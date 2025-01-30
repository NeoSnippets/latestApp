import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity,TextInput } from 'react-native'
import React, {useState} from 'react'
import { s } from '@/app/styles'; // Import global styles
import { SafeAreaView } from 'react-native-safe-area-context';
import {useLocalSearchParams, usePathname} from 'expo-router';
import icons from '@/constants/icons';




const Search = () => {

    const path = usePathname();
    const param = useLocalSearchParams<{query?: string}>();
    const [search, setSearch] = useState(param.query);

    const handleSearch = ( text: string) => {
        setSearch(text);
    }

    return(
        <View style={styles.container}>
            <View style={styles.contain}>
            <Image source={icons.search} style={styles.image} />

                <TextInput
                    value={search}
                    onChangeText={handleSearch}
                    placeholder='Search for anythings'
                    style={styles.input}
                    
                />
            </View>
            <TouchableOpacity>
                 <Image source={icons.filter} style={ styles.image} />
             </TouchableOpacity>
    
        </View>
      )

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',  // Equivalent to 'flex-row'
        alignItems: 'center',  // Equivalent to 'items-center'
        justifyContent: 'space-between', // Equivalent to 'justify-between'
        width: '100%',  // Equivalent to 'w-full'
        paddingHorizontal: 16,  // Equivalent to 'px-4' (4 * 4 = 16)
        paddingVertical: 8,  // Equivalent to 'py-2' (2 * 4 = 8)
        borderRadius: 8,  // Equivalent to 'rounded-lg'
        backgroundColor: '#F0F4F8', // Replace with your actual accent color ('bg-accent-100')
        borderWidth: 1,  // Equivalent to 'border'
        borderColor: '#CBD5E1', // Replace with your actual primary border color ('border-primary-100')
        marginTop: 20,  // Equivalent to 'mt-5' (5 * 4 = 20)
      },
      
    contain: {
        flex: 1,  // Equivalent to 'flex-1'
        flexDirection: 'row',  // Equivalent to 'flex-row'
        alignItems: 'center',  // Equivalent to 'items-center'
        justifyContent: 'flex-start',  // Equivalent to 'justify-start'
        zIndex: 50,  // Equivalent to 'z-50'
        
    },
    image: {
        width: 25, // Fill the width of its container
        height: 25, // Fixed height for the image
    },
    input: {
        fontSize: 14,  // Equivalent to 'text-sm' (Tailwind 'sm' is usually 14px)
        fontFamily: 'Rubik-SemiBold',  // Equivalent to 'font-rubik' (Ensure the font is installed)
        color: s.black[300],  // Replace with the actual color for 'text-black-300' (gray-400 in Tailwind is usually #D1D5DB)
        marginLeft: 8,  // Equivalent to 'ml-2' (2 * 4 = 8)
        flex: 1,  // Equivalent to 'flex-1'
      },
 
 
 
  
});

export default Search;