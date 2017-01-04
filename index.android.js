/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Text, AppRegistry, View,StyleSheet } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList'

const App = () => {
  return  (
  <View>
    <Header headerText='Albums!'/>
    <AlbumList />  
  </View>
)};


AppRegistry.registerComponent('albums', () => App);
