import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import RootNavigator from './src/navigation';
import HomeScreen from './src/screen/HomeScreen/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RootNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : "#fff",
    flex : 1
  }
})


