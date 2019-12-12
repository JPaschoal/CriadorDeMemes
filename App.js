import React from 'react'
import { Component } from 'react'
import { View, StyleSheet, Text, TextInput, Image } from 'react-native'

export default class CriadorDeMeme extends Component {

  constructor(props) {
    super(props)
    this.state = { texto1: '', texto2: '' }

    this.escrever = this.escrever.bind(this)
  }

  mudarVogais(texto) {
    let novoTexto = texto.toLowerCase()
    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g, 'i')
    novotexto = novoTexto.replace(/(á|è|ã|â)/g, 'i')
    novotexto = novoTexto.replace(/(í|ì|î)/g, 'i')
    novotexto = novoTexto.replace(/(ó|ò|ô)/g, 'i')
    novotexto = novoTexto.replace(/(ú|ù|û)/g, 'i')
    return novoTexto
  }

  escrever(texto) {
    let aux = this.state
    aux.texto1 = texto
    aux.texto2 = this.mudarVogais(texto)
    this.setState(aux)
  }

  render() {
    return (
      <View style={style.body}>
        <View>
          <Text style={style.title}>Criador de Mimimi</Text>
        </View>
        <View style={style.inputArea}>
          <TextInput style={style.input} placeholder="Digite seu mimimi" onChangeText={this.escrever} />
        </View>
        <View style={style.area}>
          <Text style={style.texto}>{this.state.texto1.toUpperCase()}</Text>
          <Image style={style.menino} source={require('./IMGs/mimimi.jpeg')} />
          <Text style={[style.texto, style.textoBaixo]}>{this.state.texto2.toUpperCase()}</Text>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  body: {
    paddingTop: 30,
    backgroundColor: '#999999',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    color: '#fff'
  },
  inputArea: {
    alignSelf: 'stretch'
  },
  input: {
    borderWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#eeeeee',
    height: 40,
    margin: 20,
    padding: 10,
  },
  area: {
    height: 300,
    width: 300,
    marginTop: 10
  },
  menino: {
    width: 300,
    height: 300,
    marginTop: -70,
    zIndex: 0
  },
  texto: {
    fontSize: 25,
    color: '#ffffff',
    padding: 10,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 60,
    zIndex: 1
  },
  textoBaixo: {
    marginTop: -70
  }
})