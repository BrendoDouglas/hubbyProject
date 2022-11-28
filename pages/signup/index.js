import * as React from 'react';
import { Text, View, Image, TextInput, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from "./styles";

import logo from "../../assets/logo.png";
import google32 from "../../assets/google32.png";
import person24 from "../../assets/person24.png";
import lock24 from "../../assets/lock24.png";
import email24 from "../../assets/email24.png";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase-auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './Firebase/firebaseConfig';

export default function Signup({ navigation: { goBack, navigate } }) {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth,email,password)
    .then(() => {
      console.log('Account Created!')
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <LinearGradient
      colors={['#014442', '#78A967']}
      start={{x: 0, y: 0}}
      end={{x:1, y:1}}
      style={{ padding: 40, flex: 1}}>

      <View style={styles.logopalavra}>
        <Image source={logo} style={{width:64, height:64}}/>
        <Text style={styles.titleLogo}>
          <Text style={styles.bold}>HUB</Text>
          by
        </Text>
      </View>

      <View style={styles.formRegister}>
        <View style={styles.inputIcon}>
          <Image source={person24} style={{width:24, height:24}}/>
          <TextInput placeholder='Usuario' style={styles.input} placeholderTextColor='#4d4d4d80'/>
        </View>
        <View style={styles.inputIcon}>
          <Image source={email24} style={{width:24, height:24}}/>
          <TextInput onChangeText={(text) => setEmail(text)} placeholder='E-mail' style={styles.input} placeholderTextColor='#4d4d4d80'/>
        </View>
        <View style={styles.inputIcon}>
          <Image source={lock24} style={{width:24, height:24}}/>
          <TextInput onChangeText={(text) => setPassword(text)} placeholder='Senha' style={styles.input} placeholderTextColor='#4d4d4d80'/>
        </View>
        
        <Pressable style={styles.buttonRegister} onPress={() => navigate('MainMenu')}>
          <Text style={styles.textButtonRegister}>REGISTRAR</Text>
        </Pressable>

        <View style={styles.termsUse}>
          <Text style={{fontSize: 13,}}>
            Ao clicar no botão "Registrar" você concorda e aceita os <Text style={styles.textLink} onPress={handleCreateAccount}>
              Termos e Condições</Text> de uso do aplicativo.
          </Text>
        </View>
      </View>

      <View style={{flexDirection:'row', alignItems:'center', padding:20,}}>
        <View style={styles.lineSeparator} />
        <View>
          <Text style={{width: 180, textAlign:'center', color:'#fff'}}>Ou registre-se utilizando</Text>
        </View>
        <View style={styles.lineSeparator} />
      </View>

      <View style={styles.orRegister}>
        <Image source={google32} style={{width:32, height:32, marginBottom: 15}}/>
        <View>
          <Text style={{fontSize: 13}}>
            Já possui uma conta? <Text onPress={() => navigate('Sign')} style={styles.textLink}>Entrar</Text>
          </Text>
        </View>
      </View>

    </LinearGradient>
  );
}

