
import { Redirect } from 'expo-router';
//import { useAuth } from '../../utils/auth';

export default function Layout() {
  const  user  = true
  if (user) {
    return <Redirect href="/" />;
  }
  return <></>;
}

