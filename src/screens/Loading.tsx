import React, { useEffect } from 'react';
import { ActivityIndicator, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';

export default function Loading() {


  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('login');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <LinearGradient
      colors={[
        "#121AD9",
        "#1A21DA",
        "rgba(26, 33, 218, 0.85)",
        "rgba(26, 33, 218, 0.75)",
      ]}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Image
        source={require("../assets/eco-bixos-logo-branca.png")}
        style={{ width: 500, height: 350 }}
      />
      <ActivityIndicator
        size={60}
        color="white"
        style={{ marginBottom: 200 }}
      />
    </LinearGradient>
  );
}
