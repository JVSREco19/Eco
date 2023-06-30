import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

interface CustomAlertProps {
  visible: boolean;
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = (props) => {
    const { visible, message, onClose } = props;
  
    if (!visible) {
      return null;
    }

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
    >
      <View className='flex-1 justify-center items-center bg-[rgba(0, 0, 0, 0.5)]'> 
        <View className='bg-[#fff] border-r-8 p-16 max-w-[300] items-center'>
          <Text className='text-lg mb-2'>{message}</Text>
          <TouchableOpacity className='bg-[#ccc] border-r-4 p-8' onPress={onClose}>
            <Text className='bg-[#fff] text-lg'>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default CustomAlert;