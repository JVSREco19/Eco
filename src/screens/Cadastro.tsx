import { TouchableOpacity, View, Image, Text, ScrollView } from "react-native";
import Header from "../components/Header";
import { AntDesign } from "@expo/vector-icons";
import Input from "../components/Input";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {
  const { goBack, navigate } = useNavigation();

  return (
    <View className="flex-1 h-full bg-[#F9F5EB]">
      <Header />
      <TouchableOpacity className="top-6 left-4" onPress={goBack}>
        <AntDesign name="arrowleft" size={42} color="white" />
      </TouchableOpacity>

      <View className="flex-1 items-center top-16">
        <Image
          source={require("../assets/eco-bixos-logo.png")}
          style={{ width: 200, height: 100 }}
        />
        <ScrollView
          className="max-h-96 left-3"
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ paddingRight: 30 }}
          persistentScrollbar={true}
        >
          <Input placeholder={"Nome"} maxlength={25}></Input>
          <Input placeholder={"Email"} maxlength={50}></Input>
          <Input placeholder={"Confirmar Email"} maxlength={50}></Input>
          <Input placeholder={"Senha"} maxlength={12}></Input>
          <Input placeholder={"Confirmar Senha"} maxlength={12}></Input>
          <Input placeholder={"Estado"} maxlength={30}></Input>
          <Input placeholder={"Cidade"} maxlength={30}></Input>
          <Input placeholder={"Faculdade"} maxlength={100}></Input>
        </ScrollView>
        <TouchableOpacity onPress={() => navigate("login")}>
          <LinearGradient
            colors={[
              "#121AD9",
              "#1A21DA",
              "rgba(26, 33, 218, 0.85)",
              "rgba(26, 33, 218, 0.75)",
            ]}
            className="w-[283] h-[65] rounded-2xl items-center justify-center mt-10"
          >
            <Text className="text-2xl text-white">Cadastrar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
