// importation des dependances
import React, {useState} from 'react';
import Liste from './List';
import {View, StyleSheet} from 'react-native';


// declaration et exportation du composant
export default function Contacts(){
  // declaration de la variable d'etat
  const [listeContact, setListeContact] = useState([
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
  ]);

  return(
    <View style={styles.container}>
      {
        listeContact.map((contact, id = 0) => {
          {id = id + 1}
          return(
            <Liste key={id} nom={contact}/>
          )          
        })
      }
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: 'center',
  }
})


// chaque element d'une liste doit avoir une clef unique d'ou l'attribut key dans le composant Liste.

// ajouter du style pour la liste des contacts de tel sorte que chaques element de la liste ai une bordure et ocupupe la largeur total de l'ecran mettre des marges entre les elements