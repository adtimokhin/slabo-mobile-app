import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ShortDescriptionBlock from "../components/quest/ShortDescription";

const QuestDescriptionScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-[#F6F9FC] flex-1">
      <View className="absolute top-1/2">
        <Text
          style={{ fontFamily: "codeNext" }}
          className="font-semibold text-2xl text-[#6D7276] p-2"
        >
          Quest for today:
        </Text>
        <ShortDescriptionBlock />
      </View>
    </SafeAreaView>
  );
};

export default QuestDescriptionScreen;
