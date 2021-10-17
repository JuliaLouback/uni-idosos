import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './components/Cadastro';
import HomeCuidador from './components/HomeCuidador';
import Perfil from './components/Perfil';

const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeCuidador}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: 'Cadastro Cuidador' }}
        />
         <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: 'Perfil Cuidador' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
