import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { StyleSheet, Button, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { addCartProduct } from "../../api/apiEndpoints";

export const BarcodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);
  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("Type: " + type + "\nData: " + data);
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  // Return the View
  return (
    
        <View style={styles.container}>
      <View>
      </View>
      <View>
        <Text style={styles.maintext}>Align camera to scan barcode</Text>
      </View>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 450, width: 450 }}
        />
      </View>
      <Text style={styles.maintext}>Scanned barcode: {text}</Text>

      {scanned && (
        <Button
          title={"Scan again?"}
          onPress={() => {setScanned(false); setText("Not yet scanned")}}
          color="tomato"
        />
      )}
      
      {scanned && (
        <Pressable
          title={"Add product to cart"}
          style={styles.button}
          onPress={() => {setScanned(false); setText("Not yet scanned"); addCartProduct(text);}}
        ><Text style={styles.btnText}>Add product to cart</Text></Pressable>
      )}
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
},
button: {
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 4,
  elevation: 3,
  backgroundColor: '#DFFFD8',
  borderColor:'rgba(0,0,0,0.2)',
},
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  maintext: {
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      fontSize: 15,
      marginHorizontal: 25,
      marginTop: 25,
      paddingHorizontal: 50,
      marginBottom: 12,
      // height: 60,
      color: "#000",
      fontWeight: "bold",
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 12,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get('screen').width - 20,
   
  },
  btnText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 40,
    backgroundColor: "#DFFFD8",
  },
});
