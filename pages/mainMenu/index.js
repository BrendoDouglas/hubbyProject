import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';

import user64 from "../../assets/user64.png";
import pointer16 from "../../assets/pointer16.png";
import star16 from "../../assets/star16.png";
import menu from "../../assets/menu.png";
import people from "../../assets/people.png";
import categoryImg from "../../assets/category.png";
import barDoZe from "../../assets/estabelecimentos/barDoZe.jpg";
import careca from "../../assets/estabelecimentos/careca.png";
import basqueteOrla from "../../assets/estabelecimentos/basqueteOrla.jpg";

const DATA = [
  {
    id: '1',
    img: barDoZe,
    nameEstablishment: 'Bar do seu Zé',
    distance: 1,
    category: 'baralho',
    events: 1
  },
  {
    id: '2',
    img: basqueteOrla,
    nameEstablishment: 'Basquete na orla',
    distance: 20,
    category: 'Basquete',
    events: 2
  },
  {
    id: '3',
    img: careca,
    nameEstablishment: 'Reunião dos carecas',
    distance: '???',
    category: '??????????????????',
    events: '???'
  },
];
const Establishment = ({ img, nameEstablishment, distance, category, events }) => (
  <View style={[styles.item,{overflow:'scroll'} ]}>
    <Image source={img} style={{width:60,height:60}}/>
    <View style={{marginLeft:10, flex:1}}>
      <Text style={styles.title}>{nameEstablishment}</Text>
      <View style={[styles.horizontalContainer, {flex:1, display:'flex'}]}>
        <View style={[styles.horizontalContainer, {flex:3, flexWrap:'wrap'}]}>
          <Image source={pointer16} style={{width: 16,height:16,}}/>
          <Text style={{fontSize:13}}>{distance}km</Text>
        </View>
        <View style={[styles.horizontalContainer, {flex:6, flexWrap:'wrap'}]}>
          <Image source={categoryImg} style={{width: 16,height:16, marginRight:1}}/>
          <Text style={{fontSize:13}}>{category}</Text>
        </View>
        <View style={[styles.horizontalContainer, {flex:4, flexWrap:'wrap'}]}>
          <Image source={people} style={{width: 16,height:16, marginRight:4}}/>
          <Text style={{fontSize:13}}>eventos: {events}</Text>
        </View>
      </View>
    </View>
  </View>
);

export default function MainMenu({ navigation: { goBack, navigate } }) {

  const renderItem = ({ item }) => (
    <Establishment 
      img={item.img}
      nameEstablishment={item.nameEstablishment}
      distance={item.distance}
      category={item.category}
      events={item.events}
     />
  );

  return (
    <LinearGradient
      colors={['#014442', '#78A967']}
      start={{x: 0, y: 0}}
      end={{x:1, y:1}}
      style={{flex:1}}>
        
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
        <View style={{flex:1, justifyContent:'flex-start', alignItems:'flex-end', marginTop: 20}}>
          <Pressable onPress={() => navigate('UserProfile')}>
          <Image source={menu} style={{width:24, height:24}}/>
          </Pressable>
        </View>
      </View>

      <View style={styles.mapContainer}>
        <MapView style={styles.map} />
      </View>

      <View style={{flex:1,}}>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={Establishment => Establishment.id}
        />
      </View>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#D9D9D9',
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 6,
    flexDirection:'row',
    borderRadius: 10
  },
  title: {
    fontSize: 25,
  },
  mapContainer: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  horizontalContainer: {
    flexDirection: 'row',
  },
  verticalContainer: {
    flexDirection: 'column',
  },
  header: {
    padding: '10%',
    paddingBottom: 0,
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
