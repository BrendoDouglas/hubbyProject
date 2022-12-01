import * as React from 'react';
import { Text, View, Image, Pressable, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from "./styles";

import user64 from "../../assets/user64.png";
import pointer16 from "../../assets/pointer16.png";
import x16 from "../../assets/x16.png";
import star16 from "../../assets/star16.png";
import view24 from "../../assets/view24.png";
import addfile24 from "../../assets/addfile24.png";
import badge24 from "../../assets/badge24.png";
import bell24 from "../../assets/bell24.png";
import preferences24 from "../../assets/preferences24.png";
import lupa24 from "../../assets/lupa24.png";
import group24 from "../../assets/group24.png";
import info24 from "../../assets/info24.png";
import question24 from "../../assets/question24.png";
import settings24 from "../../assets/settings24.png";

export default function UserProfile({ navigation: { goBack, navigate } }) {
  return (
    
    <LinearGradient
      colors={['#014442', '#78A967']}
      start={{x: 0, y: 0}}
      end={{x:1, y:1}}
      style={{flex:1,}}>
      <ScrollView>
      <View style={{padding:"10%"}}>
      <View style={{alignItems:'flex-start'}}>
        <Pressable onPress={() => goBack()}>
          <Image source={x16} style={{width:24, height:24}}/>
        </Pressable>
      </View>

      <View style={styles.container}>
        <Image source={user64} style={{width:64, height:64}}/>
        <Text style={styles.titleWhite}>Aline de Campos</Text>
        <View style={styles.vImageText}>
          <Image source={pointer16} style={{width:16, height:16,}}/>
          <Text style={styles.textWhite}> Porto Alegre, RS </Text>
        </View>
        <View style={styles.vImageText}>
          <Image source={star16} style={{width:16, height:16}}/>
          <Text style={[styles.textWhite, {fontSize:18}]}> 5.0 </Text>
        </View>
      </View>

      <View style={{flex:1}}>
        <Pressable style={styles.Pressable}>
          <Image source={view24} style={{width:24, height:24}}/>
          <Text style={styles.textButton}>Ver Histórico de atividade</Text>
        </Pressable>
        <Pressable style={styles.Pressable}>
          <Image source={addfile24} style={{width:24, height:24}}/>
          <Text style={styles.textButton}>Criar evento</Text>
        </Pressable>
        <Pressable style={styles.Pressable}>
          <Image source={badge24} style={{width:24, height:24}}/>
          <Text style={styles.textButton}>Avaliar usuários recentes</Text>
        </Pressable>
        <Pressable style={styles.Pressable}>
          <Image source={bell24} style={{width:24, height:24}}/>
          <Text style={styles.textButton}>Notificações</Text>
        </Pressable>
        <Pressable style={styles.Pressable}>
          <Image source={preferences24} style={{width:24, height:24}}/>
          <Text style={styles.textButton}>Preferências</Text>
        </Pressable>
        <Pressable style={styles.Pressable}>
          <Image source={lupa24} style={{width:24, height:24}}/>
          <Text style={styles.textButton}>Buscar sala</Text>
        </Pressable>
        <Pressable style={styles.Pressable}>
          <Image source={group24} style={{width:24, height:24}}/>
          <Text style={styles.textButton}>Amigos</Text>
        </Pressable>
        <Pressable style={styles.Pressable}>
          <Image source={info24} style={{width:24, height:24}}/>
          <Text style={styles.textButton}>Sobre</Text>
        </Pressable>
        <Pressable style={styles.Pressable}>
          <Image source={question24} style={{width:24, height:24}}/>
          <Text style={styles.textButton}>Ajuda</Text>
        </Pressable>
        <Pressable style={styles.Pressable}>
          <Image source={settings24} style={{width:24, height:24}}/>
          <Text style={styles.textButton}>Configurações</Text>
        </Pressable>
      </View>
      </View>
      </ScrollView>
    </LinearGradient>
  );
};
