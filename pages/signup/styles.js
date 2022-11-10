import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
      width: '100%',
      backgroundColor: 'white',
      height: 33,
      padding:15,
      margin:15
    },
    buttonRegister: {
      backgroundColor: "#EF691EC2",
      height: 48,
      width: '100%',
      borderRadius: 25,
      marginTop: 20,
      alignItems: "center",
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: 1,
    },
    textButtonRegister: {
      color: 'white',
      fontSize: 22,
      fontWeight: 500,
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
      marginLeft: 1,
      marginRight: 1,
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
    }
  });
  
export default styles;