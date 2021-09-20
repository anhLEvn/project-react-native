// tout module ou composant exporter par defaut sera importer de la maniere suivante:
// import nomDuModule from 'chemin vers le fifier ou est defini le module / la librairie'
// tout module qui n'est pas exporter par defaut sera importer de la maniere suivante:
// import {nomDuModule} from 'chemin vers le fifier ou est defini le module / la librairie'

import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Test, { Bonjour, MyComponent, DireBonjour} from './components/Test'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Test />
      <Bonjour />
      <MyComponent arg1 = 'valeur de la propriete1' param ='valeur de paramettre'/>
      <DireBonjour nom = 'toto'/>
      <StatusBar style="auto" />
    </View>
  )
}

// export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

// dans un fichier il peut avoir qu'un seul expot part defaut
// si nous souhaitons creer plusieurs modules ou composants dans un fichier
// mis a part le module exporter par defaut tout les autres module doivent etre exporter de la  maniere suivante:
// export {module1, module2,...}
