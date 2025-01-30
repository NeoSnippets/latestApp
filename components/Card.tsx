import icons from '@/constants/icons';
import images from '@/constants/images';
import {View, Text, TouchableOpacity, Image} from 'react-native';


interface Props{
    onPress?: () => void;
}

export const Card = () =>{

    return(
        <View>
        <Text> Card</Text>
        </View>
    )

}

export const FeacherCard = ({onPress }: Props) =>{
    return(
        <TouchableOpacity onPress={onPress} style={{flex:1, flexDirection: 'column',
         alignItems: 'flex-start', position:'relative',  width: 240,  height: 320}}>
            <Image source={images.japan} style={{borderRadius: 20, width:250, height:340 }} />
            <Image source={images.cardGradient} style={{ width:250, height: 340 , position: 'absolute', bottom: 0}}/>
            <View style={{ flexDirection: 'row', alignItems:'center', position: 'absolute', top: 15, right: 15, backgroundColor: 'white', borderRadius: 9999, paddingLeft:6, paddingRight:6, gap:3}}>
                <Image source={ icons.star} style={{ width:12, height :12}} />
                <Text style={{ fontFamily: 'Rubik-Medium', fontSize:12}}>4.4</Text>
            </View>
        </TouchableOpacity>
    )
}



