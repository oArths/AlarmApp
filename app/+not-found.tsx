import { Stack } from 'expo-router';
import * as R from 'react-native'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <R.Text>

        olaaa
      </R.Text>

    </>
  );
}
