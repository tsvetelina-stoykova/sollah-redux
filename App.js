import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack'

import store from './store/store';
import BlogsScreen from './screens/BlogsScreen'
import BlogScreen from './screens/BlogScreen'
import AssetsScreen from './screens/AssetsScreen'
import AssetScreen from './screens/AssetScreen';
import AssetDetailsScreen from './screens/AssetDetailsScreen';

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AssetsStack = () => {
  return <Stack.Navigator>
    <Stack.Screen name="AssetsScreen"  component={AssetsScreen} options={{ title: "" }}/>
    <Stack.Screen 
      name="AssetScreen" 
      component={AssetScreen}
      options={({route}) => {
        const assetName = route.params.assetName;
        return {
          title: assetName
        }
      }} 
    />
    <Stack.Screen name="AssetDetailsScreen" component={AssetDetailsScreen}/>
  </Stack.Navigator>
}
const BlogsStack = () => {
  return <Stack.Navigator>
    <Stack.Screen name="BlogsScreen" component={BlogsScreen} options={{title: "Blog Posts"}}/>
    <Stack.Screen 
      name="Blog" 
      component={BlogScreen}
      options={{title: "Blog Post"}} 
    />
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
