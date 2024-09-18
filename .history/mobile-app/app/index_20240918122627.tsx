import { View } from 'react-native';

import { Link } from 'expo-router';


export default function Page() {
  return (
    <View>
      <Link href="/sandwich">sandwich</Link>
      <Link href="/apple">apple</Link>
      
    </View>
  );
}
