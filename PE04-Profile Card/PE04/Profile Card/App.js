import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
        <View style={styles.cardImageContainer}>
        <Image style={styles.cardImage}
                source={require('./user.png')}/>
      </View>
      <Text style={styles.cardName}>{profileName}</Text>
      <View style={styles.nameBorder}><Text style={styles.cardJob}>{profileJob}</Text>
      </View>
      <Text style={styles.cardProfile}>{profile}</Text>
      </View>
      </View>
    );
  }
}

const profileCardColor = 'steelblue';
const profileName = 'John Doe';
const profileJob = 'React Native Developer'
const profile = 'John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    alignItems: 'center', //new
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    marginTop: 10,
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cardImage: {
    alignItems: 'center',
    marginTop: 15,
    width: 80,
    height: 80
  },
  cardName: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  nameBorder: {
    borderBottomWidth: 2.5,
    borderBottomColor: '#000',
  },
  cardJob: {
    alignItems: 'center',
    marginTop: 15,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'
  },
  cardProfile: {
    textAlign: 'justify',
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30,
    fontSize: 15,
    color: 'black'
  }
});