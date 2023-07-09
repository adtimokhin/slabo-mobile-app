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
import ActionButton from "../components/common/ActionButton";

const QuestDescriptionScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-[#F6F9FC] flex-1">
      <Text
        style={{ fontFamily: "codeNext" }}
        className="font-semibold text-2xl"
      >
        Quest
      </Text>

      <TouchableOpacity
        className="bg-lime-400 text-bold font-bold text-3xl"
        onPress={() => {
          navigation.navigate("Description");
        }}
      >
        <Text>TO DES PAGE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default QuestDescriptionScreen;
