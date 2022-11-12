import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import UserProfile from './pages/userProfile';
import Sign from './pages/sign';
import Signup from './pages/signup';
import MainMenu from './pages/mainMenu';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

/**
 * @returns NavigationContainer para navegar entre as paginas
 */
export default function App() {
  return (
    /**uso 'headerShown:false' no 'screenOptions' para esconder o header que ele cria para as paginas.
     * e com o 'contentStyle: flex:1' faco com que as paginas criadas tenham tamanho de 100% da view */ 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup" screenOptions={{headerShown: false, contentStyle:{flex:1}}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Sign" component={Sign}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="MainMenu" component={MainMenu}/>
        <Stack.Screen name="UserProfile" component={UserProfile}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

/**
 * @returns tela provisoria ate implementacao da tela de 'login'
 */
function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{with:300}}>imagina a pagina de login mt pica aqui</Text>
      <Pressable style={styles.botao} onPress={() => navigation.navigate('UserProfile')}>
        <Text>ir para "ver mais"</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: "#f00a",
    height: 45,
    borderRadius: 5,
    margin: 4,
    flexDirection: "row",
    alignItems: "center",
    padding: 15
  },
});