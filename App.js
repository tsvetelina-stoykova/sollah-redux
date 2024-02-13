import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack'

import store from './store/store';
import BlogsScreen from './screens/BlogsScreen'
import BlogDetailsScreen from './screens/BlogDetailsScreen'
import AssetsScreen from './screens/AssetsScreen'
import AssetScreen from './screens/AssetScreen';
import AssetDetailsScreen from './screens/AssetDetailsScreen';

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AssetsStack = () => {
  return <Stack.Navigator>
    <Stack.Screen name="AssetsScreen" component={AssetsScreen}/>
    <Stack.Screen name="AssetScreen" component={AssetScreen}/>
    <Stack.Screen name="AssetDetailsScreen" component={AssetDetailsScreen}/>
  </Stack.Navigator>
}
const BlogsStack = () => {
  return <Stack.Navigator>
    <Stack.Screen name="BlogsScreen" component={BlogsScreen}/>
    <Stack.Screen name="Blog" component={BlogDetailsScreen}/>
  </Stack.Navigator>
}



export default function App() {
  return (
    <>
      <StatusBar />
      <Provider store={store}>
        <NavigationContainer>
          <BottomTabs.Navigator>
            <BottomTabs.Screen 
              name='Assets'
              component={AssetsStack}
              options={{
                headerShown: false,
              }}
            />
            <BottomTabs.Screen 
              name='Blogs'
              component={BlogsStack}
              options={{
                headerShown: false,
              }}
            />           
          </BottomTabs.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
