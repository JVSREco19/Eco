import { ScrollView, View, Image, Text } from "react-native";
import Header from "../components/Header";
import Hamburguer from "../components/Hamburguer";
import RectangleEvent from "../components/RectangleEvent";
import Footer from "../components/Footer";

export default function Events() {
  return (
    <View className="flex-1 relative bg-[#F9F5EB]">
      <Header />

      <View className="flex-row justify-between items-center px-4 mt-28">
        <Text className="text-2xl font-bold text-[#2a2894] ">
          Eventos Patrocinados
        </Text>
      </View>

      <View className="flex-1 items-center mt-5">
        <ScrollView
          className="max-h-[480]"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex">
            <RectangleEvent />
            <RectangleEvent />
            <RectangleEvent />
            <RectangleEvent />
          </View>
        </ScrollView>
      </View>
      <Footer />
      <View className="absolute top-6 left-0 z-10">
        <Hamburguer />
      </View>
    </View>
  );
}
