import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,

} from 'react-native';


const App = () => {

  const [numero, setNumero] = useState(10)
  function handleNumero() {
    const novo_numero = Math.floor(Math.random() * 10)
    setNumero(novo_numero)
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.numero}> {numero}</Text>
        <View>
        <TouchableOpacity style={styles.botao} onPress={handleNumero}>
          <Text>Hello world!</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0000',
    fontSize: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  numero: {
    fontSize: 38,
    color: '#ff0',
    fontWeight: 'bold',


  },
  botao: {
    paddingVertical: 20,
    paddingHorizontal:20,
    backgroundColor: '#fff001',
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginTop: 30,



  },


})
export default App;
