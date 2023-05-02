import { TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

import { Provider } from './src/context/BlogContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'Blogs' }}>
          <Stack.Screen
            name='Index'
            component={IndexScreen}
            options={({ navigation, route }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                  <Text>
                    <Feather name='plus' size={30} />
                  </Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name='Show'
            component={ShowScreen}
            options={({ navigation, route }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Edit', { id: route.params.id })
                  }
                >
                  <Text>
                    <Feather name='edit' size={35} />
                  </Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name='Create' component={CreateScreen} />
          <Stack.Screen name='Edit' component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
