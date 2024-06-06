import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import bruno from './SRC/components/bruno';
import giovani from './SRC/components/giovani';
import carol from './SRC/components/carol';
import anajulia from './SRC/components/anajulia';


export default function App() {
  return (
    <View style={styles.container}>
      <bruno/>
      <anajulia/>
      <carol/>
      <giovani/>

      <Button 
      title="Enviar"/>


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
