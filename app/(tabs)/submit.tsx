import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import SubmitComponent from '@/components/SubmitComponent';


export default function SubmitScreen() {
  return (
    <SafeAreaView>
       <SubmitComponent isSubscribed={true} />
    </SafeAreaView>
  );
}
  
