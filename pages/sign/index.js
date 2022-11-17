import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native';

import Checkbox from 'expo-checkbox';

import React, { useState } from 'react'
import styles from './styles'

import logo from "../../assets/logo.png";
import google32 from "../../assets/google32.png";
import person24 from "../../assets/person24.png";
import lock24 from "../../assets/lock24.png";

export default function Login({ navigation: { goBack, navigate } }){

    const [isChecked, setChecked] = useState(false);

    return(
        <LinearGradient 
            colors={['#014442', '#78A967']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{ padding: 40, flex: 1}}>
             
            <View style={styles.logopalavra}>
                <Image source={logo} style={{width:64, height:64}}/>
                <Text style={styles.titleLogo}>
                <Text style={styles.bold}>HUB</Text>
                by
                </Text>
            </View>

            <View style={styles.formLogin}>
                
                <View style={styles.inputIcon}>
                    <Image source={person24} style={{width:24, height:24}}/>
                    <TextInput placeholder='Usuario' style={styles.input} placeholderTextColor='#4d4d4d80'/>
                </View>
                    
                <View style={styles.inputIcon}>
                    <Image source={lock24} style={{width:24, height:24}}/>
                    <TextInput placeholder='Senha' style={styles.input} placeholderTextColor='#4d4d4d80'/>
                </View>
                <View style={{flexDirection:'row', alignSelf:'flex-start', marginTop:10}}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? 'black' : undefined}/>
                    <Text style={styles.fixLogin}>Manter Conectado</Text>
                </View>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.textLogin}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf:'flex-end', marginTop: 15}}>
                    <Text>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </View>
            

            <View style={{flexDirection:'row', alignItems:'center', padding:20,}}>
                <View style={styles.lineSeparator} />
                <View>
                <Text style={{width: 140, textAlign:'center', color:'#fff'}}>Ou entre utilizando</Text>
                </View>
                <View style={styles.lineSeparator} />
            </View>

            <View style={styles.orLogin}>
                <Image source={google32} style={{width:32, height:32, marginBottom: 15}}/>
                <View>
                <Text style={{fontSize: 13}}>
                    Não possui uma conta? <Text onPress={() => navigate("Signup")} style={styles.textLink}>Registrar</Text>
                </Text>
                </View>
            </View>

        </LinearGradient>
    );
};