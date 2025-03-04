import icons from '@/constants/icons';
import images from '@/constants/images';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { s } from '@/app/styles'; // Import global styles


interface Props{
    onPress?: () => void;
}

export const Card = ({onPress }: Props) =>{

    return(
        <TouchableOpacity onPress={onPress} style={{flex:1, flexDirection: 'column',backgroundColor: 'black',
            alignItems: 'start',marginTop: 25, position:'relative',borderRadius: 20,   width: 240,  height: 320, backgroundColor:'white'}}>
             <Image source={images.newYork} style={{borderRadius: 20, width:'100%', height:150 }}/>

            <View style={{ flexDirection: 'row', alignItems:'center', position: 'absolute', top: 15, right: 15, backgroundColor: 'white', borderRadius: 9999, paddingLeft:6, paddingRight:6, gap:3}}>
                    <Image source={ icons.star} style={{ width:10, height :10, }} />
                    <Text style={{ fontFamily: 'Rubik-Medium', fontSize:10, color: s.primary[300]}}>4.4</Text>
            </View>

            <View style={{ position: 'relative', bottom: 0,top:0, gap:3, alignItems: 'start',backgroundColor: 'white',width:'100%',borderRadius: 20,marginTop:15 }}>
                <View style={{gap:5}}>
                    <Text style={{ fontFamily: 'Rubik-Bold', fontSize:18,color:'black'}} numberOfLines={1}>Merialla Villa</Text>
                    <Text style={{color:'black'}}>NewYork, Us</Text>
                    <View style={{flexDirection: 'row',  justifyContent:'space-between',gap:40, alignItems: 'start',}}>
                        <Text style={{ fontFamily: 'Rubik-Bold', fontSize:18, color: s.primary[300]}}>$12219</Text>
                        <Image source={icons.heart} style={{ width: 20, height: 20,}} tintColor='#191019'/>

                    </View>
                    
                </View>
            </View>
        </TouchableOpacity>
    )

}

export const FeacherCard = ({onPress }: Props) =>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image source={images.japan} style={styles.image} />
            <Image source={images.cardGradient} style={{ }}/>

            <View style={styles.contain}>
                <Image source={ icons.star} style={{ width:12, height :12, }} />
                <Text style={styles.rateText}>4.4</Text>
            </View>

            <View style={{ alignItems:'center', position: 'absolute', bottom: 15, left: 15, gap:3, }}>
                <View style={{gap:5}}>
                    <Text style={{ fontFamily: 'Rubik-Bold', fontSize:18,color:'white'}} numberOfLines={1}>Merialla Villa</Text>
                    <Text style={{color:'white'}}>NewYork, Us</Text>
                    <View style={{flexDirection: 'row',  justifyContent:'space-between',gap:100}}>
                        <Text style={styles.priceText}>$12219</Text>
                        <Image source={icons.heart} style={{ width: 20, height: 20,}}/>

                    </View>
                    
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        position:'relative',
        width: 240,  
        height: 320
      },
      
    contain: {
        flexDirection: 'row', 
        alignItems:'center', 
        position: 'absolute', 
        top: 15, 
        right: 35, 
        backgroundColor: 'white', 
        borderRadius: 9999, 
        paddingLeft:6, 
        paddingRight:6, 
        gap:3
        
    },
    image: {
        borderRadius: 20,
        width:220, 
        height:320
    },
    cardGradient:{ 
        width:220, 
        height: 320 , 
        position: 'absolute', 
        bottom: 0, 
        borderRadius: 20,  
    },
    rateText:{
        fontFamily: 'Rubik-Medium', 
        fontSize:12, 
        color: s.primary[300]
    },
    priceText:{ 
        fontFamily: 'Rubik-Bold', 
        fontSize:18, 
        color:'white'
    },
    input: {
        fontSize: 14,  // Equivalent to 'text-sm' (Tailwind 'sm' is usually 14px)
        fontFamily: 'Rubik-SemiBold',  // Equivalent to 'font-rubik' (Ensure the font is installed)
        color: s.black[300],  // Replace with the actual color for 'text-black-300' (gray-400 in Tailwind is usually #D1D5DB)
        marginLeft: 8,  // Equivalent to 'ml-2' (2 * 4 = 8)
        flex: 1,  // Equivalent to 'flex-1'
      },
 
 
 
  
});



