import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import icone from "../../assets/icone.png";
import google32 from "../../assets/google32.png";
import person24 from "../../assets/person24.png";
import lock24 from "../../assets/lock24.png";
import email24 from "../../assets/email24.png";

export default function Signup({ navigation: { goBack, navigate } }) {
  return (
    <LinearGradient
      colors={['#014442', '#78A967']}
      start={{x: 0, y: 0}}
      end={{x:1, y:1}}
      style={{marginBottom: -40, padding: 40, flex:1}}>

      <View style={styles.logopalavra}>
        <Image source={icone} style={{width:64, height:64}}/>
        <Text style={{fontSize:40, color: 'white', marginLeft:10}}>
          <Text style={{fontWeight:600}}>HUB</Text>
          by
        </Text>
      </View>

      <View style={styles.formRegister}>
        <View style={styles.inputIcon}>
          <Image source={person24} style={{width:24, height:24}}/>
          <TextInput placeholder='Usuario' style={styles.input} placeholderTextColor='#4d4d4d80'/>
        </View>
        <View style={styles.inputIcon}>
          <Image source={lock24} style={{width:24, height:24}}/>
          <TextInput placeholder='Senha' style={styles.input} placeholderTextColor='#4d4d4d80'/>
        </View>
        <View style={styles.inputIcon}>
          <Image source={email24} style={{width:24, height:24}}/>
          <TextInput placeholder='E-mail' style={styles.input} placeholderTextColor='#4d4d4d80'/>
        </View>
        
        <Pressable style={styles.buttonRegister}>
          <Text style={styles.textButtonRegister}>REGISTRAR</Text>
        </Pressable>

        <View style={styles.termsUse}>
          <Text style={{fontSize: 13,}}>
            Ao clicar no botão "Registrar" você concorda e aceita os
            <Pressable>
              <Text style={styles.textLink}>
                Termos e Condições
              </Text>
            </Pressable>
            de uso do aplicativo.
          </Text>
        </View>
      </View>

      <View style={{flexDirection:'row', alignItems:'center', padding:20,}}>
        <View style={{flex: 1, height: 1, backgroundColor:'#fff'}} />
        <View>
          <Text style={{width: 180, textAlign:'center', color:'#fff'}}>Ou registre-se utilizando</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor:'#fff'}} />
      </View>

      <View style={styles.orRegister}>
        <Image source={google32} style={{width:32, height:32, marginBottom: 15}}/>
        <View>
          <Text style={{fontSize: 13,}}>
            Já possui uma conta?
            <Pressable>
              <Text style={styles.textLink}>
                Entrar
              </Text>
            </Pressable>
          </Text>
        </View>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  logopalavra: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  formRegister: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFFE6',
    borderRadius:15,
    padding: 20,
    marginTop: 20,
  },
  orRegister: {
    width: '100%',
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFFFFE6',
    borderRadius:15,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    height: 33,
    padding:15,
    margin:15
  },
  buttonRegister: {
    backgroundColor: "#EF691EC2",
    height: 48,
    width: '100%',
    borderRadius: 25,
    marginTop: 20,
    alignItems: "center",
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  textButtonRegister: {
    color: 'white',
    fontSize: 22,
    fontWeight: 500,
  },
  termsUse: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 20
  },
  textLink: {
    textDecorationLine:'underline',
    color:'blue',
    marginLeft: 1,
    marginRight: 1,
    fontSize: 13,
  },
  inputIcon: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }
});
