import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import foto from './Assets/foto.jpg';


const App = () => {
  return (
    <>
      <View style={styles.page}>
        <View style={styles.container_cabecalho}>
          <Image source={foto} style={styles.foto} />
          <Text style={styles.nome}>Raquel matos</Text>
          <Text>Desenvolvedora</Text>
          <View style={styles.funcao}>
          <Text >GitHub</Text>
          <Text >Linkedin</Text>
          <Text >Instagram</Text>
          </View>
        </View>
      </View>
    </>
  );

};

const styles = StyleSheet.create({

  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  foto: {
    width: 250,
    height:250,
    borderRadius:120,

  },
  nome: {
    fontSize:32,
    fontWeight: 'bold',
    
  },
  funcao: {
    color:'white',
  },

})


export default App;
