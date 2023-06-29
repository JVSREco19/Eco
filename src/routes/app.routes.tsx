import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

import  Login  from '../screens/Login'
import  Cadastro  from '../screens/Cadastro'
import  Home  from '../screens/Home'
import Events from '../screens/Events';

export default function AppRoutes() {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name = 'login' component={Login}/>
            <Stack.Screen name = 'cadastro' component={Cadastro}/>
            <Stack.Screen name = 'home' component={Home}/>
            <Stack.Screen name = 'events' component={Events}/>
        </Stack.Navigator>

    </NavigationContainer>
    )
}