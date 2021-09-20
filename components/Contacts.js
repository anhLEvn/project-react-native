
import React, { useState } from 'react';
import {View} from 'react-native'; 
import List from './List'; 

export default function Contacts({contact}) {
    const [listContact, setListContact] = useState([
        "MEYER Alexis",
        "ANTUNEZ--CHEUNG Esteban",
        "LE Thi Van Anh",
        "STOCCO Thierry",
        "JAOUEN Stéphane",
        "BONJEAN Christophe",
        "AYARI EP YOUSSEF Semeh",
        "GACI Hamid",
        "ALFANO Gérard",
        "Bourourou Mariem",
        "Medhi Lachoub",
        "Abraham Ngom"
        ])
        
    return (
        <View>
            {
                listContact.map((item,id =0) => ( 
                    <List 
                    key = {id} 
                    nom = {item}

                    />))
            }
        </View>
    )
    
}
