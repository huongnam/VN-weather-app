import React, { Component } from 'react';
import { View, StyleSheet, Picker, TextInput, Text } from 'react-native';
import data from '../city.list.json';

class CityPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { city: '' };
    this.handleChange = this.props.handleChange;
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.text_input}
          onChangeText={city => {
            this.setState({ city: city });
            this.handleChange(city);
          }}
          value={this.state.city}
        />
        <Picker
          style={styles.picker}
          mode="dropdown"
          selectedValue={this.state.city}
          onValueChange={city => {
            this.setState({ city: city });
            this.handleChange(city);
          }}>
          {data.map(item => {
            return (
              <Picker.Item label={item.name} value={item.name} key={item.id} />
            );
          })}
        </Picker>
      </View>
    );
  }
}
export default CityPicker;
const styles = StyleSheet.create({
  container: {
    width: '50%',
    alignSelf: 'center',
  },
  text_input: {
    height: 30,
    borderColor: 'pink',
    borderWidth: 1,
    backgroundColor: 'rgba(255,192,203, 0.5)',
  },
  picker: {
    height: 30,
    backgroundColor: 'rgba(255,192,203, 0.5)',
  },
});
