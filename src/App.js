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
import CadastroIdoso from './components/CadastroIdoso';
import LoginIdoso from './components/LoginIdoso';
import HomeIdoso from './components/HomeIdoso';
import PerfilIdoso from './components/PerfilIdoso';
import CadastroContatosEmergencia from './components/ContatosEmergencia/Cadastro';
import ListaContatosEmergencia from './components/ContatosEmergencia/Lista';
import EditarContatosEmergencia from './components/ContatosEmergencia/Editar';
import CadastroEventos from './components/Eventos/Cadastro';
import ListaEventos from './components/Eventos/Lista';
import EditarEventos from './components/Eventos/Editar';
import Teste from './components/Zarit/Teste';
import Resultado from './components/Zarit/Resultado';
import Mapa from './components/Mapa';

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
          navigation.navigate("PreLogin")  
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
          name="LoginIdoso"
          component={LoginIdoso}
          options={{ 
            title: 'Login',
            headerStyle: {
              backgroundColor: '#649AFC',
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
          name="HomeIdoso"
          component={HomeIdoso}
          options={({ navigation, route }) => ({ 
            title: 'Home',
            headerTitle: () => null,
            headerStyle: {
              backgroundColor: '#649AFC',
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
          name="CadastroIdoso"
          component={CadastroIdoso}
          options={{ 
            title: 'Cadastro Idoso',
            headerStyle: {
              backgroundColor: '#649AFC',
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
         <Stack.Screen
          name="PerfilIdoso"
          component={PerfilIdoso}
          options={({ navigation, route }) => ({ 
            title: 'Perfil',
            headerStyle: {
              backgroundColor: '#649AFC',
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
          name="CadastroContatosEmergencia"
          component={CadastroContatosEmergencia}
          options={({ navigation, route }) => ({ 
            title: 'Contatos de Emergência',
            headerStyle: {
              backgroundColor: '#FF2D55',
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
          name="ListaContatosEmergencia"
          component={ListaContatosEmergencia}
          options={({ navigation, route }) => ({ 
            title: 'Contatos de Emergência',
            headerStyle: {
              backgroundColor: '#FF2D55',
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
          name="EditarContatosEmergencia"
          component={EditarContatosEmergencia}
          options={({ navigation, route }) => ({ 
            title: 'Contatos de Emergência',
            headerStyle: {
              backgroundColor: '#FF2D55',
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
          name="CadastroEventos"
          component={CadastroEventos}
          options={({ navigation, route }) => ({ 
            title: 'Eventos/Consultas',
            headerStyle: {
              backgroundColor: '#649AFC',
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
          name="ListaEventos"
          component={ListaEventos}
          options={({ navigation, route }) => ({ 
            title: 'Eventos/Consultas',
            headerStyle: {
              backgroundColor: '#649AFC',
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
          name="EditarEventos"
          component={EditarEventos}
          options={({ navigation, route }) => ({ 
            title: 'Eventos/Consultas',
            headerStyle: {
              backgroundColor: '#649AFC',
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
          name="Zarit"
          component={Teste}
          options={({ navigation, route }) => ({ 
            title: 'Zarit',
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
          name="ZaritResultado"
          component={Resultado}
          options={({ navigation, route }) => ({ 
            title: 'Resultado Zarit',
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
          name="Mapa"
          component={Mapa}
          options={({ navigation, route }) => ({ 
            title: 'Mapa',
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
