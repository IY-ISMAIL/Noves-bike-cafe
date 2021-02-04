import React, { useRef } from 'react';
import { Button } from 'react-native';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView
} from 'react-native';
import { Modalize } from 'react-native-modalize';

export default function App({navigation}) {

  // return (
  //   <SafeAreaView>
  //     <View style={styles.header}>
  //       <Text>ISMAIL YOUNES</Text>
  //     </View>
  //   </SafeAreaView>
  // )


  const modalizeRef = useRef(null);


  function Modal1() {
    return (
      <Modalize
        ref={modalizeRef}
        snapPoint={180}
      >
        <View style={styles.modal}>
          <Text>CONTEUDO 1</Text>

        </View>

      </Modalize>

    )
  }

  function Modal2() {
    return (
      <Modalize
        ref={modalizeRef}
        snapPoint={300}
      >
        <View style={styles.modal}>
          <Text>CONTEUDO 2</Text>

        </View>

      </Modalize>

    )
  }

  function Modal3() {
    return (
      <Modalize
        ref={modalizeRef}
        snapPoint={300}
      >
        <View style={styles.modal}>
          <Text>CONTEUDO 3</Text>

        </View>

      </Modalize>

    )
  }

  function Modal4() {
    return (
      <Modalize
        ref={modalizeRef}
        snapPoint={180 }
      >
        <View style={styles.modal}>
          <Text style={styles.modalText}>AQUECIMENTO</Text>
        </View>

        <View style={styles.modal}>
          <Text style={styles.modalText}>AJUSTAMENTO 01</Text>
        </View>

        <View style={styles.modal}>
          <Text style={styles.modalText}>AJUSTAMENTO 02</Text>
        </View>

        <View style={styles.modal}>
          <Text style={styles.modalText}>AJUSTAMENTO 03</Text>
        </View>

      </Modalize>

    )
  }

  function onOpen() {
    modalizeRef.current?.open();
  }

  return (

    <View style={styles.container}>

      <TouchableOpacity style={styles.botao} onPress={onOpen}>
        <Text style={styles.botaoText}>TREINO 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={onOpen}>
        <Text style={styles.botaoText}>TREINO 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={onOpen}>
        <Text style={styles.botaoText}>TREINO 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={onOpen}>
        <Text style={styles.botaoText}>TREINO 4</Text>
      </TouchableOpacity>

      <Modal1 />
      <Modal2 />
      <Modal3 />
      <Modal4 />


      <Button title="treinador" onPress={()=> navigation.push("Treinador")}/>

    </View>

  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#293A2E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modal: {
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "orange",
    borderColor: "orange",
    borderWidth: 1,
    borderRadius: 5,
    margin: 15
  },

  modalText: {
    color: '#fff',
    marginBottom: 50,
    fontWeight: "bold"
  },

  botao: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    fontWeight: "bold",
    padding: 15,
    borderRadius: 5,
    marginBottom: 50
  },

  botaoText: {
    fontWeight: "400",
    fontSize: 20,


  }
});