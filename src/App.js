import React from 'react';
import { View, Image, TouchableOpacity,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './components/Cadastro';
import HomeCuidador from './components/HomeCuidador';
import Perfil from './components/Perfil';
import PreLogin from './components/PreLogin';
import LoginCuidador from './components/LoginCuidador';
import asyncStorage from "../services/asyncStorage";

const Stack = createNativeStackNavigator();

function logout(navigation){
  Alert.alert(
    "Logout",
    "Tem certeza que deseja realizar logout?",
    [
      {
        text: "Sim",
        onPress: () => {
          asyncStorage.removeData("User")
          navigation.navigate("LoginCuidador")  
        },
      },
      {
        text: "Não",
      },
    ]
  )
}

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="PreLogin"
          component={PreLogin}
          options={{ 
            title: 'Escolher Perfil',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="LoginCuidador"
          component={LoginCuidador}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#FF8B8B',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeCuidador}
          options={({ navigation, route }) => ({ 
            title: 'Home',
            headerTitle: () => null,
            headerStyle: {
              backgroundColor: '#FB7366',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <View>
                <TouchableOpacity onPress={() => logout(navigation)}>
                  <Image
                    source={require("./img/logout.png")}
                  />
                </TouchableOpacity>
              </View>
            ),
            headerLeft: ()=> null, 
          })}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ 
            title: 'Cadastro Cuidador',
            headerStyle: {
              backgroundColor: '#FB7366',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
         <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={({ navigation, route }) => ({ 
            title: 'Perfil',
            headerStyle: {
              backgroundColor: '#FB7366',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <View>
                <TouchableOpacity onPress={() => logout(navigation)}>
                  <Image
                    source={require("./img/logout.png")}
                  />
                </TouchableOpacity>
              </View>
            ),
            headerLeft: ()=> null, 
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
