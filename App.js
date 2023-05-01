import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from './src/screens/IndexScreen';

import { BlogProvider } from './src/context/BlogContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'Blogs' }}>
          <Stack.Screen name='Home' component={IndexScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
