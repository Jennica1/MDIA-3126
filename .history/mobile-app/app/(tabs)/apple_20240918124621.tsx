import { Pressable, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return ( <Text>aple</Text>;
  <Link href='/' asChild>
    <Pressable>
        <Text>Index</Text>
    </Pressable>
  </Link>
  )
}
