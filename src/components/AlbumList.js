import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  state = { albums: []};
  
  componentWillMount () {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(({data}) => {
        this.setState( {albums: data})
      })
  }
  
  renderAlbums(albums) {
    return albums.map(album => {
    return (
      <AlbumDetail key={album.title} album={album} />
    )})
    
  }
  render () {
    if (this.state.albums.length==0 ) {
      return <View><Text>Loading...</Text></View>
    }
    const cnt = this.state.albums.length;
    return (
      <View>
      {/* <Text>😄Album List..✌😽 😄 ({cnt})</Text> */}
        <ScrollView>
          {this.renderAlbums(this.state.albums)}
        </ScrollView>

      </View>
    )
  }
}

export default AlbumList;