import React from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView } from 'react-native';
import foto from './Assets/foto.jpg';
import Icon from 'react-native-vector-icons/Feather';


const colorRedes = '#fff';
const colorPrimary = '#010409';
const colorSecondary = '#010409';
const colorTextDark = '#010409';
const colorText = '#BEBEBE';
const App = () => {
  return (
    <>
      <View style={styles.page}>
        <View style={styles.container_cabecalho}>
          <Image source={foto} style={styles.foto} />
          <Text style={styles.nome}>Raquel matos</Text>
          <Text style={styles.funcao}>Desenvolvedora</Text>
          <View style={styles.redes_sociais}>
            <Icon name="github" size={30} />
            <Icon name="linkedin" size={30} />
            <Icon name="instagram" size={30} />
          </View>
        </View>
        <View style={styles.card_container}>
          <View style={styles.card}>
            <View style={styles.card_header}>
              <Text style={styles.title}> Eperiência Profissional</Text>
            </View>
            <View style={styles.card_content}></View>
            <View style={styles.descricao}>
              <Text > Analista desenvolvedora - Mercantil do Brasil</Text>
              <Text > Banco de dados, JS, .NET</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.card_header}>
              <Text style={styles.title}> Conhecimentos</Text>
            </View>
            <View style={styles.card_content}></View>
            <View style={styles.descricao}>
            <Text > - JavaScript</Text>
            <Text > - Python</Text>
            <Text > - SQL</Text>
            <Text > - .Net</Text>
            <Text > - Shell Script</Text>


            </View>
          </View>
        </View>
      </View>
    </>
  );

};

const styles = StyleSheet.create({

  page: {
    backgroundColor: '#6644e5',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,

  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 120,
    borderColor: '#fff',
    borderWidth: 1,

  },
  nome: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',

  },
  funcao: {
    color: colorText,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    Color: colorRedes,
    marginTop: 15,
  },
  card: {
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#21bcd1',
    marginHorizontal: '5%',
    marginVertical: '3%',


  },
  card_container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },
  card_header: {
    borderBottomColor: '#black',
    borderBottomWidth: 0.5,



  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 15,

  },
  descricao: {
    fontSize: 13,
    margin: 10,
    marginBottom: 20,
    alignItems: 'center',

  }

})


export default App;
