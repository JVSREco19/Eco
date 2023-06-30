import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";

export default function EditProfile() {
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
        <TouchableOpacity
          className="top-6 left-4 absolute"
          onPress={() => navigate("profile")}
        >
          <AntDesign name="arrowleft" size={42} color="white" />
        </TouchableOpacity>
        <View className="flex-column items-center justify-center w-56">
          <Image
            source={require("../assets/user.png")}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <View className="flex-row items-center w-50 border-b border-white mb-4 px-2 text-xl">
            <TextInput
              placeholder={"Nome"}
              maxLength={30}
              placeholderTextColor="white"
              className="w-40 h-10 text-base text-white"
            />
            <MaterialIcons name="edit" size={24} color="white" />
          </View>
          <View className="flex-row items-center w-50 border-b border-white mb-4 px-2 text-xl">
            <TextInput
              placeholder={"Universidade"}
              maxLength={100}
              placeholderTextColor="white"
              className="w-40 h-10 text-xs text-white"
            />
            <MaterialIcons name="edit" size={24} color="white" />
          </View>
        </View>

        <TouchableOpacity
          className="absolute right-5 top-7"
          onPress={() => navigate("profile")}
        >
          <AntDesign name="check" size={36} color="white" />
        </TouchableOpacity>
      </LinearGradient>

      <View className="bg-[#F9F5EB] flex-1">
        <ScrollView className="max-h-96" showsVerticalScrollIndicator={false}>
          <View className="pt-2 left-4 w-[90%]">
            <Text className="text-[#002B5B] text-xl font-bold">Sobre Mim</Text>
            <View className="flex-row items-center border-b border-[#002B5B] py-1 px-2 text-xl">
              <TextInput
                placeholder={"Adicionar Descrição..."}
                multiline
                textAlignVertical="top"
                maxLength={300}
                placeholderTextColor="#002B5B"
                className="w-[90%] text-sm text-[#002B5B] pt-2"
              />
              <MaterialIcons name="edit" size={24} color="#002B5B" />
            </View>
          </View>
          <View className="mt-4 ml-4 flex-column  justify-around">
            <View className="flex-row items-center w-56 border-b border-[#002B5B] mb-4 px-2 text-xl">
              <Image
                source={require("../assets/instagram.png")}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 50,
                }}
              />
              <TextInput
                placeholder={"URL Instagram"}
                maxLength={25}
                placeholderTextColor="#002B5B"
                className="w-40 h-10 text-xs text-[#002B5B] px-2"
              />
              <MaterialIcons name="edit" size={24} color="#002B5B" />
            </View>
            <View className="flex-row items-center w-56 border-b border-[#002B5B] mb-4 px-2 text-xl">
              <Image
                source={require("../assets/linkedin.png")}
                style={{ width: 24, height: 24, borderRadius: 50 }}
              />
              <TextInput
                placeholder={"URL Linkedin"}
                maxLength={25}
                placeholderTextColor="#002B5B"
                className="w-40 h-10 text-xs text-[#002B5B] px-2"
              />
              <MaterialIcons name="edit" size={24} color="#002B5B" />
            </View>
            <View className="flex-row items-center w-56 border-b border-[#002B5B] mb-4 px-2 text-xl">
              <Image
                source={require("../assets/github.png")}
                style={{ width: 24, height: 24, borderRadius: 50 }}
              />
              <TextInput
                placeholder={"URL GitHub"}
                maxLength={25}
                placeholderTextColor="#002B5B"
                className="w-40 h-10 text-xs text-[#002B5B] px-2"
              />
              <MaterialIcons name="edit" size={24} color="#002B5B" />
            </View>
            <View className="flex-row justify-between items-center w-56 border-b border-[#002B5B] mb-4 px-2 text-xl">
              <TextInput
                placeholder={"Curso"}
                placeholderTextColor="#002B5B"
                maxLength={40}
                className="w-40 h-10 text-xs text-[#002B5B] px-2"
              />
              <MaterialIcons name="edit" size={24} color="#002B5B" />
            </View>
            <View className="flex-row justify-between items-center w-56 border-b border-[#002B5B] mb-4 px-2 text-xl">
              <TextInput
                placeholder={"Telefone"}
                maxLength={11}
                keyboardType="numeric"
                placeholderTextColor="#002B5B"
                className="w-40 h-10 text-xs text-[#002B5B] px-2"
              />
              <MaterialIcons name="edit" size={24} color="#002B5B" />
            </View>
          </View>
        </ScrollView>
      </View>

      <Footer />
    </View>
  );
}
