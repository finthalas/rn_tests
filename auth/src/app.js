import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBTwB9ywnTolw-WldS_3hVHv90I9AVfKTg',
      authDomain: 'auth-e4d84.firebaseapp.com',
      databaseURL: 'https://auth-e4d84.firebaseio.com',
      projectId: 'auth-e4d84',
      storageBucket: 'auth-e4d84.appspot.com',
      messagingSenderId: '349812637855'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          //<Card>
          <View style={{ padding: 10, flexDirection: 'row' }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
          //</Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          //<Card>
          <View
            style={{
              padding: 10,
              //justifyContent: 'flex-start',
              flexDirection: 'row',
              //position: 'relative'
            }}
          >
            <Spinner
              size="large"
            />
          </View>
          //</Card>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
