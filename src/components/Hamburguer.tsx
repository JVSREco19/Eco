import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Hamburguer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View className="flex-row items-center left-0 px-2 pt-6">
      <TouchableOpacity onPress={toggleMenu}>
        <Entypo name="menu" size={42} color="white" />
      </TouchableOpacity>

      {isMenuOpen && (
        <View className="absolute top-0 left-0 w-60 h-60 bg-blue-800">
          <View className="flex-column absolute top-14 left-3">
            <Image
              source={require("../assets/user.png")}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <Text className="mt-5 text-xl text-white">Fulano de Tal</Text>
          </View>

          <TouchableOpacity
            className="absolute top-6 right-1"
            onPress={toggleMenu}
          >
            <Entypo name="cross" size={42} color="white" />
            <View></View>
          </TouchableOpacity>
          <View className="px-6 top-60 bg-[#F7F1E5] h-screen">
            <TouchableOpacity
              className="mt-5"
              onPress={() => console.log("Opção 1")}
            >
              <Text className="text-xl text-[#002B5B]">Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="mt-5"
              onPress={() => console.log("Opção 2")}
            >
              <Text className="text-xl text-[#002B5B]">Eventos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="mt-5"
              onPress={() => console.log("Opção 3")}
            >
              <Text className="text-xl text-[#002B5B]">Configurações</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="mt-5"
              onPress={() => console.log("Opção 4")}
            >
              <Text className="text-xl text-[#002B5B]">Fale Conosco</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="mt-5"
              onPress={() => console.log("Opção 5")}
            >
              <Text className="text-xl text-[#002B5B]">Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
