import React, { Component, Fragment } from 'react'
import {
  ImageBackground,
  StyleSheet, Text, View, Button, Alert, ScrollView,
  TouchableOpacity, Dimensions, Image
} from 'react-native'

import Swiper from 'react-native-swiper'


const styles = StyleSheet.create({
  MainStyle: {
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  swiper: {
    height: 250
  }
});


const height = Dimensions.get("window").height;

class HomeScreen extends Component {
  static navigationOptions = { header: null };

  state = {
    photos: [],
    activeHeaderBackgroundUrl: 'https://purepng.com/public/uploads/large/purepng.com-sandwichfood-slice-salad-tasty-bread-vegetable-health-delicious-breakfast-sandwich-941524618723s9u0o.png',
    headerBackgrounds: [
      'https://purepng.com/public/uploads/large/purepng.com-sandwichfood-slice-salad-tasty-bread-vegetable-health-delicious-breakfast-sandwich-941524618723s9u0o.png',
      'https://cdn.imgbin.com/18/21/4/imgbin-pancake-waffle-sticky-bun-breakfast-bacon-breakfast-YGRxeCeAHaeZRZgb7t2DtW4ct.jpg',
      'https://cdn.imgbin.com/18/21/4/imgbin-pancake-waffle-sticky-bun-breakfast-bacon-breakfast-YGRxeCeAHaeZRZgb7t2DtW4ct.jpg',
      'https://cdn.imgbin.com/18/21/4/imgbin-pancake-waffle-sticky-bun-breakfast-bacon-breakfast-YGRxeCeAHaeZRZgb7t2DtW4ct.jpg',
      'https://cdn.imgbin.com/18/21/4/imgbin-pancake-waffle-sticky-bun-breakfast-bacon-breakfast-YGRxeCeAHaeZRZgb7t2DtW4ct.jpg',
    ]
  }

  getSlideItems() {
    const renderItems = [];

    for (let i = 0; i < 5; i++) {
      renderItems.push(<View style={{ flexDirection: "column", paddingBottom: 5, paddingTop: 30, }} key={i}>
      <Text style={{ color: "#fff", fontSize: 22 }}>Günün Çorbası {i}</Text>
      <Text style={{ color: "#938b8f", fontSize: 14, fontWeight: "200" }}>Beyaz Salon - Öğlen</Text>
      <View style={{ flexDirection: "row", paddingBottom: 5, paddingTop: 20 }}>
        <Text style={{ flex: 1, fontWeight: "300", color: "#fff", fontSize: 18 }}>Mercimek Çorbası</Text>
        <Text style={{ flex: 1, color: "#938b8f", fontSize: 14, fontWeight: "200", textAlign: "right" }}>55,9 kcal</Text>
      </View>
      <View style={{ flexDirection: "row", paddingBottom: 5 }}>
        <Text style={{ flex: 1, fontWeight: "300", color: "#fff", fontSize: 18 }}>İçli Köfte</Text>
        <Text style={{ flex: 1, color: "#938b8f", fontSize: 14, fontWeight: "200", textAlign: "right" }}>350 kcal</Text>
      </View>
      <View style={{ flexDirection: "row", paddingBottom: 5 }}>
        <Text style={{ flex: 1, fontWeight: "300", color: "#fff", fontSize: 18 }}>Taze Ayşe Fasulye</Text>
        <Text style={{ flex: 1, color: "#938b8f", fontSize: 14, fontWeight: "200", textAlign: "right" }}>31,3 kcal</Text>
      </View>
      <View style={{ flexDirection: "row", paddingBottom: 5 }}>
        <Text style={{ flex: 1, fontWeight: "300", color: "#fff", fontSize: 18 }}>Cacık</Text>
        <Text style={{ flex: 1, color: "#938b8f", fontSize: 14, fontWeight: "200", textAlign: "right" }}>128 kcal</Text>
      </View>
    </View>);
 
      
    }

    return renderItems;
  }

  getPhotos(photos) {
    const { navigate } = this.props.navigation;

    return photos.map((photo, i) =>
      <TouchableOpacity
        style={{
          width: "45%",
          margin: "2.5%",
          padding: 10,

          backgroundColor: "#282c34",
        }}
        onPress={() => navigate('Detail', { photo })}
        key={i}>
        <Image
          style={{ width: "100%", height: 150 }}
          source={{ uri: photo.thumbnailUrl }}
        />
        <Text style={{ color: "white", textAlign: "left", }}>ID: {photo.id}</Text>
        <Text style={{ color: "white", textAlign: "left", }}>Title: {photo.title}</Text>
      </TouchableOpacity>);

  }

  componentDidMount() {
    this.getMoviesFromApiAsync();
  }

  getMoviesFromApiAsync() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((photos) => this.setState({ photos: photos.slice(0, 6) }))
      .catch((error) => {
        console.error(error);
      });
  }

  onIndexChanged(index) {
    const headerBackgroundUrl = this.state.headerBackgrounds[index];

    this.setState({ activeHeaderBackgroundUrl: headerBackgroundUrl});

  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#0A0E1C" }}>
        <ImageBackground style={{ backgroundColor: "#282c34",
         borderBottomLeftRadius: 20, borderBottomRightRadius: 20, margin: 20, marginTop: 0}} source={{uri: this.state.activeHeaderBackgroundUrl}}>
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row", paddingBottom: 5, paddingTop: 30, alignItems: "center" }}>
              <Text style={{ flex: 1, color: "#ffffff", textAlign: "left" }}>icon</Text>
              <Text style={{ flex: 2.5, color: "#ffffff", textAlign: "center", fontSize: 24, fontWeight: "bold" }}>BAŞLIK</Text>
              <Text style={{ flex: 1, color: "#ffffff", textAlign: "right" }}>icon</Text>
            </View>
            <Swiper style={styles.swiper} showsButtons={false} onIndexChanged={this.onIndexChanged.bind(this)}>
              {this.getSlideItems()}
            
            </Swiper>
            </View>
        </ImageBackground>
        <View style={{
          margin: 25, flex: 1, marginTop: 0,
          flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: "space-between"
        }}>
          {this.getPhotos(this.state.photos)}
        </View>

      </ScrollView>
    );
  }
}


export default HomeScreen;