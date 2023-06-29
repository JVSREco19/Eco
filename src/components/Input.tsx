import { TextInput, View } from "react-native";

interface InputProps {
  placeholder: string;
}

export default function Input({ placeholder }: InputProps) {
  return (
    <View className="flex-row items-center w-[283] h-[52] border-b border-blue-900 mb-4 px-2 text-xl">
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#002B5B"
        className="w-[220] h-10 text-xl"
      />
    </View>
  );
}
