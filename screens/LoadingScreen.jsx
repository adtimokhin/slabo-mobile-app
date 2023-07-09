import React, { useEffect, useLayoutEffect } from "react";
import { View, ActivityIndicator, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Logo from "../assets/LOGO.svg";

const LoadingScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const timer = setTimeout(() => {
        
        navigation.replace("Home"); // Navigate to your home screen or any other screen
      }, 10000); // 1 second delay
      // TODO: Change the loading method

      return () => clearTimeout(timer);
    };

    fetchData();
  }, [navigation]);

  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      className="bg-main"
    >
      <Logo className="w-full" />
    </View>
  );
};

export default LoadingScreen;
