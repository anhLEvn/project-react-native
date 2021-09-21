import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";

export default function Form(){
  const [login, setLogin] = useState('');

  const handleLogin = (val) => {
    // console.log(val);
    setLogin(val);
    console.log(login)
  }
  return(
    <View style={styles.container}>
      <Text>Formulaire</Text>
      <TextInput
        style={styles.input}
        placeholder="Login"
        onChangeText={(e) => handleLogin(e)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:"100%",
    alignItems: 'center',
  },
  input:{
    width:"90%",
    height: 45,
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 5
  }
})