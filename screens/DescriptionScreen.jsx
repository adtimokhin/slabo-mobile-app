import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

const DescriptionScreen = () => {

    const navigation = useNavigation();
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

  return (
    <SafeAreaView className="bg-main flex-1">
      <Text>DES</Text>
      <TouchableOpacity className="bg-lime-400 text-bold font-bold text-3xl" onPress={()=>{
        navigation.navigate('Home')
      }}>
      <Text>TO QUEST PAGE</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-lime-400 text-bold font-bold text-3xl" onPress={()=>{
        navigation.navigate('Congrats')
      }}>
      <Text>TO CONGRATS PAGE</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DescriptionScreen;
