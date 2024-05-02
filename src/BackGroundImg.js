import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {uri: 'https://images.unsplash.com/photo-1713288971538-80084dbfc161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8'};

const BackGroundImg = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Chocolate</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    lineHeight: 200,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent:'center',
    backgroundColor: '#000000c0',
  },
});

export default BackGroundImg;