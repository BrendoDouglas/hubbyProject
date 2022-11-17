import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bold: {
        fontWeight: '600',
    },
    input: {
      width: '85%',
      backgroundColor: 'white',
      height: 33,
      paddingLeft:15,
      margin:15
    },
    inputIcon: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    lineSeparator: {
        flex: 1,
        height: 1,
        backgroundColor:'#fff'
    },
    textLink: {
        textDecorationLine:'underline',
        color:'blue',
        fontSize: 13,
    },
    orLogin: {
        width: '100%',
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFFE6',
        borderRadius:15,
    },
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logopalavra: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    titleLogo: {
        fontSize:40,
        color: 'white',
        marginLeft:10
    },
    formLogin: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFFE6',
      borderRadius:15,
      padding: 20,
      marginTop: 20,
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
        marginLeft: 10,
        width: 227
    },
    buttonLogin: {
        backgroundColor: '#EF691E',
        marginTop: 30,
        width: 258,
        height: 47,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'black',
        borderWidth:1
    },
    textLogin: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },
  });

  export default styles;