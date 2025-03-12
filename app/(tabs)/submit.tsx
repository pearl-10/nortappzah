import { SafeAreaView } from 'react-native-safe-area-context';
import SubmitComponent from '@/components/SubmitComponent';


export default function SubmitScreen() {
  return (
    <SafeAreaView >
       <SubmitComponent isSubscribed={true} />
    </SafeAreaView>
  );
}
  
