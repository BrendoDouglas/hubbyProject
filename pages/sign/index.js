import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react'
import styles from './styles'

export default function Login(){
    return(
        <LinearGradient 
            style={styles.background}
            colors={['#014442', '#78A967']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}    
        >
             
            <View style={styles.container}>
                <View style={styles.user}>
                    
                </View>
                <View style={styles.password}>

                </View>
                <Text style={styles.fixLogin}>Manter Conectado</Text>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.textLogin}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textMissPass}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </View>      
      </LinearGradient>
    );
};