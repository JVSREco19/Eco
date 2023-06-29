import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hamburguer from "../components/Hamburguer";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function EventInformation() {
  const { goBack } = useNavigation();

  return (
    <View className="flex-1 bg-[#F9F5EB]">
      <Header />
      <TouchableOpacity className="top-6 left-80" onPress={goBack}>
        <AntDesign name="arrowleft" size={42} color="white" />
      </TouchableOpacity>

      <View className="top-6 w-full max-h-56 mb-2">
        <Image
          source={require("../assets/barbearia.jpg")}
          className="w-full h-full"
        />
      </View>

      <View className="flex-1 mt-6 h-96 w-full">
        <ScrollView showsVerticalScrollIndicator={false} className="max-h-96">
          <View className="flex-row left-4 mt-4 justify-between w-80">
            <Text className="text-2xl font-bold text-[#2a2894]">
              Inauguração Barbearia
            </Text>
            <MaterialIcons
              name="event-available"
              size={32}
              color="#2a2894"
              className="right-0"
            />
          </View>
          <View className="left-4 mt-2 w-96">
            <Text className="text-xl font-semibold text-[#2a2894]">
              Descontos e sorteios na inauguração da Barbearia para usuários do
              aplicativo.
            </Text>
            <Text className="text-xl font-semibold text-[#2a2894] mt-4">
              Local: QUALQUERUM
            </Text>
            <Text className="text-xl font-semibold text-[#2a2894] mt-4">
              Data: 00/00/00
            </Text>
            <Text className="text-xl font-semibold text-[#2a2894] mt-4">
              Hora: 00:00
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
