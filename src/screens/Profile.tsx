import { View, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Hamburguer from "../components/Hamburguer";
import { FontAwesome } from "@expo/vector-icons";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";

import ProfileSVG from "../assets/profileSVG.svg";

export default function Profile() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1">
      <LinearGradient
        colors={[
          "#121AD9",
          "#1A21DA",
          "rgba(26, 33, 218, 0.85)",
          "rgba(26, 33, 218, 0.75)",
        ]}
        className="flex-row justify-around w-full h-72"
      >
        <View className="flex-column items-center justify-center w-56">
          <Image
            source={require("../assets/user.png")}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text className="text-lg font-semibold text-[#F9F5EB] mt-3">
            Fulano de Tal
          </Text>
          <Text className="text-xs font-semibold text-[#F9F5EB] mt-3">
            Universidade BLABLABLA
          </Text>
        </View>

        <TouchableOpacity
          className="absolute right-5 top-8"
          onPress={() => navigate("editProfile")}
        >
          <FontAwesome name="edit" size={36} color="white" />
        </TouchableOpacity>
      </LinearGradient>

      <View className="bg-[#F9F5EB] h-screen">
        <View className="pt-2 left-5 w-[90%]">
          <Text className="text-[#002B5B] text-xl font-bold">Sobre Mim</Text>
          <Text className="text-[#002B5B] text-sm font-semibold mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            quibusdam, consequatur praesentium reprehenderit iste ut excepturi,
            veniam esse blanditiis nisi nemo dolore incidunt natus culpa in ex
            provident. Excepturi, qui.
          </Text>
        </View>
        <View className="mt-14 flex-row items-center justify-around">
          <Image
            source={require("../assets/instagram.png")}
            style={{ width: 60, height: 60, borderRadius: 50 }}
          />
          <Image
            source={require("../assets/linkedin.png")}
            style={{ width: 60, height: 60, borderRadius: 50 }}
          />
          <Image
            source={require("../assets/github.png")}
            style={{ width: 60, height: 60, borderRadius: 50 }}
          />
        </View>
        <View className="flex-row mt-8 left-5 px-2 justify-around items-center">
          <View className="w-56 mb-8">
            <Text className="text-[#002B5B] text-sm font-semibold">
              Curso: Engenharia de Computação
            </Text>
            <Text className="text-[#002B5B] text-sm font-semibold mt-2">
              Telefone: 99 99999-9999
            </Text>
          </View>
          <View className="">
            <ProfileSVG width={160} height={120} />
          </View>
        </View>
      </View>

      <Footer />
      <View className="absolute top-6 left-0 z-10">
        <Hamburguer />
      </View>
    </View>
  );
}
