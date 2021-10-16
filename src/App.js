import React from 'react';
import Cadastro from './components/Cadastro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Titulo from './components/Titulo';

const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Cadastro}
        options={{ title: 'Cadastro' }}
      />
       <Stack.Screen
        name="Teste"
        component={Titulo}
        options={{ title: 'Titulo' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;
