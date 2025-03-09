import {View , Text} from 'react-native';
import {Link} from 'expo-router';

export default function Profile(){
    return(
        <View className="flex-1 justify-center items-center">
        <Text className="text-5xl text-light-100 font-bold">Profile Section</Text>
        </View>
    );
}