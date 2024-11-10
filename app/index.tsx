import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Capa from '@/assets/images/capa.png';

export default function Index() {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Guerra do Amanhã</Text>
      <Text style={ estilos.descricao }>Gêneros: Ação e ficção</Text>

      <Image
        source={ Capa }
        style={ estilos.img }
      />

    </View>
  );
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 22,
    width: 250,
  },
  descricao: {
    marginBottom: 20,
    width: 200,
  },

  img: {
    width: 300,
    height: 300,
  },

});

/*
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
*/