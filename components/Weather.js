import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
class Weather extends React.Component {
  getImage = () => {
    if (!this.props.city) {
      return require('../assets/light-rain.jpg');
    }
  };
  render() {
    return (
      <View style={styles.weather}>
        <Text style={styles.city}>
          {this.props.city && <Text>{this.props.city}</Text>}
        </Text>
        <Text style={styles.description}>
          {this.props.description && <Text>({this.props.description})</Text>}
        </Text>
        <Text style={styles.info}>
          {this.props.temperature && (
            <Text>Temperature: {this.props.temperature}°C</Text>
          )}
        </Text>
        <Text style={styles.info}>
          {this.props.pressure && <Text>Pressure: {this.props.pressure}hpa</Text>}
        </Text>
        <Text style={styles.info}>
          {this.props.humidity && <Text>Humidity: {this.props.humidity}%</Text>}
        </Text>

        <Text style={styles.error}>
          {this.props.error && <Text>{this.props.error}</Text>}{' '}
        </Text>
      </View>
    );
  }
}

export default Weather;
const styles = StyleSheet.create({
  weather: {
    paddingTop: '30%',
    alignItems: 'center',
  },
  error: {
    fontSize: 14,
    alignSelf: 'center',
    fontStyle: 'italic',
  },
  city: {
    fontSize: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  description: {
    fontSize: 16,
    fontStyle: 'italic',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  info: {
    fontSize: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});
