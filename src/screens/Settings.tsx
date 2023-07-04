import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

export default function Settings() {
  const { goBack } = useNavigation();

  return (
    <View className="flex-1 bg-[#F9F5EB]">
      <Header />
      <TouchableOpacity className="top-6 left-4" onPress={goBack}>
        <AntDesign name="arrowleft" size={42} color="white" />
      </TouchableOpacity>
      <View className="top-20 justify-center items-center">
        <Image
          source={require("../assets/eco-bixos-logo.png")}
          style={{ width: 450, height: 300 }}
        />
        <TouchableOpacity>
          <Text className="text-2xl text-[#002B5B] mt-5">
            Configurações de Áudio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-2xl text-[#002B5B] mt-5">
            Configurações de Idioma
          </Text>
        </TouchableOpacity>

        <Text className="text-2xl text-[#002B5B] mt-5">Versão 0.0.1</Text>
      </View>
    </View>
  );
}
