import { createNativeStackNavigator} from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator();

import  Login  from '../screens/Login'
import  Cadastro  from '../screens/Cadastro'
import  Home  from '../screens/Home'

export default function AppRoutes() {
    return (
    <Navigator screenOptions={{ headerShown: false}}>
        <Screen 
            name='home'
            component={Home}
        />

        

        
    </Navigator>
    )
}