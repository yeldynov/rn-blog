import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from './src/screens/IndexScreen';

import { Provider } from './src/context/BlogContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'Blogs' }}>
          <Stack.Screen name='Home' component={IndexScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
