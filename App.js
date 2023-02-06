import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';


export default function App() {

  const image = require('./resources/bg.jpg');
  console.disableYellowBox = true;

  const [tarefas, setarTarefas] = useState([
    {
      id: 1,
      tarefa: 'Minha Tarefa 1.'
    },
    {
      id: 2,
      tarefa: 'Minha outra tarefa...'

    },
    {
      id: 3,
      tarefa: 'Minha outra tarefa...'

    },
    
  ])


  let [fontsLoaded] = useFonts({
    Bangers_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function deletarTarefa(id) {
    alert('Tarefa com ID '+ id + ' foi deletada com sucesso!')
    //TODO: deletar do array/estado a tarefa com id especificado!

    let newTarefas = tarefas.filter(function(val){
      return val.id != id;
    });

      setarTarefas(newTarefas);
  }


  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar hidden />
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.coverView}>
          <Text style={styles.textHeader}>Segundo APP - Lista de Tarefas</Text>
        </View>
      </ImageBackground>

      {
        tarefas.map(function (val) {
          return (<View style={styles.tarefaSingle}>
            <View styles={{ flex: 1, width: '100%', padding: 10, }}>
              <Text> {val.tarefa}</Text>
            </View>
            <View style={{ alignItems: 'flex-end', flex: 1, padding: 5 }}>
              <TouchableOpacity onPress={() => deletarTarefa(val.id)}><AntDesign name="closecircle" size={24} color="black" /></TouchableOpacity>
            </View>
          </View>);
        })
      }
    </ScrollView>
  );

};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 80,
    resizeMode: 'cover',
  },
  coverView: {
    width: "100%",
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  textHeader: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    marginTop: 20,
    fontFamily: 'Bangers_400Regular',
  },
  tarefaSingle: {
    marginTop: 30,
    width: '100%',
    borderBottomWidth: 3,
    borderBottomColor: '#aaaa',
    flexDirection: 'row',
    paddingBottom: 10,


  }
})
