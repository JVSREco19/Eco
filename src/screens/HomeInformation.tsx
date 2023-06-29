import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hamburguer from "../components/Hamburguer";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomeInformation() {
  const { goBack, navigate } = useNavigation();

  return (
    <View className="flex-1 bg-[#F9F5EB]">
      <Header />
      <TouchableOpacity className="top-6 left-80" onPress={goBack}>
        <AntDesign name="arrowleft" size={42} color="white" />
      </TouchableOpacity>

      <View className="top-6 w-full max-h-56 mb-2">
        <Image
          source={require("../assets/medicine.png")}
          className="w-full h-full"
        />
      </View>

      <View className="flex-1 mt-6 h-96 w-full">
        <ScrollView showsVerticalScrollIndicator={false} className="max-h-96">
          <View className="flex-row left-4 mt-4 justify-between w-80">
            <Text className="text-2xl font-bold text-[#2a2894]">
              Enfermaria Unifei
            </Text>
            <AntDesign
              name="infocirlceo"
              size={32}
              color="#2a2894"
              className="right-0"
            />
          </View>
          <View className="left-4 mt-2 w-96">
            <Text className="text-xl font-semibold text-[#2a2894]">
              Enfermaria localizada no Prédio 1. Atendimento 24 horas com
              profissionais especializados.
            </Text>
            <Text className="text-xl font-semibold text-[#2a2894] mt-4">
              Sala: 0000
            </Text>
            <Text className="text-xl font-semibold text-[#2a2894] mt-4">
              Enfermeiros(as): NOME
            </Text>
          </View>
        </ScrollView>
      </View>

      <Footer />

      <View className="absolute top-6 left-0 z-10 justify-between">
        <Hamburguer />
      </View>
    </View>
  );
}
