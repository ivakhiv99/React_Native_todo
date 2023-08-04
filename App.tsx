import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Header } from './components';

import Navigator from './routes/homeStack'; 

export default function App() {

      
  return( <Navigator/> );

  // return (
  //   <View style={styles.container}>
  //     <Header/>
  //     <Navigator/>
  //     <StatusBar style="auto" />
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
