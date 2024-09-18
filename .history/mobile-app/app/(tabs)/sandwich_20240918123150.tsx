import { Text, View} from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View>
    <Link href="/">index</Link>
    <Link href="/apple">apple</Link>
    </View>
    
  );
}
