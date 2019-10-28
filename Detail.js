import React, { Component, Fragment } from 'react'
import { StyleSheet, Text, View, Button, Alert, ScrollView, Dimensions, Image } from 'react-native'


const height = Dimensions.get("window").height;

class DetailScreen extends Component {
  static navigationOptions = {
    title: 'Detay',
  };

 constructor(props) {
   super(props);

    this.state = {
      photo: props.navigation.state.params.photo
    }
  }

  render() {
    const { photo } = this.state;

    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{
          margin: 15, flex: 1, marginTop: 0,
          flexDirection: 'row', flexWrap: 'wrap', 
          alignItems: 'flex-start', justifyContent: "space-between"
        }}>
            <Image
          style={{ width: "100%", height: 150 }}
          source={{ uri: photo.thumbnailUrl }}
        />
        <Text style={{ color: "#000", textAlign: "left", }}>ID: {photo.id}</Text>
        <Text style={{ color: "black", textAlign: "left", }}>Title: {photo.title}</Text>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  MainStyle: {
    flex: 1,
  },
});

export default DetailScreen;