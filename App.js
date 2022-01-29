import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import Titles from './components/Titles';
import Weather from './components/Weather';
import CityPicker from './components/CityPicker';

const API_KEY = '6b6789850ac5bed7fec7b652fd973842';
class App extends React.Component {
  constructor() {
    super();
    // set initial state
    this.state = {
      id: '',
      city: '',
      temperature: '',
      pressure: '',
      humidity: '',
      description: '',
      error: '',
    };
  }
  // fetch API by city name
  getWeather = city => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      {}
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // check if input is valid
        if (data.cod == 404) {
          this.setState({
            city: '',
            temperature: '',
            pressure: '',
            humidity: '',
            description: '',
            error: 'Please make sure your input is valid.',
          });
        } else if (city) {
          this.setState({
            city: data.name,
            temperature: data.main.temp,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            description: data.weather[0].main,
            error: '',
          });
        } else {
          this.setState({
            city: '',
            temperature: '',
            pressure: '',
            humidity: '',
            description: '',
            error: 'Please enter a city.',
          });
        }
      })
      .catch(error => {});
  };

  handleChange = value => {
    this.setState({ city: value });
    this.getWeather(value);
  };
  // get background image by weather conditions
  getImage = () => {
    if (this.state.description === 'Rain') {
      return require('./assets/rain.jpg');
    } else if (this.state.description === 'Clear') {
      return require('./assets/clear.jpg');
    } else if (this.state.description === 'Clouds') {
      return require('./assets/clouds.jpg');
    } else if (this.state.description === 'Thunderstorm') {
      return require('./assets/thunderstorm.jpg');
    } else if (this.state.description === 'Drizzle') {
      return require('./assets/drizzle.jpg');
    } else if (this.state.description === 'Mist') {
      return require('./assets/mist.jpg');
    } else if (this.state.description === 'Dust') {
      return require('./assets/mist.jpg');
    } else if (this.state.description === 'Snow') {
      return require('./assets/snow.jpg');
    } else {
      return;
    }
  };
  getIcon = () => {
    if (!this.state.city) {
      return require('./assets/light-rain.jpg');
    }
  };
  render() {
    return (
      <View style={app.container}>
        <ImageBackground style={app.image_background} source={this.getImage()}>
          <Titles style={app.titles} />
          <CityPicker
            style={app.city_picker}
            handleChange={this.handleChange}
          />
          <Weather
            city={this.state.city}
            temperature={this.state.temperature}
            pressure={this.state.pressure}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
          <ImageBackground style={app.icon} source={this.getIcon()} />
        </ImageBackground>
      </View>
    );
  }
}

export default App;

const app = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  city_picker: {
    backgroundColor: 'white',
  },
  image_background: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  icon: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    zIndex: -3,
  },
});
