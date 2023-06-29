import { LinearGradient } from "expo-linear-gradient";

export default function Header() {
  return (
    <LinearGradient
      colors={[
        "#121AD9",
        "#1A21DA",
        "rgba(26, 33, 218, 0.85)",
        "rgba(26, 33, 218, 0.75)",
      ]}
      className="left-0 right-0 absolute h-[70]"
    ></LinearGradient>
  );
}
