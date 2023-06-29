import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TextInput,
  View,
  Image,
  Switch,
  Text,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";

export default function Login() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const { navigate } = useNavigation();
  return (
    <View className="flex-1 items-center bg-[#F9F5EB]">
      <Image
        source={require("../assets/eco-bixos-logo.png")}
        style={{ width: 450, height: 300 }}
      />

      <View className="flex-row items-center w-[283] h-[65] border border-blue-900 rounded-md mb-4 px-4 text-xl">
        <TextInput
          placeholder="Email"
          placeholderTextColor="#002B5B"
          className="w-[220] h-10 text-xl"
        />
        <Ionicons
          name="md-mail-outline"
          size={36}
          color="#002B5B"
          className="pl-4"
        />
      </View>

      <View className="flex-row items-center w-[283] h-[65] border border-blue-900 rounded-md mb-4 px-4 text-xl">
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          placeholderTextColor="#002B5B"
          className="w-[220] h-10 text-xl"
        />
        <AntDesign name="lock1" size={36} color="#002B5B" className="pl-4" />
      </View>

      <View className="flex-row w-[283] items-center justify-start">
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "blue" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text className="text-base">Permanecer conectado</Text>
      </View>

      <TouchableOpacity onPress={() => navigate("home")}>
        <LinearGradient
          colors={[
            "#121AD9",
            "#1A21DA",
            "rgba(26, 33, 218, 0.85)",
            "rgba(26, 33, 218, 0.75)",
          ]}
          className="w-[283] h-[65] rounded-2xl items-center justify-center mt-3 box-shadow-custom"
        >
          <Text className="text-2xl text-white">Entrar</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity className="mt-3">
        <Text className="text-sm text-blue-900">Recuperar senha</Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-6" onPress={() => navigate("cadastro")}>
        <Text className="text-2xl text-blue-600">Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}
