import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import user64 from "../../assets/user64.png";
import pointer16 from "../../assets/pointer16.png";
import star16 from "../../assets/star16.png";
import menu from "../../assets/menu.png";
import UserProfile from '../userProfile';

export default function MainMenu({ navigation: { goBack, navigate } }) {
  return (
    <LinearGradient
      colors={['#014442', '#78A967']}
      start={{x: 0, y: 0}}
      end={{x:1, y:1}}
      style={{flex:1, padding:'10%'}}>
        
      <View style={styles.header}>
        <View style={[styles.verticalContainer, {alignItems:'center'}]}>
          <Image source={user64} style={{width:64, height:64}}/>
          <View style={styles.vImageText}>
            <Image source={star16} style={{width:16, height:16}}/>
            <Text style={[styles.textWhite, {fontSize:16, marginTop:5}]}> 5.0 </Text>
          </View>
        </View>
        <View style={[styles.verticalContainer, {justifyContent:'flex-end'}]}>
          <Text style={[styles.titleWhite, {fontSize:24, marginLeft:15}]}>Aline de Campos</Text>
          <View style={[styles.vImageText, {marginBottom:5, marginTop:5}]}>
            <Image source={pointer16} style={{width:24, height:24,}}/>
            <Text style={[styles.textWhite, {fontSize:18}]}> Porto Alegre, RS </Text>
          </View>
        </View>
        <View style={{flex:1, justifyContent:'flex-start'}}>
          <Pressable onPress={() => navigate('UserProfile')}>
          <Image source={menu} style={{width:24, height:24, alignSelf:'flex-end', marginTop: 20}}/>
          </Pressable>
        </View>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalContainer: {
    flexDirection: 'column',
    alignContent: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  textWhite: {
    color: "white",
    padding: 2,
  },
  titleWhite: {
    color: "white",
    padding: 2,
    fontSize: 22,
    fontWeight: "500"
  },
  vImageText: {
    flexDirection:'row',
    alignItems: "center",
  },
});
