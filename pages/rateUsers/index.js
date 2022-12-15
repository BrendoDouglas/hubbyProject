import * as React from 'react';
import { Text, View, Image, Pressable, FlatList, ScrollView } from 'react-native';
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
import menu from "../../assets/menu.png";
import people from "../../assets/people.png";
import categoryImg from "../../assets/category.png";
import barDoZe from "../../assets/estabelecimentos/barDoZe.jpg";
import careca from "../../assets/estabelecimentos/careca.png";
import basqueteOrla from "../../assets/estabelecimentos/basqueteOrla.jpg";


const DATA = [
  {
    id: '1',
    img: user64,
    nameUser: 'André Soares',
    stars: 5
  },
  {
    id: '2',
    img: user64,
    nameUser: 'Paulo Souza',
    stars: 5
  },
  {
    id: '3',
    img: user64,
    nameUser: 'Rodrigo Santana',
    stars: 5
  },
];

function barrinha()
{
  for (let i = 0; i < DATA.length; i++) {
    <View style={{overflow:'scroll', flex:1}}>
      <Image source={DATA[i].img} style={{width:60,height:60, backgroundColor:'white'}}/>
      <View style={{marginLeft:10, flex:1}}>
        <Text style={{color:'white'}}>{DATA[i].nameUser}</Text>
        <View style={[styles.horizontalContainer, {flex:1, display:'flex'}]}>
        </View>
      </View>
    </View>
    
  }
};


export default function RateUsers({ navigation: { goBack, navigate } }) {
  

  return (
    
    <LinearGradient
      colors={['#014442', '#78A967']}
      start={{x: 0, y: 0}}
      end={{x:1, y:1}}
      style={{flex:1,}}>
      <ScrollView>
      <View style={{padding:"10%"}}>

      <View style={{flexDirection:'row', paddingHorizontal:20}}>
        <Pressable style={{justifyContent:'center',}} onPress={() => goBack()}>
          <Image source={x16} style={{width:24, height:24}}/>
        </Pressable>
        <View style={{flex:1, marginLeft:-15, alignItems:'center'}}>
        <Text style={styles.titleWhite}>Avaliar usuários recentes</Text>
        </View>
      </View>

      <View style={{flex:1, backgroundColor:"black", marginTop:15, padding:15, borderRadius:15}}>
        <Text style={{color:"white"}}>Último contato: 05/11/2022</Text>
        
        <View style={{flex:1,}}>
        {barrinha()}
        </View>
        <Pressable style={{alignItems:'center'}}><Text style={{color:"white"}}>Seta</Text></Pressable>
      </View>

      </View>
      </ScrollView>
    </LinearGradient>
  );
};
