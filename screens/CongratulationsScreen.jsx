import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

const CongratulationsScreen = () => {

    const navigation = useNavigation();
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

  return (
    <SafeAreaView className="bg-main flex-1">
      <Text>CongratulationsScreen</Text>
      <TouchableOpacity className="bg-lime-400 text-bold font-bold text-3xl" onPress={()=>{
        navigation.navigate('Description')
      }}>
      <Text>TO DES PAGE</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CongratulationsScreen;
