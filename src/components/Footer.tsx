import { TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Footer() {
  return (
    <LinearGradient
      colors={[
        "#121AD9",
        "#1A21DA",
        "rgba(26, 33, 218, 0.85)",
        "rgba(26, 33, 218, 0.75)",
      ]}
      className="flex-row justify-around items-center  bottom-0 left-0 right-0 absolute h-20"
    >
      <TouchableOpacity
        className="flex-1 items-center"
        onPress={() => console.log("Perfil")}
      >
        <FontAwesome name="home" size={50} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        className="flex-1 items-center"
        onPress={() => console.log("Home")}
      >
        <FontAwesome name="calendar-check-o" size={42} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        className="flex-1 items-center"
        onPress={() => console.log("Perfil")}
      >
        <FontAwesome name="user" size={42} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
}
