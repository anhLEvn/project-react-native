import React from 'react'
import {FlatList, Text, View} from 'react-native'
export default function ContactFlatList(props) {


    return (
        <FlatList>        
    data = {[{"name":"MEYER Alexis"} ,
    {id: 1, name:"ANTUNEZ--CHEUNG Esteban"},
    {id: 1, name:"LE Thi Van Anh"},
    {id: 1, name:"STOCCO Thierry"},
    {id: 1, name:"JAOUEN Stéphane"},
    {id: 1, name:"BONJEAN Christophe"},
    {id: 1, name:"AYARI EP YOUSSEF Semeh"},
    {id: 1, name:"GACI Hamid"},
    {id: 1, name:"ALFANO Gérard"},
    {id: 1, name:"Bourourou Mariem"},
    {id: 1, name:"Medhi Lachoub"},
    {id: 1, name:"Abraham Ngom"}]}

    renderItem={({item}) => <View style={styles.listItem}>
    {item.name}</View>}
            

            
        </FlatList>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listItem: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    text: {
      fontSize: 20
    }
  });