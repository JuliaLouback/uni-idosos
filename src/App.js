import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './components/Cadastro';
import HomeCuidador from './components/HomeCuidador';

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
          name="Teste"
          component={Cadastro}
          options={{ title: 'Cadastro Cuidador' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
