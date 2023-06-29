import { View, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function RectangleInfo() {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate("homeInformation")}>
      <View className="flex-row w-80 max-h-44 bg-[#F7F1E5] border-2 border-[#efe3cb] rounded-md mt-5">
        <Image
          source={require("../assets/enfermaria.jpg")}
          style={{ width: 120, maxHeight: "100%" }}
        />

        <View className="flex-column top-3 left-2 w-40 h-32">
          <Text className="text-lg text-blue-900">Enfermaria Unifei</Text>

          <Text className="text-base text-blue-900">
            Enfermaria localizada no Prédio 1. Atendimento 24 horas com
            profissionais especializados.
          </Text>
        </View>
        <AntDesign
          name="infocirlceo"
          size={20}
          color="blue"
          className="right-0"
        />
      </View>
    </TouchableOpacity>
  );
}
