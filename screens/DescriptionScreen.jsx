import { useNavigation } from "@react-navigation/native";
import { Fragment, useLayoutEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import ActionButton from "../components/common/ActionButton";
import NavHeader from "../components/common/NavHeader";

const DescriptionScreen = () => {
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
          <NavHeader onPress={()=>{ navigation.navigate("Home");}}/>
          {/* main view */}
          <View className="absolute bottom-9 w-full">
            <ActionButton
              btnText={"MARK AS DONE"}
              onPress={() => {
                navigation.navigate("Congrats");
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default DescriptionScreen;
