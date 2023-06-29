import { View } from 'react-native'
import { NavigationContainer} from '@react-navigation/native'

import  AppRoutes  from './app.routes'

export default function Routes() {
    return (
        <View className='flex-1'>
            
                <AppRoutes />
            
        </View>
    )
}