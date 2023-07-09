import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import ActionButton from "../components/common/ActionButton";

const DescriptionScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-main flex-1">
      <Text>DES</Text>
      <TouchableOpacity
        className="bg-lime-400 text-bold font-bold text-3xl"
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>TO QUEST PAGE</Text>
      </TouchableOpacity>

      <View className="absolute bottom-9 w-full">
        <ActionButton
          btnText={"MARK AS DONE"}
          onPress={() => {
            navigation.navigate("Congrats");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DescriptionScreen;
