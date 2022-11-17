import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bold: {
      fontWeight: '600',
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
      width: '85%',
      backgroundColor: 'white',
      height: 33,
      paddingLeft:15,
      margin:15
    },
    buttonRegister: {
        backgroundColor: '#EF691E',
        marginTop: 10,
        width: 258,
        height: 47,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'black',
        borderWidth:1
    },
    textButtonRegister: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
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
      fontSize: 13,
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
  });
  
export default styles;