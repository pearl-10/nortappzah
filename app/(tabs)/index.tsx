import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
    <View style={styles.titleContainer}>
    <Text>Step 1</Text>
    <Text>Step 2</Text>
    <Text>Step 3</Text>
    </View>
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
