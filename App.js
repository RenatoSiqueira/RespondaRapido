import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, TextInput } from 'react-native'


class App extends Component {
  state = {
    estado: 0
  }

  handleReset = () => {
    this.setState({
      estado: 0
    })
  }

  handleSelect = (text) => {
    this.setState({ estado: text === 'a' ? 1 : 2 })
    this.textInput.clear();
  }

  changeColor = (id) => {
    return id === 0
      ? 'white'
      : id === 1
        ? 'red'
        : 'blue'
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: this.changeColor(this.state.estado)
      }}>
        <TouchableWithoutFeedback
          onPress={() => this.handleReset()}

        >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
              ref={input => { this.textInput = input }}
              style={{ height: 1, color: this.changeColor(this.state.estado) }}
              onChangeText={(text) => this.handleSelect(text)}
              autoFocus={true}
            />
            <Text>{this.state.estado}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

export default App
