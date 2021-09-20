// importation des dependances cad les module qu'on souhaite utiliser dans le composant en cours de creation.
import React from 'react'; // cette bibliotheque permet la creation de nos composant
import {View, Text} from 'react-native';

// le nom du fichier et le nom du composant ne sont pas lier donc on peut avoir un composant qui ne porte pas le meme nom que le fichier dans lequel il est defini.
// le nom du composant doit avoir sa premiere lettre en majuscule

// creation et exportation du composants
export default function Test(){
  // dans le corp d'un composant de type fonction il y a un return qui correspond à la description du composant cad ce qu'on souhaite afficher sur l'ecran de l'utilisateur.
  return(
    <View>
      <Text>Composant Test</Text>
    </View>
  )
}

// definition du style du composant


// une fois le composant terminer il peut etre utiliser dans tout autre composant
// il suffi juste de l'importer dans le fichier en question


// creation d'un autre composant
function Bonjour() {
  return(
    <View>
      <Text>Bonjour le monde!</Text>
    </View>
  )
}


function MyComponent(props){
    return (
        <View>
            <Text>{props.arg1}{props.param1}</Text>
        </View>
    )
}
function DireBonjour(nom){
    return (
        <View>
            <Text>{nom}</Text>
        </View>
    )
}
export {Bonjour,MyComponent, DireBonjour}