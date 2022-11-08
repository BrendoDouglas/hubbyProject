import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import UserProfile from './pages/userProfile';
import Signup from './pages/signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup" screenOptions={{headerShown: false, contentStyle:{flex:1}}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="UserProfile" component={UserProfile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>imagina a pagina de login mt pica aqui</Text>
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
