import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Bruno from './SRC/components/bruno';
import Anajulia from './SRC/components/anajulia';
import Carol from './SRC/components/carol';
import Giovani from './SRC/components/giovani';
import Title from './SRC/components/title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Bruno/>
      <Anajulia/>
      <Carol/>
      <Giovani/>

      <Button title="Enviar" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6600ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});