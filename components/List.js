import React from "react";
import {Text,View, StyleSheet} from "react-native";

export default function Liste(props){
  return(
    <View style={styles.liste}>
      <Text >{props.nom}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  liste:{
    height: 30,
    borderWidth: 1,
    alignItems: 'center',
    // textAlign: 'center',
    backgroundColor: "grey",
    width: "90%",
    marginTop: 20
  }
})