import { ActivityIndicator, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Loading() {
  return (
    <LinearGradient
      colors={[
        "#121AD9",
        "#1A21DA",
        "rgba(26, 33, 218, 0.85)",
        "rgba(26, 33, 218, 0.75)",
      ]}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Image
        source={require("../assets/eco-bixos-logo-branca.png")}
        style={{ width: 500, height: 350 }}
      />
      <ActivityIndicator
        size={60}
        color="white"
        style={{ marginBottom: 200 }}
      />
    </LinearGradient>
  );
}
