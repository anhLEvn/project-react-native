// tout module ou composant exporter par defaut sera importer de la maniere suivante:
// import nomDuModule from 'chemin vers le fifier ou est defini le module / la librairie'
// tout module qui n'est pas exporter par defaut sera importer de la maniere suivante:
// import {nomDuModule} from 'chemin vers le fifier ou est defini le module / la librairie'
// pour importer des composants definis dans un meme fichier on peut le le faire sur une seul ligen comme suivant:
// import Composant, {Composant1, Composant2} from 'fichier / bibliotheque'
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Test, {Bonjour, MonComposant, DireBonjourNom } from './components/Test';
// import {Bonjour} from './components/Test';
import Contacts from './components/Contacts'
import Flat from './components/Flat'

export default function App() {
  // la declaration de la variable d'etat se fait sous forme de tableau contenant la variable elle meme et la fonction permettant de manipuler la variable.
  const [noms, setNoms] = useState(["toto", "tata", "titi"]);
  return (
    <View style={styles.container}>
      {/* <Test/>
      <Bonjour/>
      <MonComposant arg="valeur de la propriete" param1="second paramettre"/>
      <StatusBar style="auto" /> */}
      {/* {
        noms.map(nom => (<DireBonjourNom nom={nom}/>))
      } */}
      <Contacts/>
      {/* <Scroll/> */}
      {/* <Flat/>
      <View style={styles.top}>
        <Text style={styles.text}>Top</Text>
      </View>
      <View style={styles.bottom}>
        <Text>Bottom</Text>
      </View> */}
    </View>
  );
}

// export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top:{
    flex: 2,
    backgroundColor: "blue",
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom:{
    flex: 1,
    backgroundColor: "yellow",
    width: '100%',
  },
  text:{
    fontSize: 60
  }
});

// dans un fichier il peut avoir qu'un seul expot part defaut
// si nous souhaitons creer plusieurs modules ou composants dans un fichier
// mis a part le module exporter par defaut tout les autres module doivent etre exporter de la  maniere suivante:
// export {module1, module2,...}


// une propriete est l'equivalent d'un argument pour une fonction
// function maFonction(arg){
//   console.log(arg);
// }

{/* <MonComposant arg="valeur de la propriete"/> */}

{/* <button>{props.name}</button> */}

// pour gerer un etat dans un composant de type fonction on import le module useState de la bibliotheque 'react'
// l'est correspond à un objet on on enregistre des données et elle est locale c a d elle appartient au composant qui l'implemente