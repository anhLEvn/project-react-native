import React from "react";
import { FlatList, Text} from "react-native";

export default function Flat(){
  return(
    <FlatList>data={[
        {name : "toto"},
        {name : "tata"},
        {name : "titi"},
        {name : "tutu"},
    ]}
    renderItem={({item}) => <Text>{item.name}</Text>}
  </FlatList>
      
  )
}