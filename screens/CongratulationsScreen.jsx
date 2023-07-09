import { useNavigation } from "@react-navigation/native";
import { Fragment, useLayoutEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

import { Linking } from "react-native";
import ActionButton from "../components/common/ActionButton";
import NavHeader from "../components/common/NavHeader";

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
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#0F5595" }} />
      <SafeAreaView className="bg-main flex-1">
        <View className="bg-main flex-1">
          <NavHeader
            onPress={() => {
              navigation.navigate("Description");
            }}
          />
          {/* main view */}


          <View className="absolute bottom-9 w-full">
            <ActionButton
              btnText={"OPEN INSTA"}
              onPress={async () => {
                await handleInstagramPress();
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default CongratulationsScreen;
