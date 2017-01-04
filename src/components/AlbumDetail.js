import React from 'react';
import { Text, View , Image, Linking } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url} = album;
  const { headerContentStyle, 
          imageStyle, 
          thumbnailContainerStyle, 
          headerTextStyle, 
          artworkStyle
        } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle} >
          <Image 
            style={imageStyle}
            source={{uri: thumbnail_image}}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>       
          <Text >{artist}</Text>       
        </View>
      </CardSection>

      <CardSection>
        <Image 
          style = {artworkStyle}
          source={{uri:image }} />
      </CardSection>

      <CardSection>
        <Button  onPress={()=> Linking.openURL(url)}>
          Buy this Album..🎵🎵
        </Button>
      </CardSection>

      
    </Card>
  )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },

  imageStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  artworkStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  buttonStyle: {

  }

}

export default AlbumDetail