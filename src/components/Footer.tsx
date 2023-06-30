import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Keyboard, KeyboardEvent  } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Footer() {
  const { navigate } = useNavigation();
  
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardDidShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardDidHide
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleKeyboardDidShow = (event: KeyboardEvent) => {
    setIsKeyboardOpen(true);
  };

  const handleKeyboardDidHide = (event: KeyboardEvent) => {
    setIsKeyboardOpen(false);
  };

  return (
    <LinearGradient
      colors={[
        "#121AD9",
        "#1A21DA",
        "rgba(26, 33, 218, 0.85)",
        "rgba(26, 33, 218, 0.75)",
      ]}
      className="flex-row justify-between items-center bottom-0 left-0 right-0 absolute h-20"
      style={{zIndex: isKeyboardOpen ? -1 : 1}}
    >
      <TouchableOpacity
        className="flex-1 items-center"
        onPress={() => navigate("home")}
      >
        <FontAwesome name="home" size={50} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        className="flex-1 items-center"
        onPress={() => navigate("events")}
      >
        <FontAwesome name="calendar-check-o" size={42} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        className="flex-1 items-center"
        onPress={() => navigate("profile")}
      >
        <FontAwesome name="user" size={42} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
}
