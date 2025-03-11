import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
interface Ticket {
  id: string;
  subject: string;
  status: 'Open' | 'Closed' | 'In Progress';
}

const tickets: Ticket[] = [
  { id: '1', subject: 'Ticket 1', status: 'Open' },
  { id: '2', subject: 'Ticket 2', status: 'Closed' },
  { id: '3', subject: 'Ticket 3', status: 'In Progress' },
];

export default function Tickets() {
  return (
    <SafeAreaView>
    
      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.subject}</Text>
            <Text>{item.status}</Text>
          </View>
        )}
      />
    
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
