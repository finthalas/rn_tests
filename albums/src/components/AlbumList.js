//AlbumList.js

// Disables eslint error messages about line endings. Windows only
///*eslint linebreak-style: ["error", "windows"]*/


import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail.js';

//Este código se queda aquí para recordar la diferencia entre functional y class components
/***** Functional component:
const AlbumList = () => {
  return (
    <View>
      <Text>Album List!!!!</Text>
    </View>
  );
};
*/

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    //console.log('componentWillMount in AlbumList');
    //debugger;

    // ASYNC HTTP Request to get albums from the API.
    // eslint-disable-next-line
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
        .then((responseData) => this.setState({ albums: responseData }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
       <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
