import AuthOverlay from '@/components/overlay/AuthOverlay';
import VideoComponent from '@/components/VideoComponent';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <VideoComponent />
    </SafeAreaView>
  );
}