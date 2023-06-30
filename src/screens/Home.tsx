import { ScrollView, View, Image, Text } from "react-native";
import Header from "../components/Header";
import Hamburguer from "../components/Hamburguer";
import RectangleInfo from "../components/RectangleInfo";
import Footer from "../components/Footer";

import Medicine from "../assets/medicine.svg";

export default function Home() {
  return (
    <View className="flex-1 relative bg-[#F9F5EB]">
      <Header />

      <View className="flex-row px-4 mt-20 items-center justify-around">
        <Text className="text-2xl font-bold text-[#2a2894] ">
          Saúde e Bem Estar
        </Text>
        <Medicine width={120} height={60} />
      </View>

      <View className="flex-1 items-center mt-5">
        <ScrollView
          className="max-h-[500]"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex">
            <RectangleInfo />
            <RectangleInfo />
            <RectangleInfo />
            <RectangleInfo />
          </View>
        </ScrollView>
      </View>
      <Footer />
      <View className="absolute mt-6 left-0 z-10">
        <Hamburguer />
      </View>
    </View>
  );
}
