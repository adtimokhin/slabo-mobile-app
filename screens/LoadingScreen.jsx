import React, { useEffect, useLayoutEffect } from "react";
import { View, ActivityIndicator, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
      }, 10); // 1 second delay

      return () => clearTimeout(timer);
    };

    fetchData();
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default LoadingScreen;
