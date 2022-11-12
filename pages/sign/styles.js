import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
        marginTop: -21,
        backgroundColor: '#eaf0ed',
        alignItems: 'center',
        width: 317,
        height: 301,
        borderRadius: 20
    },
    user: {
        marginTop: 18,
        marginLeft: 24,
        backgroundColor: '#FFF',
        width: 227,
        height: 33,
        borderRadius: 5
    },
    password: {
        marginTop: 24,
        marginLeft: 24,
        backgroundColor: '#FFF',
        width: 227,
        height: 33,
        borderRadius: 5
    },
    fixLogin: {
        marginTop: 22,
        marginLeft: 24,
        width: 227
    },
    buttonLogin: {
        backgroundColor: '#EF691E',
        marginTop: 40,
        width: 258,
        height: 47,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLogin: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold'
    },
    textMissPass:{
        marginTop: 25,
        marginLeft: 140
    }
  });

  export default styles;