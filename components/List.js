import React from 'react';
import {Text} from 'react-native'; 


export default function List(props) {
    return (
        <View>
            <Text>Bonjour {props.nom}</Text>
        </View>
       
    )
}
