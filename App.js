import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import {BarcodeScanner} from './components/barcode-component/BarcodeScanner';

export default function App() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    // https://user-images.githubusercontent.com/22055184/226119396-4963e56e-4501-4463-9c7d-4eab39aee7fb.jpg

    // https://user-images.githubusercontent.com/22055184/226120606-25b883fb-3ba4-4044-b2eb-8b707a1f65a4.jpg

    <ImageBackground source={{uri: ''}} resizeMode="repeat" style={styles.imgBackground}>
      <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.heading}>FILLIN RIGHT</Text>
      <BarcodeScanner/>
    </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f2f4f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading :{
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      fontSize: 20,
      marginHorizontal: 25,
      marginTop: 25,
      paddingHorizontal: 50,
      // height: 60,
      color: "#282c7f",
      fontWeight: "bold",
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 12,
      textAlign: 'center',
      width: Dimensions.get('screen').width - 20,
  },

  imgBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: "#f2f4f3",
    flex: 1 
}
});
