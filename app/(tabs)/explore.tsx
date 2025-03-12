import ExploreScreen from '@/components/Explore';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{backgroundColor: '#000', flex: 1}}>
      <ExploreScreen isSubscribed />
    </SafeAreaView>
  );
}

