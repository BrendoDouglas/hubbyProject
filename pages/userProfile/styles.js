import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    },
    Pressable: {
      backgroundColor: "#D9D9D94D",
      height: 45,
      borderRadius: 5,
      margin: 4,
      flexDirection: "row",
      alignItems: "center",
      padding: 15
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
    textButton: {
      color: "#FFFFFFdd",
      padding: 15
    },
    vImageText: {
      flex:1,
      flexDirection:'row',
      alignItems: "center",
    },
    semiBold: {
      fontWeight: "500",
    },
});

export default styles;