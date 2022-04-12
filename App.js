import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar} from 'react-native';

/* const isAndroid = Platform.OS === 'android' */

console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <>
    <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={{padding: 16, backgroundColor:"green"}}>
        <Text>This is the search bar</Text>
        </View>
      <View style={{flex: 1, padding: 16, backgroundColor:"blue"}}>
        <Text>This will be the list</Text>
       </View>
        <ExpoStatusBar style='auto' />
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({

});
