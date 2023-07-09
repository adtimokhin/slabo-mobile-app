import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

import { Linking } from "react-native";
import ActionButton from "../components/common/ActionButton";

const CongratulationsScreen = () => {
  const handleInstagramPress = async () => {
    const url = "instagram://user?username=adtimokhin"; // replace 'instagramUserName' with the actual username

    // Check if the Instagram app can be opened
    const canOpenURL = await Linking.canOpenURL(url);

    if (canOpenURL) {
      Linking.openURL(url);
    } else {
      // If the Instagram app isn't installed, open in the browser
      Linking.openURL(`https://www.instagram.com/adtimokhin`); // replace 'instagramUserName' with the actual username
    }
  };

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-main flex-1">
      <Text>CongratulationsScreen</Text>
      <TouchableOpacity
        className="bg-lime-400 text-bold font-bold text-3xl"
        onPress={() => {
          navigation.navigate("Description");
        }}
      >
        <Text>TO DES PAGE</Text>
      </TouchableOpacity>

<View className="absolute bottom-9 w-full">
      <ActionButton
        btnText={"OPEN INSTA"}
        onPress={async () => {
          await handleInstagramPress();
        }}
      />
      </View>
    </SafeAreaView>
  );
};

export default CongratulationsScreen;
